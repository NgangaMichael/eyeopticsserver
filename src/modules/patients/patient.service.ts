import prisma from "../../lib/prisma";

// Create a new patient
export const createPatient = (data: {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  dob?: string;       // ISO date string
  gender?: "male" | "female" | "other";
  address?: string;
}) => {
  return prisma.patient.create({ data });
};

// Get all patients, newest first
export const getAllPatients = () => {
  return prisma.patient.findMany({ orderBy: { createdAt: "desc" } });
};

// Get a patient by ID
export const getPatientById = (id: number) => {
  return prisma.patient.findUnique({ where: { id } });
};

// Update a patient
export const updatePatient = (
  id: number,
  data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    dob?: string;
    gender?: "male" | "female" | "other";
    address?: string;
  }
) => {
  return prisma.patient.update({ where: { id }, data });
};

// Delete a patient
export const deletePatient = (id: number) => {
  return prisma.patient.delete({ where: { id } });
};
