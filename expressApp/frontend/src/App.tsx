import React, { useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";

import { apiBaseUrl } from "./constants";
import { setDiagnosesList, useStateValue } from "./state";
import { Patient, MatchParams, Diagnose } from "./types";

import PatientListPage from "./PatientListPage";

// Exercises
import PatientDetails from "./components/Patients";
import { setPatientList } from "./state";

const App = () => {
  const [{ patients }, dispatch] = useStateValue();
  useEffect(() => {
    
    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch(setPatientList(patientListFromApi));
        
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatientList();
  }, [dispatch]);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      try {
        const { data: diagnosesDetails } = await axios.get<Diagnose[]>(`${apiBaseUrl}/diagnoses`);
        
        dispatch(setDiagnosesList(diagnosesDetails));
      } catch(e) {
        console.log(e);
      }
    };

    void fetchDiagnoses();

  }, [dispatch]);

  const match = useRouteMatch<MatchParams>('/patient/:id');
  const patient = match ? Object.values(patients).find(p => p?.id === match.params.id): null;


  return (
    <div className="App">
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path='/patient/:id' >
              <PatientDetails patient={ patient?.id } />
            </Route>
            <Route path="/">
              <PatientListPage />
            </Route>
          </Switch>
        </Container>
    </div>
  );
};

export default App;
