// name: {
//     type: String,
//   },
//   number: {
//     type: Number,
//   },
//   email: {
//     type: String,
//   },
//   message: {
//     type: String,
// //

import mongoose from "mongoose";

const { Schema } = mongoose;

const contactus = new Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});
export default mongoose.model("contactus", contactus);
