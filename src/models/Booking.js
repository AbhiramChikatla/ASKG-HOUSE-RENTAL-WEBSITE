import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    phoneNo:Number,
    startDate:Date,
    endDate:Date,
    TotalAmount:Number,
    bookedHouse:{type:mongoose.Schema.Types.ObjectId,ref:"Houses"}
    
});
export const BookingModel = mongoose.model("Booking", bookingSchema);
