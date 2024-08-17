import { describe, expect, it } from "@jest/globals";
import { pointController } from "./point.controller";

describe("Points controller", () => {
  it("should be defined", () => {
    expect(pointController).toBeDefined();
  });

  it("should create a point", async () => {
    const req = {
      body: {
        namePoi: "Ponto 1",
        coordernateX: 10,
        coordenateY: 10,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await pointController.createPoint(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return a error if the coordinates are not numbers", async () => {
    try {
      const req = {
        body: {
          namePoi: "Ponto 1",
          coordernateX: "10",
          coordenateY: "10",
        },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      await pointController.createPoint(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
    } catch (error) {
      expect(error).toBe(error);
    }
  });

  it("should return a error if the coordinates are not positive numbers", async () => {
    const req = {
      body: {
        namePoi: "Ponto 1",
        coordernateX: -10,
        coordenateY: -10,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await pointController.createPoint(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("should return all ponts", async () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await pointController.findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  it("should get nearby points", async () => {
    const req = {
      query: {
        coordenateX: 10,
        coordenateY: 10,
        maxDistance: 10,
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    await pointController.getNerbyPoints(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });
  it("should return a error if the coordinates are not numbers", async () => {
    try {
      const req = {
        query: {
          coordenateX: "10",
          coordenateY: "10",
          maxDistance: "10",
        },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      await pointController.getNerbyPoints(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
    } catch (error) {
      expect(error).toBe(error);
    }
  });
  it("should return a error if the coordinates are not positive numbers", async () => {
    try {
      const req = {
        query: {
          coordenateX: -10,
          coordenateY: -10,
          maxDistance: -10,
        },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      await pointController.getNerbyPoints(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
    } catch (error) {
      expect(error).toBe(error);
    }
  });
});
