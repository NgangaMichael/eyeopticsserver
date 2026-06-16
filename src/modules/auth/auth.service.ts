import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import * as repo from "./auth.repository";

export const login = async (email: string, password: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const user = await repo.findUserByEmail(email);

  // 1. This check "narrows" the type. 
  // If user is null, the function stops here.
  if (!user || !user.password) {
    throw { status: 401, message: "Invalid email or password" };
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    throw { status: 401, message: "Invalid email or password" };
  }

  // 2. Now TypeScript knows for sure 'user' is not null.
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    secret,
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