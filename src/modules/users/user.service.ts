import bcryptjs from "bcryptjs";
import * as repo from "./user.repository";

/* =========================
   CREATE USER
   ========================= */
export const createUser = async (data: {
  username: string;
  email: string;
  designation?: string;
  password: string;
}) => {
  console.log("🔵 Creating user with email:", data.email);
  
  const hashedPassword = await bcryptjs.hash(data.password, 10);

  try {
    const user = await repo.createUser({
      ...data,
      password: hashedPassword,
    });
    console.log("✅ User created successfully:", user.id);
    return user;
  } catch (error: any) {
    console.error("❌ Prisma error:", error);
    
    // Prisma unique constraint violation
    if (error.code === 'P2002') {
      const field = error.meta?.target?.[0] || 'field';
      throw new Error(`A user with this ${field} already exists`);
    }
    throw error;
  }
};

/* =========================
   GET USERS
   ========================= */
export const getAllUsers = async () => {
  return repo.getAllUsers();
};

export const getUserById = async (id: number) => {
  const user = await repo.getUserById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

/* =========================
   UPDATE USER (FIXED)
   ========================= */
export const updateUser = async (
  id: number,
  data: {
    username?: string;
    email?: string;
    designation?: string;
    password?: string;
  }
) => {
  await getUserById(id);

  if (data.password) {
    data.password = await bcryptjs.hash(data.password, 10);
  }

  return repo.updateUser(id, data);
};

/* =========================
   DELETE USER
   ========================= */
export const deleteUser = async (id: number) => {
  await getUserById(id);
  return repo.deleteUser(id);
};