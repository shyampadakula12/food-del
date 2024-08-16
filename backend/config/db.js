import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sonyshyam12:12345678Ss@cluster0.gsx0y5h.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
