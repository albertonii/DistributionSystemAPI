import app from "../../app";
import request from "supertest";

// The endpoints return geojson data
describe("Test the root path", () => {
  it("It should response the GET method", async () => {
    const res = await request(app).get("/countries").expect(200);
    expect(res.body.type).toEqual("FeatureCollection");
    // res.body.features.forEach((feature: any) => {
    //   expect(feature.type).toEqual("Feature");
    // });
  });
});
