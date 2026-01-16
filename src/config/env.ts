import dotenv from "dotenv";

dotenv.config();

// Build DATABASE_URL dynamically from individual variables
export const DATABASE_URL =
  process.env.DATABASE_URL ||
  `mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

export const PORT = process.env.API_PORT || 5000;
export const JWT_SECRET = process.env.JWT_SECRET!;

export const CLIENT_URL = process.env.CLIENT_URL!;
export const NODE_ENV = process.env.NODE_ENV || "development";

export const EMAIL_USER = process.env.EMAIL_USER!;
export const EMAIL_PASS = process.env.EMAIL_PASS!;
export const SMTP_HOST = process.env.SMTP_HOST!;
