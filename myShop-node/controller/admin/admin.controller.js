import AdminModel from '../../models/admin/Admin.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import transporter from '../../configs/emailConfig.js';

class AdminController {
    //ADMIN REGISTRATION
    static adminRegistration = async (req, res) => {
        const { firstname, lastname, phone ,email, password, password_confirmation } = req.body;

        const adminFind = await AdminModel.findOne({ email: email });
        if (adminFind) {
            return res.status(400).json({ status: "failed", message: "admin already exits" });
        }
        if (!email && !password && !password_confirmation) {
            return res.status(400).json({ status: "failed", message: "please fill all the required field" });
        }
        if (password !== password_confirmation) {
            return res.status(400).json({ status: "failed", message: "password does not match" });
        }

        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const newAdmin = new AdminModel({
                email: email,
                password: hashPassword,
                firstName: firstname,
                lastName: lastname,
                phoneNumber: phone
            });
            await newAdmin.save();
            const savedAdmin = await AdminModel.findOne({ email: email });
            //GENERATE TOKEN
            const token = jwt.sign({ adminId: savedAdmin._id }, process.env.JWT_SECRET_KEY, { expiresIn: '4d' });
            res.json({ status: "success", message: "successfully account created", token: token });
        } catch (error) {
            return res.json({ error: error.message });
        }

    }

    //ADMIN LOGIN
    static adminLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            const adminFind = await AdminModel.findOne({ email: email });
            const isMatch = await bcrypt.compare(password, adminFind.password);
            if ((email === adminFind.email) && isMatch) {
                //GENERATE TOKEN
                const token = jwt.sign({ adminId: adminFind._id }, process.env.JWT_SECRET_KEY, { expiresIn: '4d' });
                res.json({ status: "success", message: "Login Successfully", token: token });
            } else {
                res.status(400).json({ status: "failed", message: "please use correct credentials" });
            }
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    //CHANGE ADMIN PASSWORD
    static changeAdminPassword = async (req, res) => {
        try {
            const { password, password_confirmation } = req.body;
            if (password && password_confirmation) {
                if (password !== password_confirmation) {
                    res.json({ status: "failed", message: "password and confirm password doesn't match" });
                }
                const salt = await bcrypt.genSalt(10);
                const newHashPassword = await bcrypt.hash(password, salt);
                await AdminModel.findByIdAndUpdate(req.admin._id, { $set: { password: newHashPassword } })
                res.json({ status: "success", message: "password changed successfully" });
            }
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    //FORGOT PASSWORD RESET THE EMAIL
    static adminForgotPassword = async (req, res) => {
        try {
            const { email } = req.body;
            if (!email) {
                res.json({ status: "failed", message: "Email field is required" });
            }
            const findAdmin = await AdminModel.findOne({ email: email });
            if (!findAdmin) {
                res.json({ status: "failed", message: "email doesn't exists" });
            }




            const secret = findAdmin._id + process.env.JWT_SECRET_KEY;
            const token = jwt.sign({ adminId: findAdmin._id }, secret, { expiresIn: '15m' });
            let link = `http://localhost:4200/api/admin/reset/${findAdmin._id}/${token}`;

            let info = await transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: findAdmin.email,
                subject: "Password Reset Link",
                html: `<a href=${link}>Click Here </a> To reset your password`
            });

            res.json({ status: "success", message: "Email sent to your mail... Please check your mail", info: info });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    //ADMIN PASSWORD RESET
    static resetAdminPassword = async (req, res) => {
        try {
            const { password, password_confirmation } = req.body;
            const { id, token } = req.params;
            const findAdmin = await AdminModel.findById(id);
            const newToken = findAdmin._id + process.env.JWT_SECRET_KEY;
            jwt.verify(token, newToken);
            if (password !== password_confirmation) {
                res.json({ status: "failed", message: "password and confirm password doesn't match" });
            }
            const salt = await bcrypt.genSalt(10);
            const newHash = await bcrypt.hash(password, salt);
            await AdminModel.findByIdAndUpdate(findAdmin._id, { $set: { password: newHash } });
            res.json({ status: "success", message: "Password Successfully Changed" });
        } catch (error) {
            res.json({ error: error.message });
        }
    }
}

export default AdminController;