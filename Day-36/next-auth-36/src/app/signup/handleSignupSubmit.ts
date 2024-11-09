import { User } from "@/models/userModel";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const confirmPassword = formData.get("confirmPassword") as string | null;

  if (!name || !email || !password || !confirmPassword) {
    return new Response("All fields are required.", { status: 400 });
  }

  if (password !== confirmPassword) {
    return new Response("Passwords do not match.", { status: 400 });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response("User already exists.", { status: 400 });
  }

  // Hash the password before storing
  const hashedPassword = await hash(password, 10);

  // Create the new user
  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return new Response("Signup successful!", { status: 200 });
}
