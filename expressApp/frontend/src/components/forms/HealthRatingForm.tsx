import { Formik, Form as FormikForm } from 'formik';
import React, { FC } from 'react';
import { commonValues, Props, CommonFields, CommonButtons } from './commonResources';
import { SelectField } from './commonResources';

const options = [
    { label: 'Healthy', value: 0},
    { label: 'Low Risk', value: 1},
    { label: 'High Risk', value: 2},
    { label: 'Critical Risk', value: 3}
];

const HealthRatingForm: FC<Props> = ({ onSubmit, onCancel }) => {
    return (
        <Formik
            initialValues={{
                ...commonValues,
                type: 'HealthCheck',
                healthCheckRating: 0,
            }}
            onSubmit={onSubmit}
            validate={values => {
                const requiredError = "Field is required";
                const errors: { [field: string]: string } = {};
                if (!values.specialist) {
                    errors.specialist = requiredError;
                }
                if (!values.diagnosisCodes) {
                    errors.diagnosisCode = requiredError;
                }
                if (!values.description) {
                    errors.description = requiredError;
                }
                if (!values.sickLeave?.startDate || !values.sickLeave?.endDate) {
                    errors.sickLeave = requiredError;
                }
                if (!values.employerName) {
                    errors.employerName = requiredError;
                }
                return errors;
            }}
        >

            {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
                return (
                    <FormikForm>
                        <CommonFields setFieldTouched={ setFieldTouched } setFieldValue={ setFieldValue } />
                        <SelectField name='healthCheckRating' label='Health rating' options={options} />
                        <CommonButtons isValid={ isValid } dirty={ dirty } onCancel={ onCancel } />
                    </FormikForm>
                );
            }}
        </Formik>
    );
};

export default HealthRatingForm;