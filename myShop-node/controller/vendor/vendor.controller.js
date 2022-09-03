import VendorModel from '../../models/vendor/Vendor.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class VendorController {
    //VENDOR REGISTRATION
    static vendorRegistration = async (req, res) => {
        const { email, password, password_confirmation } = req.body;

        const vendorFind = await VendorModel.findOne({ email: email });
        if (vendorFind) {
            return res.json({ status: "failed", message: "admin already exits" });
        }
        if (!email && !password && !password_confirmation) {
            return res.json({ status: "failed", message: "please fill all the required field" });
        }
        if (password !== password_confirmation) {
            return res.json({ status: "failed", message: "password does not match" });
        }
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const newVendor = new VendorModel({
                email: email,
                password: hashPassword
            });
            await newVendor.save();

            const savedVendor = await VendorModel.findOne({ email: email });
            //GENERATE TOKEN
            const token = jwt.sign({ vendorId: savedVendor._id }, process.env.JWT_SECRET_KEY, { expiresIn: '4d' });
            res.json({ status: "success", message: "successfully account created", token: token });

        } catch (error) {
            return res.json({ error: error.message });
        }

    }

    //VENDOR LOGIN
    static vendorLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            const vendorFind = await VendorModel.findOne({ email: email });
            const isMatch = await bcrypt.compare(password, vendorFind.password);
            if ((email === vendorFind.email) && isMatch) {
                //GENERATE TOKEN
                const token = jwt.sign({ vendorId: vendorFind._id }, process.env.JWT_SECRET_KEY, { expiresIn: '4d' });
                res.json({ status: "success", message: "Login Successfully", token: token });
            } else {
                res.json({ status: "failed", message: "please use correct credentials" });
            }
        } catch (error) {
            return res.json({ error: error.message });
        }
    }

    //CHANGE VENDOR PASSWORD
    static changeVendorPassword = async (req, res) => {
        try {
            const { password, password_confirmation } = req.body;
            if (password && password_confirmation) {
                if (password !== password_confirmation) {
                    res.json({ status: "failed", message: "password and confirm password doesn't match" });
                }
                const salt = await bcrypt.genSalt(10);
                const newHashPassword = await bcrypt.hash(password, salt);
                await VendorModel.findByIdAndUpdate(req.vendor._id, { $set: { password: newHashPassword } })
                res.json({ status: "success", message: "password changed successfully" });
            }
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    //FORGOT PASSWORD RESET THE EMAIL
    static vendorForgotPassword = async (req, res) => {
        try {
            const { email } = req.body;
            if (!email) {
                res.json({ status: "failed", message: "Email field is required" });
            }
            const findVendor = await VendorModel.findOne({ email: email });
            if (!findVendor) {
                res.json({ status: "failed", message: "email doesn't exists" });
            }
            const secret = findVendor._id + process.env.JWT_SECRET_KEY;
            const token = jwt.sign({ vendorId: findVendor._id }, secret, { expiresIn: '15m' });
            let link = `http://localhost:4200/api/admin/reset/${findVendor._id}/${token}`;
            console.log(link);
            let info = await transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: findVendor.email,
                subject: "Password Reset Link",
                html: `<a href=${link}>Click Here </a> To reset your password`
            });

            res.json({ status: "success", message: "Email sent to your mail... Please check your mail", info: info });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    //VENDOR PASSWORD RESET
    static resetVendorPassword = async (req, res) => {
        try {
            const { password, password_confirmation } = req.body;
            const { id, token } = req.params;
            const findVendor = await VendorModel.findById(id);
            const newToken = findVendor._id + process.env.JWT_SECRET_KEY;
            jwt.verify(token, newToken);
            if (password !== password_confirmation) {
                res.json({ status: "failed", message: "password and confirm password doesn't match" });
            }
            const salt = await bcrypt.genSalt(10);
            const newHash = await bcrypt.hash(password, salt);
            await VendorModel.findByIdAndUpdate(findVendor._id, { $set: { password: newHash } });
            res.json({ status: "success", message: "Password Successfully Changed" });
        } catch (error) {
            res.json({ error: error.message });
        }
    }
}

export default VendorController;