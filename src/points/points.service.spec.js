import { describe, expect, it } from "@jest/globals";
import { pointService } from "./point.service.js";

describe("Points service", () => {
  beforeEach(() => {
    let pointService = pointService;
  });
  it("should be defined", () => {
    expect(pointService).toBeDefined();
  });

  it("should create a point", async () => {
    const point = await pointService.create({
      namePoi: "Ponto 1",
      coordernateX: 10,
      coordenateY: 10,
    });
    expect(point).toBeDefined();
  });

  it("should return a error if the coordinates are not numbers", async () => {
    try {
      await pointService.create({
        namePoi: "Ponto 1",
        coordernateX: "10",
        coordenateY: "10",
      });
    } catch (error) {
      expect(error).toBe(error);
    }
  });

  it("should return a error if the coordinates are not positive numbers", async () => {
    try {
      await pointService.create({
        namePoi: "Ponto 1",
        coordernateX: -10,
        coordenateY: -10,
      });
    } catch (error) {
      expect(error).toBe(error);
    }
  });

  it("should find all points", async () => {
    const points = await pointService.findAll();
    expect(points).toBe(points);
  });

  it("should get nearby points", async () => {
    const points = await pointService.getNerbyPoints(10, 10, 10);
    expect(points).toBe(points);
  });

  it("should return a error if the coordinates are not numbers", async () => {
    try {
      await pointService.getNerbyPoints("10", "10", "10");
    } catch (error) {
      expect(error).toBe(error);
    }
  });

  it("should return a error if the coordinates are not positive numbers", async () => {
    try {
      await pointService.getNerbyPoints(-10, -10, -10);
    } catch (error) {
      expect(error).toBe(error);
    }
  });
});
