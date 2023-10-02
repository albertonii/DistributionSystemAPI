import cors from "cors";
import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
const spain = require("../GeoJSON/countries/spain.json");

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT ?? 8080;

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options)); /* NEW */

app.use(express.json());

app.disable("x-powered-by");

// Middleware
app.use((req: Request, res: Response, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Express & TypeScript Server");
});

app.get("/spain", (req: Request, res: Response) => {
  res.status(200).json(spain);
});

app.use((req: Request, res: Response) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
