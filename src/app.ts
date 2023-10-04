import dotenv from "dotenv";
import express, { Request, Response, Application } from "express";
import { countriesRouter } from "./routes/countries";
import { corsMiddleware } from "./middlewares/cors";
import { communitiesRouter } from "./routes/communities";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT ?? 8080;

// app.use(corsMiddleware); Fix this

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

// Routes
app.use("/countries", countriesRouter);
app.use("/communities", communitiesRouter);

// Error handling
// app.use(errorHandler); No está funcionando

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
