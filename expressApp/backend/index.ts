// Express App
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
const PORT = 3001;

// Controllers
import diagnosesRouter from "./controllers/diagnoses";
import patientsRouter from "./controllers/patients";

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
