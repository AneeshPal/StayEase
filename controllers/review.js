const Listing=require("../models/listing");
const Review=require("../models/review");



//Reviews
//Create Route
module.exports.createReview=async(req,res)=>{
    // let {id}=req.params;
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
  
    newReview.author=req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);
  
    await newReview.save();
    await listing.save();
  
    console.log("new review saved");
    res.redirect(`/listings/${listing._id}`);
};

//Delete Review Route
module.exports.destroyReview=async(req,res)=>{
    let{id,reviewId}=req.params;
  
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
  
    res.redirect(`/listings/${id}`);

};