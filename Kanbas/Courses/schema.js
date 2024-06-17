import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    number: String,
    name: {type: String, required: true},
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
    author: String,
    image: String,
},
    { collection: "courses" }
);
export default courseSchema;