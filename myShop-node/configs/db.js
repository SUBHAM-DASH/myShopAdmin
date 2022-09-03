import mongoose from "mongoose";

const connectToDb = async (DATABASE_URL)=>{
    try {
        const DB_OPTIONS = {
            dbName:"myShop"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected to mongoose successfully");
    } catch (error) {
        return error.message;
    }
}
export default connectToDb;