import prisma from "../../config/prisma.config.js";

const create = async (data) => {
  return await prisma.points.create({
    data: {
      ...data,
    },
  });
};

const findAll = async () => {
  const points = await prisma.points.findMany();
  return points;
};


export const pointRepository = {
  create,
  findAll,
};
