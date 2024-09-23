import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: { type: String, minLength: 8, required: true },
    rating: Number,
    phoneNo: Number,
    description: String,
    experience: String,
    area: String,
    address: String,
    license_no: String,
    property_type: String,
});
export const AgentModel = mongoose.model("Agents", agentSchema);
