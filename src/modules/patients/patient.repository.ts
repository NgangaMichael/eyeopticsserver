// src/modules/patients/patient.repository.ts
import prisma from "../../lib/prisma";

export const createPatient = (data: {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  dob?: string;       // Will be converted to Date if needed
  gender?: string;
  address?: string;
}) => {
  return prisma.patient.create({ 
    data: {
      ...data,
      // If your schema expects a Date object for dob:
      dob: data.dob ? new Date(data.dob) : null 
    } 
  });
};

export const getAllPatients = () => {
  return prisma.patient.findMany({ orderBy: { createdAt: "desc" } });
};

export const getPatientById = (id: number) => {
  return prisma.patient.findUnique({ where: { id } });
};

export const updatePatient = (id: number, data: any) => {
  return prisma.patient.update({ 
    where: { id }, 
    data: {
      ...data,
      dob: data.dob ? new Date(data.dob) : undefined
    } 
  });
};

export const deletePatient = (id: number) => {
  return prisma.patient.delete({ where: { id } });
};