import patientEntries from "../../data/patients";
import { Entry, Patient, PatientNoID } from "../../types/types";
import { randomUUID } from "crypto";

const patients: Patient[] = patientEntries as Patient[];

export const getEntries = (): Patient[] => {
  return patients;
};

export const getEntriesNoSSN = (): Omit<Patient, "ssn" | "entries">[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export const addEntry = (entry: PatientNoID): Patient => {
  const newPatient = {
    id: randomUUID(),
    entries: [],
    ...entry,
  };

  patients.push(newPatient);
  return newPatient;
};

export const getPatientEntry = (paramID: string): Patient | undefined => {
  const id = paramID;
  const patientToFind = patients.find((p) => p.id === id);
  return patientToFind;
};

export const addPatientEntry = (paramID: string, entry: Entry): Entry => {
  const id = paramID;
  const entryData = { ...entry, id: randomUUID() };
  patients.map((patient) =>
    patient.id === id
      ? (patient.entries = [...patient.entries, entryData])
      : patient
  );

  return entry;
};
