import imageModel from "../models/image.js";

export const postImage = async (req, res) => {
  const { imageName, imageDetails, imageUrl } = req.body;
  try {
    //  Checking all fields
    if (imageName == "" || imageUrl == "" || imageDetails == "")
      res.status(404).json({ message: "Please fill all the fields" });

    //  Creating ID of the images
    const allImage = await imageModel.find();
    const id = allImage.length + 1;

    // Creating a new Model
    const newImage = await new imageModel({
      imageName,
      imageDetails,
      imageUrl,
      id,
    });
    // Saving in DB
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const showImage = async (_, res) => {
  try {
    const allImage = await imageModel.find();
    res.json(allImage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
