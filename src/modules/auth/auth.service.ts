import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as repo from "./auth.repository";

const JWT_SECRET = process.env.JWT_SECRET!;

export const login = async (email: string, password: string) => {
  const user = await repo.findUserByEmail(email);
  if (!user || !user.password) {
    throw { status: 401, message: "Invalid email or password" };
  }

  const isMatch = await bcrypt.compare(password, user.password);
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
