import express from "express";
import {
  getEntriesNoSSN,
  addEntry,
  getPatientEntry,
  addPatientEntry,
} from "../src/services/patientService";
import toNewDiaryEntry from "../utils/toNewDiaryEntry";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(getEntriesNoSSN());
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewDiaryEntry(req.body);
    const addedPatient = addEntry(newPatientEntry);

    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += `Error ` + errorMessage;
    }
    res.status(400).send(errorMessage);
  }
});

router.get("/:id", (req, res) => {
  res.json(getPatientEntry(req.params.id));
});

router.post("/:id/entries", (req, res) => {
  try {
    const id = req.params.id;
    const entryData = req.body;
    const addedEntry = addPatientEntry(id, entryData);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += `Error ` + errorMessage;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
