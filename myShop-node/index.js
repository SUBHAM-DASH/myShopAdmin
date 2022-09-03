import dotenv from 'dotenv';
dotenv.config();
import connectToDb from './configs/db.js';
const DATABASE_URL = process.env.DATABASE_URL;
import express from 'express';
const app = express();
import cors from 'cors';
const port = process.env.PORT;


import adminRoute from './routes/admin/adminRoute.js';
import vendorRoute from './routes/vendor/vendorRoute.js';

//CORS POLICY
app.use(cors());

//DATABASE CONNECT
connectToDb(DATABASE_URL);

//MIDDLEWARE
app.use(express.json());




//LOAD ROUTES FOR ADMIN
app.use('/api/admin',adminRoute);


//LOAD ROUTES FOR VENDOR
app.use('/api/vendor',vendorRoute);




app.listen(port,()=>{
    console.log(`port running at http://localhost:${port}`);
});
