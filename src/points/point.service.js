import { pointRepository } from "./repositories/point.repository.js";

const create = async (data) => {
  try {
    if (data.coordenateY < 0 || data.coordernateX < 0) {
      throw new Error("Coordinates must be positive numbers");
    }
    if (isNaN(data.coordernateX) || isNaN(data.coordenateY)) {
      throw new Error("Coordinates must be numbers");
    }
    const newPoint = await pointRepository.create(data);
    return newPoint;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

const findAll = async () => {
  try {
    const points = await pointRepository.findAll();
    return points;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

const getNerbyPoints = async (coordenateX, coordenateY, maxDistance) => {
  try {
    const points = await findAll();
    const maxDist = parseFloat(maxDistance);
    const result = points.filter((point) => {
      const distance = Math.sqrt(
        Math.pow(point.coordernateX - coordenateX, 2) +
          Math.pow(point.coordenateY - coordenateY, 2),
      );
      return distance <= maxDist;
    });
    return result;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

export const pointService = {
  create,
  findAll,
  getNerbyPoints,
};
