import diagnoseData from "../../data/diagnoses.json";

import { Diagnose } from "../../types/types";

const diagnoses: Diagnose[] = diagnoseData;

export const getEntries = (): Diagnose[] => {
  return diagnoses;
};

export const addEntry = () => {
  return null;
};
