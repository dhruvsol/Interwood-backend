import mongoose from "mongoose";

const { Schema } = mongoose;

const value = new Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  email: {
    type: String,
  },
  enquiry: {
    type: String,
  },
});
export default mongoose.model("value", value);
