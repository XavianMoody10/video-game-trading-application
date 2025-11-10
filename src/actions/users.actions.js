"use server";

import { User } from "@/models/user.model";
import { connectDB } from "../lib/mongodb";

export async function createUserAccount(data) {
  const { username, email, password } = data;

  try {
    await connectDB();
    const newDoc = await User.create(data);
    return JSON.stringify(newDoc);
  } catch (error) {
    throw new Error("Error creating account");
  }
}
