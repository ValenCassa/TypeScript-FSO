import { Formik, Form as FormikForm } from 'formik';
import React, { FC } from 'react';
import { commonValues, Props, CommonFields, CommonButtons } from './commonResources';
import FieldForm from '../selectConfig/Specialist';



const OccupationalForm: FC<Props> = ({ onSubmit, onCancel }) => {
    return (
        <Formik
            initialValues={{
                ...commonValues,
                type: 'OccupationalHealthcare',
                sickLeave: { startDate: '', endDate: '' },
                employerName: '',
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
                        <FieldForm name="sickLeave.startDate" label="Date" placeholder="M-DD-YYYY"/>
                        <FieldForm name="sickLeave.endDate" label="Criteria" placeholder="M-DD-YYYY"/>
                        <FieldForm name="employerName" label="EmployerName" placeholder="EmployerName"/>
                        <CommonButtons dirty={ dirty } isValid={ isValid } onCancel={ onCancel }/>
                    </FormikForm>
                );
            }}
        </Formik>
    );
};

export default OccupationalForm;