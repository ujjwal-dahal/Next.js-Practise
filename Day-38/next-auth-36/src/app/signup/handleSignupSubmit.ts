"use server";

import { connectToDatabase } from "@/lib/databaseConnection";
import { User } from "@/models/userModel";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";

const HandleSignupSubmit = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  // Basic validation for required fields
  if (!name || !email || !password || !confirmPassword) {
    throw new Error("All fields are required.");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  // Connect to the database
  await connectToDatabase();

  // Check if the user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  // Hash the password before storing
  const hashedPassword = await hash(password, 10);

  // Create the new user
  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Redirect to the login page
  redirect("/login");
};

export default HandleSignupSubmit;
