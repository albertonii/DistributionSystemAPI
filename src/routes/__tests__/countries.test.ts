import app from "../../app";
import request from "supertest";

// The endpoints return geojson data
describe("Countries", () => {
  describe("Get all countries", () => {
    it("It should response the GET method", async () => {
      const res = await request(app).get("/countries");
      const country_one = res.body[0];

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
      expect(country_one.type).toEqual("FeatureCollection");
    });
  });

  describe("Countries is an array of Features", () => {
    it("It should response the GET method", async () => {
      const res = await request(app).get("/countries");
      const country_one = res.body[0];

      expect(res.statusCode).toBe(200);
      expect(country_one.type).toEqual("FeatureCollection");
    });
  });

  describe("Spain is a Country", () => {
    it("It should response the GET method", async () => {
      const res = await request(app).get("/countries/spain");
      const spain = res.body;

      expect(res.statusCode).toBe(200);
      expect(spain.features[0].type).toEqual("Feature");
    });
  });

  describe("Spain have three coordinates - Mainland, Balearic Islands and Canary Islands", () => {
    it("It should response the GET method", async () => {
      const res = await request(app).get("/countries/spain");
      const spainFeatures = res.body.features;

      expect(res.statusCode).toBe(200);
      expect(spainFeatures.length).toEqual(3);
    });
  });
});
