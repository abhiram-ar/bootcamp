import mongoose, { Document } from "mongoose";

interface IItemDocument extends Document {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

const ItemSchema = new mongoose.Schema<IItemDocument>({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const itemModel = mongoose.model<IItemDocument>("Item", ItemSchema)
export default itemModel