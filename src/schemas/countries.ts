import z from "zod";

type AllowedGeometry = GeoJSON.Feature<
  GeoJSON.Point | GeoJSON.LineString | GeoJSON.Polygon
>;

type Allowed = GeoJSON.FeatureCollection;

const geometrySchema = z.object({
  type: z.literal("Feature"),
  properties: z.object({}),
  geometry: z.object({
    coordinates: z.number().array(),
    type: z.literal("Point"),
  }),
}) satisfies z.ZodType<AllowedGeometry>;

export const featureCollectionSchema = z.object({
  type: z.literal("FeatureCollection"),
  features: z.array(geometrySchema),
}) satisfies z.ZodType<Allowed>;

export function validateFeatureCollection(featureCollection: any) {
  return featureCollection.parse(featureCollection);
}

export function validatePartialFeatureCollection(featureCollection: any) {
  return featureCollection.partial().safeParse(featureCollection);
}

// const countrySchema: FeatureCollection = z.object({
//   type: z.literal(),
//   name: z.string(),
//   code: z.string(),
// });

// export function validateCountry(country: any) {
//   return countrySchema.parse(country);
// }

// export function validatePartialCountry(country: any) {
//   return countrySchema.partial().safeParse(country);
// }
