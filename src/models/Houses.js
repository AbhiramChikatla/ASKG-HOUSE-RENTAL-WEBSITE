import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Agents" },
    title: String,
    address: String,
    emiPerMonth: Number,
    house_type: String,
    house_size:String,
    location:String,
    city:String,
    price: Number,
    numBathrooms: Number,
    numBedrooms:Number, 
    description: String,
    parking:Boolean,
    outdoor:Boolean,
    ac:Boolean,
    yearBuilt:Date,
    pricePerSqft:Number 
    
});
export const HouseModel = mongoose.model("Houses", houseSchema);
