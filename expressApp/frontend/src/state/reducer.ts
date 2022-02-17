import { State } from "./state";
import { Diagnose, Patient, Entry } from "../types";

export type AddPatientAction = {
  type: "ADD_PATIENT";
  payload: Patient;
};

export type PatientListAction = {
  type: "SET_PATIENT_LIST";
  payload: Patient[];
};

export type DiagnoseListAction = {
  type: "SET_DIAGNOSES";
  payload: Diagnose[];
};

export type AddEntryAction = {
  type: "ADD_ENTRY";
  payload: {
    id: string,
    entry: Entry
  };
};

export type Action = | AddPatientAction | PatientListAction | DiagnoseListAction | AddEntryAction;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "SET_DIAGNOSES":
      return {
        ...state,
        diagnoses: action.payload
      };
    case "ADD_ENTRY":
      const patient = Object.values(state.patients).find(p => p?.id === action.payload.id);

      if(patient) {
        patient.entries.concat(action.payload.entry);
        return {
          ...state,
          patients: {
            [action.payload.id]: patient
          }
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
