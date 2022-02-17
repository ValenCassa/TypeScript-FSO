import React, { FC } from 'react';
import { Field } from 'formik';
import { TextField } from '../../AddPatientModal/FormField';
import { Form } from 'semantic-ui-react';

interface FieldProps {
    name: string;
    placeholder: string;
    label: string;
}

const FieldForm: FC<FieldProps> = ({ name, placeholder, label }) => {
    return (
        <Form>
            <Field 
                name={name}
                placeholder={placeholder}
                label={label}
                component={TextField}
            />
        </Form>
    );
};


export default FieldForm;