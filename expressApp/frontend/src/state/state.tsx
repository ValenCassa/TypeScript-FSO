import React, { createContext, useContext, useReducer } from "react";
import { Patient, Diagnose, Entry } from "../types";
import { Action, AddPatientAction, PatientListAction, DiagnoseListAction, AddEntryAction } from "./reducer";

export type State = {
  patients: { [id: string]: Patient | undefined };
  diagnoses: Diagnose[]
};

const initialState: State = {
  patients: {},
  diagnoses: []
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);


export const addPatient = (patient: Patient): AddPatientAction => ({ type: "ADD_PATIENT", payload: patient });
export const setPatientList = (patientList: Patient[]): PatientListAction => ({ type: "SET_PATIENT_LIST", payload: patientList });
export const setDiagnosesList = (diagnosesList: Diagnose[]): DiagnoseListAction => ({ type: "SET_DIAGNOSES", payload: diagnosesList });
export const addEntry = (entry: Entry, id: string): AddEntryAction => ({ type: "ADD_ENTRY", payload: { entry, id }});