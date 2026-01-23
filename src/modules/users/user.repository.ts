import prisma from "../../lib/prisma";

/* =========================
   CREATE USER
   ========================= */
export const createUser = (data: {
  username: string;
  email: string;
  designation?: string;
  password: string;
}) => {
  return prisma.user.create({ data });
};

/* =========================
   GET ALL USERS (SAFE)
   ========================= */
export const getAllUsers = () => {
  return prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      username: true,
      email: true,
      designation: true,
      createdAt: true,
    },
  });
};

/* =========================
   GET USER BY ID (SAFE)
   ========================= */
export const getUserById = (id: number) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      email: true,
      designation: true,
      createdAt: true,
    },
  });
};

/* =========================
   UPDATE USER
   ========================= */
export const updateUser = (
  id: number,
  data: {
    username?: string;
    email?: string;
    designation?: string;
    password?: string;
  }
) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

/* =========================
   DELETE USER
   ========================= */
export const deleteUser = (id: number) => {
  return prisma.user.delete({ where: { id } });
};
