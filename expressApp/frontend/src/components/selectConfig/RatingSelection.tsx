import { Field } from "formik";
import { Form } from "semantic-ui-react";
import React from 'react';

interface Options {
    value: number;
    label: string;
}

export const healthOptions: Options[] = [
    { value: 0, label: "Healthy" },
    { value: 1, label: "Low Risk" },
    { value: 2, label: "High Risk" },
    { value: 3, label: "Critical Risk" },
];

interface SelectHealthProps {
    name: string,
    label: string,
    options: Options[]
}

const SelectHealthField = ({
    name,
    label,
    options
  }: SelectHealthProps) => (
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

export default SelectHealthField;