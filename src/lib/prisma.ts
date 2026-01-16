import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => {
    console.error("❌ Database connection failed");
    console.error(err);
  });

export default prisma;
