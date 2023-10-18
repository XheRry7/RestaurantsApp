import mongoose from "mongoose";

const { Schema } = mongoose;

const shopSchema = new Schema({
    shopName: { type: String, required: true, unique: true },
    shopNumber: { type: Number, required: true, unique: true },
    floorNumber: { type: Number, required: true },
    shopType: { type: String, required: true },
    isArchive: { type: Boolean, default: false },
    Status: {
        type: String,
        uppercase: true,
        required: true,
        enum: ['APPROVED', 'DISAPPROVED', 'PENDING'],
        default: 'PENDING'
    },
    ownerPersonalInformation: {
        OwnerId: String,
        firstName: String,
        lastName: String,
        dob: String,
        Address: String,
        cnic: { type: Number, unique: true },
        timeShopCreation: {
            type: Number,
            default: Date.now(),
        },
    },
});

export const Shop = mongoose.model("shop", shopSchema);