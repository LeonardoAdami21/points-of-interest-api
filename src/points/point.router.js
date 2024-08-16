import express from "express";
import { pointController } from "./point.controller.js";
const pointRouter = express.Router();

pointRouter.post("/", pointController.createPoint);
pointRouter.get("/", pointController.findAll);
pointRouter.get("/nearby", pointController.getNerbyPoints);

export default pointRouter;
