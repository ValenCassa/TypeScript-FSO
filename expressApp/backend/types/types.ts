export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

interface BaseEntry {
  id: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose["code"]>;
  description: string;
  type: string;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowrRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

interface Discharge {
  date: string;
  criteria: string;
}

interface SickLeave {
  startDate: string;
  endDate: string;
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface OccupationalHealthCareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  sickLeave?: SickLeave;
  employerName: string;
}

interface HospitalEntry extends BaseEntry {
  discharge: Discharge;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthCareEntry
  | HealthCheckEntry;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[];
}

export type PatientNoID = Omit<Patient, "id" | "entries">;

export type Fields = {
  name: unknown;
  occupation: unknown;
  gender: unknown;
  ssn: unknown;
  dateOfBirth: unknown;
};

// type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
