import prisma from "../../lib/prisma";

export const createUser = (data: {
  username: string;
  email: string;
  designation?: string;
  password: string;
}) => {
  return prisma.user.create({ data });
};

export const getAllUsers = () => {
  return prisma.user.findMany({ orderBy: { createdAt: "desc" } });
};

export const getUserById = (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};

export const updateUser = (
  id: number,
  data: {
    username: string;
    email: string;
    designation?: string;
    password?: string;
  }
) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUser = (id: number) => {
  return prisma.user.delete({ where: { id } });
};
