import { pointService } from "./point.service.js";

const createPoint = async (req, res) => {
  try {
    const { namePoi, coordernateX, coordenateY } = req.body;
    if (coordenateY < 0 || coordernateX < 0) {
      return res.status(400).send({
        message: "Coordinates must be positive numbers",
      });
    }
    if (isNaN(coordernateX) || isNaN(coordenateY)) {
      return res.status(409).json({ message: "Coordinates must be numbers" });
    }
    const newPoint = await pointService.create(req.body);
    return res.status(201).json(newPoint);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const points = await pointService.findAll();
    return res.status(200).json(points);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getNerbyPoints = async (req, res) => {
  try {
    const { coordenateX, coordenateY, maxDistance } = req.query;
    if (coordenateY < 0 || coordenateX < 0) {
      return res.status(400).send({
        message: "Coordinates must be positive numbers",
      });
    }
    if (isNaN(coordenateX) || isNaN(coordenateY)) {
      return res.status(409).json({ message: "Coordinates must be numbers" });
    }
    const points = await pointService.getNerbyPoints(
      parseFloat(coordenateX),
      parseFloat(coordenateY),
      parseFloat(maxDistance),
    );
    return res.status(200).json(points);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const pointController = {
  createPoint,
  findAll,
  getNerbyPoints,
};
