import prisma from "../../lib/prisma";

export const createpatient = (data: {
  patientname: string;
  email: string;
  designation?: string;
  password?: string;
}) => {
  return prisma.patient.create({ data });
};

export const getAllpatients = () => {
  return prisma.patient.findMany({ orderBy: { createdAt: "desc" } });
};

export const getpatientById = (id: number) => {
  return prisma.patient.findUnique({ where: { id } });
};

export const updatepatient = (
  id: number,
  data: {
    patientname: string;
    email: string;
    designation?: string;
    password?: string;
  }
) => {
  return prisma.patient.update({ where: { id }, data });
};

export const deletepatient = (id: number) => {
  return prisma.patient.delete({ where: { id } });
};
