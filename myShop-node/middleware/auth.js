import jwt from 'jsonwebtoken';
import AdminModel from '../models/admin/Admin.js';
import VendorModel from '../models/vendor/Vendor.js';

const checkTokenAuthorization = async (req, res, next) => {
    try {
        let token;
        const { authorization } = req.headers;
        if (authorization && authorization.startsWith('Bearer')) {
            token = authorization.split(' ')[1];
            //VERIFY TOKEN
            const { adminId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const { vendorId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
            //GET ADMIN FROM TOKEN 
            req.admin = await AdminModel.findById(adminId).select('-password');
            req.vendor = await VendorModel.findById(vendorId).select('-password');
            next();
        } else {
            res.json({ status: "failed", message: "Authentication error" });
        }
        if (!token) {
            res.json({ status: "failed", message: "Token not available" });
        }
    } catch (error) {
        return res.json({ error: error.message });
    }
}
export default checkTokenAuthorization;
