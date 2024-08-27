import { model, models } from "mongoose";
import { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
}
const category = new Schema({
  name: { type: String, required: true, unique: true },
});

export const Category = models.Category || model("Category", category);
