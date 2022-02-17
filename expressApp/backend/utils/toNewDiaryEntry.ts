import { PatientNoID, Gender, Fields } from "../types/types";

// Validators
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

// Parsers
const parseName = (name: unknown): string => {
  if (!name || !isString(name)) throw new Error("Incorrect name");

  return name;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation))
    throw new Error("Incorrect occupation");

  return occupation;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) throw new Error("Incorrect ssn");

  return ssn;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender))
    throw new Error("Incorrect or missing gender " + gender);

  return gender;
};

const toNewDiaryEntry = ({
  name,
  occupation,
  gender,
  ssn,
  dateOfBirth,
}: Fields): PatientNoID => {
  const newEntry: PatientNoID = {
    name: parseName(name),
    occupation: parseOccupation(occupation),
    gender: parseGender(gender),
    ssn: parseSSN(ssn),
    dateOfBirth: parseDate(dateOfBirth),
  };

  return newEntry;
};

export default toNewDiaryEntry;
