import "./config.js"
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { GlobalErrorHandler } from "./controllers/ErrorHandler.js";
import userRouter from "./routes/userRoutes.js"


const app = express();
app.use(express.json());
app.use(cors())
// const uri=process.env.MONGO_URI.replace("<username>",process.env.USERNAME).replace("<password>",process.env.PASSWORD);

mongoose.connect(process.env.MONGO_URI).then((res)=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err)
})

//routes
app.use("/api/v1/auth",userRouter);


//error handling
app.use(GlobalErrorHandler);


const port=process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})