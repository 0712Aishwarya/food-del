import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://0712aishwarya:Aish0712@cluster0.yiycpqb.mongodb.net/food-del').then(()=>console.log("DB connected"));
}