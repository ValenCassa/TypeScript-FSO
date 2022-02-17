import { Field } from "formik";
import { Form } from "semantic-ui-react";
import React from 'react';

export interface TypeOption {
    value: string;
    label: string;
}

export const typeOptions: TypeOption[] = [
    { value: 'HealthCheck', label: "Health Check" },
    { value: 'OccupationalHealthcare', label: "Occupational Healthcare" },
    { value: 'Hospital', label: "Hospital" },
];

interface SelectTypeProps {
    name: string,
    label: string,
    options: TypeOption[]
}

const SelectTypeField = ({
    name,
    label,
    options
  }: SelectTypeProps) => (
    <Form>
      <label>{label}</label>
      <Field as="select" name={name} className="ui dropdown">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </Field>
    </Form>
    
  );

export default SelectTypeField;