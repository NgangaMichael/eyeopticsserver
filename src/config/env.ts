import dotenv from "dotenv";

dotenv.config();

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env variable: ${name}`);
  return value;
}

export const PORT = Number(required("API_PORT"));
export const CLIENT_URL = required("CLIENT_URL");
export const NODE_ENV = process.env.NODE_ENV || "development";
export const DATABASE_URL = required("DATABASE_URL");
export const JWT_SECRET = required("JWT_SECRET");

export const EMAIL_USER = required("EMAIL_USER");
export const EMAIL_PASS = required("EMAIL_PASS");
export const SMTP_HOST = required("SMTP_HOST");
