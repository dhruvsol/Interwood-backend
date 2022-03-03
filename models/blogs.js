import mongoose from "mongoose";

const { Schema } = mongoose;

const blogs = new Schema({
  heading: {
    type: String,
  },
  subheading: {
    type: String,
  },
  image: {
    type: String,
  },
});
export default mongoose.model("blogs", blogs);
