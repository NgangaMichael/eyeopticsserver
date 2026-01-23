import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import * as repo from "./auth.repository";

const JWT_SECRET = process.env.JWT_SECRET!;

export const login = async (email: string, password: string) => {
  const user = await repo.findUserByEmail(email);
  console.log("User fetched from repository:", user);
  if (!user || !user.password) {
    throw { status: 401, message: "Invalid email or password" };
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  console.log("Password match result:", isMatch); // Debug log
  
  if (!isMatch) {
    throw { status: 401, message: "Invalid email or password" };
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
    },
  };
};