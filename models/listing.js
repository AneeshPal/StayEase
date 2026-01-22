const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js"); // stored in variable so that we don't have to write mongoose.Schema Again and again.

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {    
        url: String,
        filename:String,
   },
    price: Number,
    location: String,
    country: String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
           type:Schema.Types.ObjectId,
          ref:"User",
    },
    geometry:{
        type:{
            type:String,  // Don't do '{location:{type:String}}'
            enum:["Point"], // 'location.type' must be "Point"
            required:true,
        },
        coordinates:{
            type:[Number],
            required:true,
        },
    },
});

//Deleting Middleware

listingSchema.post("findOneAndDelete",async(req,res)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
})

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;