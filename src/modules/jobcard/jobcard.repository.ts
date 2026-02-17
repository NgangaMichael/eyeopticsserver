import prisma from "../../lib/prisma";

export const createJobCard = (data: any) => {
  return prisma.jobcard.create({
    data: {
      ...data,
      date: data.date ? new Date(data.date) : new Date(),
      jobDelDate: data.jobDelDate ? new Date(data.jobDelDate) : null,
      
      patientId: Number(data.patientId),
      total: Number(data.total),
      discount: Number(data.discount),
      advance: Number(data.advance),
      balance: Number(data.balance),
      consultation: Number(data.consultation || 0),
      
      // Handle new quantities
      lensQty: data.lensQty ? Number(data.lensQty) : 1.0,
      lensPrice: data.lensPrice ? Number(data.lensPrice) : 0,
      frameQty: data.frameQty ? Number(data.frameQty) : 1,
      framePrice: data.framePrice ? Number(data.framePrice) : 0,
      
      // Axis needs to be Int
      rAxis: data.rAxis ? Number(data.rAxis) : null,
      lAxis: data.lAxis ? Number(data.lAxis) : null,
    }
  });
};

export const updateJobCard = (id: number, data: any) => {
  const { 
    id: _, 
    patient, 
    createdAt, 
    updatedAt, 
    patientId, 
    ...rest 
  } = data;

  return prisma.jobcard.update({
    where: { id },
    data: {
      ...rest,
      date: data.date ? new Date(data.date) : undefined,
      jobDelDate: data.jobDelDate ? new Date(data.jobDelDate) : null,
      
      total: data.total !== undefined ? Number(data.total) : undefined,
      advance: data.advance !== undefined ? Number(data.advance) : undefined,
      balance: data.balance !== undefined ? Number(data.balance) : undefined,
      
      // Clean the new quantity fields
      lensQty: data.lensQty !== undefined ? Number(data.lensQty) : undefined,
      frameQty: data.frameQty !== undefined ? Number(data.frameQty) : undefined,
      
      rAxis: data.rAxis ? Number(data.rAxis) : null,
      lAxis: data.lAxis ? Number(data.lAxis) : null,
      patientId: patientId ? Number(patientId) : undefined,
    }
  });
};

export const getAllJobCards = () => {
  return prisma.jobcard.findMany({ 
    orderBy: { createdAt: "desc" } ,
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