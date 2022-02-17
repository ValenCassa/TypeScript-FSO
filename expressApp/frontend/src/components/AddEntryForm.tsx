import React, { useState } from 'react';
import HospitalForm from "./forms/HospitalForm";
import OccupationalForm from './forms/OccupationalForm';
import HealthRatingForm from './forms/HealthRatingForm';
import { Form } from "semantic-ui-react";
import { Props } from './forms/commonResources';

const options = [
    { key: 'Hospital', text: 'Hospital', value: 'Hospital' },
    { key: 'Occupational', text: 'Occupational', value: 'Occupational' },
    { key: 'healthRating', text: 'Health Rating', value: 'healthRating' },
];


const AddEntryForm = ({ onSubmit, onCancel }: Props) => {

    //eslint-disable-next-line
    const [form, setForm] = useState({
        healthRating: false, Occupational: false, Hospital: true
    });

    const handleChange = (event: any, { value }: any) => {
        //eslint-disable-next-line

        if (value === 'Hospital') {
            setForm({ healthRating: false, Hospital: true, Occupational: false});
        } else if (value === 'Occupational') {
            setForm({ healthRating: false, Hospital: false, Occupational: true});
        } else if (value === 'healthRating') {
            setForm({ healthRating: true, Hospital: false, Occupational: false});
        }
    };
    
    return (
        <>  
            <Form>
                <Form.Select label={'Select the type'} options={options} onChange={handleChange} defaultValue={'Hospital'}/>
            </Form>
            {form.Hospital &&
                <HospitalForm onSubmit={ onSubmit } onCancel={ onCancel } />
            }
            {form.Occupational && 
                <OccupationalForm onSubmit={ onSubmit } onCancel={ onCancel } />
            }
            {form.healthRating &&
                <HealthRatingForm onSubmit={ onSubmit } onCancel={ onCancel } />
            }

        </>
    );
  };

export default AddEntryForm;