const mongoose = require("mongoose");
const Schema = mongoose.Schema; // stored in variable so that we don't have to write mongoose.Schema Again and again.

const reviewSchema=new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Review=mongoose.model("Review",reviewSchema);

module.exports=Review;