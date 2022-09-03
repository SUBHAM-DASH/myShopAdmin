import mongoose from 'mongoose';

//Defining Schema
const vendorSchema = new mongoose.Schema({
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

const VendorModel = mongoose.model('vendor', vendorSchema);

export default VendorModel;
