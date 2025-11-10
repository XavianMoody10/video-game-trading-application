import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
