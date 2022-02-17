import { Entry, EntryFormValues, Patient } from "../types";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { apiBaseUrl } from '../constants';
import { useStateValue, addEntry } from "../state";
import { useParams } from "react-router-dom";
import { addPatient } from '../state/state';
import Entries from "./Entries";
import AddEntryForm from "./AddEntryForm";


interface PatientProps {
    patient: string | undefined;
}

interface PageParams {
    id: string
}

const PatientDetails: FC<PatientProps> = ({ patient }) => {

    const [ { patients } ,dispatch ] = useStateValue();
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState(false);
    const { id } = useParams<PageParams>();

    const patientData: Patient | undefined = patients[id]; 

    const submitNewEntry = async (values: EntryFormValues) => {        

        try {
          const { data: newEntry } = await axios.post<Entry>(
            `${apiBaseUrl}/patients/${id}/entries`,
            values
          );
          dispatch(addEntry(newEntry, id));

          setSuccess(true);
          setTimeout(() => {
              setSuccess(false);
          }, 5000);

        } catch (e: any) {
          console.error(e.response?.data || 'Unknown Error');
          setError(e.response?.data?.error || 'Unknown error');
        }
      };


    useEffect(() => {

        const fetchPatient = async () => {
            try {

                //eslint-disable-next-line
                const { data: patientDetail} = await axios.get<Patient>(`${apiBaseUrl}/patients/${patient}`);

                dispatch(addPatient(patientDetail));
            } catch(e) {
                console.log(e);
            }

        };

        if (!patientData?.ssn) {
            void fetchPatient();
        }

    }, [dispatch, patient, id]);

    return (
        
        <div>
            <h2>{ patientData?.name }</h2>
            <p>ssn: { patientData?.ssn }</p>
            <p>occupation: { patientData?.occupation }</p>

            <h3>Entries</h3>
            {success && 
            <div style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: '22px' , backgroundColor: 'lightgreen', padding: '0.5em' }}>Entry added succesfully</div>
            }
            {/*eslint-disable-next-line */}
            {patientData?.entries?.map(entry =>  <Entries entry={ entry } key={ entry.id } />
            )}

            <h3>Add Entry</h3>
            <AddEntryForm onSubmit={submitNewEntry} onCancel={() => console.log('hey')}/>
            {error !== undefined &&
            <p>{error}</p>
            }
            

        </div>
    );
};

export default PatientDetails;