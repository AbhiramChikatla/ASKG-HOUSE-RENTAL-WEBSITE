import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
});
export const Subscriber = mongoose.model("Subscriber", subscriberSchema);
