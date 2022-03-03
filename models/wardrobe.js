import mongoose from "mongoose";

const { Schema } = mongoose;

const wardrobe = new Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  enquiry: {
    type: String,
  },
  path: {
    type: Object,
  },
});
export default mongoose.model("wardrobe", wardrobe);
