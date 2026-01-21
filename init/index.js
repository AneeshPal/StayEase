const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

//Database connection
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
     console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});


async function main(){
    await mongoose.connect(MONGO_URL);
}

// Function to initialise initial data
const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"696c85d1e4e71357745b3d44",}));
    await Listing.insertMany(initData.data);
    console.log(" Initial data was initialized");
};
initDB();

