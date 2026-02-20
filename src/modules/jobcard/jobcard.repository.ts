import prisma from "../../lib/prisma";

export const getAllJobCards = () => {
  return prisma.jobcard.findMany({ 
    orderBy: { createdAt: "desc" },
    include: { patient: true }
  });
};

export const getJobCardById = (id: number) => {
  return prisma.jobcard.findUnique({ 
    where: { id },
    include: { patient: true }
  });
};

export const deleteJobCard = (id: number) => {
  return prisma.jobcard.delete({ where: { id } });
};

// Raw update and create are now handled via transactions in the service