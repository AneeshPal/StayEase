const mongoose = require("mongoose");
const Schema = mongoose.Schema; // stored in variable so that we don't have to write mongoose.Schema Again and again.

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        default:"https ://unsplash.com/photos/a-staircase-leading-up-to-the-ocean-with-a-potted-plant-on-top-of-it-h-EvL41BRS4",
        type: String,
        set: (v) => v === "" ? "https ://unsplash.com/photos/a-staircase-leading-up-to-the-ocean-with-a-potted-plant-on-top-of-it-h-EvL41BRS4" :v,
   },
    price: Number,
    location: String,
    country: String
});

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;