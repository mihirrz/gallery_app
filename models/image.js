import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  imageDetails: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const imageModel = mongoose.model("image", imageSchema);
export default imageModel;
