import bcrypt from "bcrypt";
import * as repo from "./user.repository";

export const createUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return repo.createUser({
    ...data,
    password: hashedPassword,
  });
};

export const getAllUsers = async () => {
  return repo.getAllUsers();
};

export const getUserById = async (id: number) => {
  const user = await repo.getUserById(id);
  if (!user) throw { status: 404, message: "User not found" };
  return user;
};

export const updateUser = async (id: number, data: any) => {
  await getUserById(id);
  return repo.updateUser(id, data);
};

export const deleteUser = async (id: number) => {
  await getUserById(id);
  return repo.deleteUser(id);
};
