import mongoose from 'mongoose';

//Defining Schema
const adminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    created_At: {
        type: Date,
        default: Date.now
    }
});

const AdminModel = mongoose.model('admin', adminSchema);

export default AdminModel;
