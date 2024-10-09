import { Document, model, models, Schema } from "mongoose";

// chatGPT created this
export interface IEvent extends Document {
    _id?: Schema.Types.ObjectId; // Automatically added by MongoDB
    title: string;
    description?: string;
    location?: string;
    createdAt?: Date;
    imageUrl: string;
    startDateTime?: Date;
    endDateTime?: Date;
    price: string;
    isFree?: boolean;
    url?: string;
    category?: { _id: string; name: string }; // Refers to the Category model
    organizer?: { _id: string; firstName: string; lastName: string }; // Refers to the User model
}

const event = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Event = models.Event || model("Event", event);
