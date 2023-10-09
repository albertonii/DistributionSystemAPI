import app from "../../app";
import request from "supertest";

// The endpoints return geojson data
describe("Communities", () => {
  describe("Get all communities", () => {
    it("It should response the GET method", async () => {
      const res = await request(app).get("/communities");
      const communities = res.body;
      expect(communities.length).toEqual(19);
      expect(res.statusCode).toBe(200);
    });
  });

  describe("Get a community in Spain - Madrid - M case sensitive", () => {
    it("It should return Madrid feature", async () => {
      const res = await request(app).get("/communities/Madrid");
      const community = res.body;

      expect(community.features[0].properties.name).toEqual("Madrid");
      expect(res.statusCode).toBe(200);
    });
  });

  describe("Get a community in Spain - madrid - m case sensitive", () => {
    it("It should return Madrid feature", async () => {
      const res = await request(app).get("/communities/madrid");
      const community = res.body;

      expect(community.features[0].properties.name).toEqual("Madrid");
      expect(res.statusCode).toBe(200);
    });
  });

  describe("Location in Sevilla is inside Andalucia Autonomous Community", () => {
    it("It should return true", async () => {
      const res = await request(app).get(
        "/communities/Andalucia/inside?lat=-5.9844589&lng=37.3890924"
      );
      const isInside = res.body;
      expect(isInside).toEqual(true);
    });
  });

  describe("Location in Badajoz is not inside Andalucia Autonomous Community", () => {
    it("It should return false", async () => {
      const res = await request(app).get(
        "/communities/Andalucia/inside?lat=-6.890930&lng=38.837627"
      );
      const isInside = res.body;
      expect(isInside).toEqual(false);
    });
  });
});
