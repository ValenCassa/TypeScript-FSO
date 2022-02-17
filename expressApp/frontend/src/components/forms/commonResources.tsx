import { v4 as uuid } from 'uuid';
import { useStateValue } from '../../state';
import { Button, Form, Grid } from 'semantic-ui-react';
import { DiagnosisSelection } from '../../AddPatientModal/FormField';
import { EntryFormValues, HealthCheckRating } from '../../types';
import FieldForm from '../selectConfig/Specialist';
import React from 'react';
import { Field } from 'formik';

export interface Props {
    onSubmit: (values: EntryFormValues) => void;
    onCancel: () => void;
}

const today = new Date();

export const commonValues = {
    specialist: '',
    diagnosisCodes: [],
    description: '',
    date: today.toLocaleDateString('en-US'),
    id: uuid(),
};

export interface CommonFieldProps {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    setFieldTouched: (field: string, isTouched?: boolean | undefined, shouldValidate?: boolean | undefined) => void;

}

export const CommonFields = ({ setFieldTouched, setFieldValue }: CommonFieldProps) => {
    const [ {diagnoses }] = useStateValue();
    return (
        <>
        <DiagnosisSelection setFieldTouched={setFieldTouched} setFieldValue={setFieldValue} diagnoses={Object.values(diagnoses)}/>
        <FieldForm name="specialist" label="Specialist" placeholder="Write the specialist"/>
        <FieldForm name="description" label="Description" placeholder="Write the description"/>
        </>
    );
};

export interface CommonButtonProps {
    onCancel: () => void;
    dirty: boolean;
    isValid: boolean;
}

export const CommonButtons = ({ onCancel, dirty, isValid }: CommonButtonProps) => {
    return (
        <div style={{ marginTop: '2em' }}>
        <Grid>
            <Grid.Column floated="left" width={5}>
            <Button type="button" onClick={onCancel} color="red">
                Cancel
            </Button>
            </Grid.Column>
            <Grid.Column floated="right" width={5}>
            <Button
                type="submit"
                floated="right"
                color="green"
                disabled={!dirty || !isValid}
            >
                Add
            </Button>
            </Grid.Column>
        </Grid>
        </div>
    );
};

type HealthOptions = {
    value: HealthCheckRating;
    label: string;
  };
  

type SelectFieldProps = {
    name: string;
    label: string;
    options: HealthOptions[];
  };
  
export const SelectField = ({
    name,
    label,
    options
  }: SelectFieldProps) => (
    <Form>
    <Form.Field>
      <label>{label}</label>
      <Field as="select" name={name} className="ui dropdown">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </Field>
    </Form.Field>
    </Form>
  );