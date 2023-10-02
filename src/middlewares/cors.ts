import cors from "cors";

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const ACCEPTED_ORIGINS = ["http://localhost:3000"];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (ACCEPTED_ORIGINS.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  });
