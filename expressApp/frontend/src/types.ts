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
  type: "Hospital";
  discharge: Discharge;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthCareEntry
  | HealthCheckEntry;

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[]
}

export type PatientDetail = Patient | undefined | null;

export interface MatchParams {
  id: string;
}

export type EntryFormValues = {
  date: string;
  specialist: string;
  diagnosisCodes: string[];
  description: string;
  type: string;
  employerName?: string;
  sickLeave? : SickLeave;
  discharge?: Discharge;
  healthCheckRating?: HealthCheckRating;
};

