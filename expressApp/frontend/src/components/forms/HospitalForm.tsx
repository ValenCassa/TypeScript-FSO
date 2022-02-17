import { Formik, Form as FormikForm } from 'formik';
import React, { FC } from 'react';
import { commonValues, Props, CommonFields, CommonButtons } from './commonResources';
import FieldForm from '../selectConfig/Specialist';



const HospitalForm: FC<Props> = ({ onSubmit, onCancel }) => {
    return (
        <Formik
            initialValues={{
                ...commonValues,
                type: 'Hospital',
                discharge: { date: '', criteria: '' },
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
                if (!values.discharge?.date || !values.discharge?.criteria) {
                    errors.discharge = requiredError;
                }
                return errors;
            }}
        >

            {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
                return (
                    <FormikForm>
                        <CommonFields setFieldTouched={ setFieldTouched } setFieldValue={ setFieldValue } />
                        <FieldForm name="discharge.date" label="Date" placeholder="M-DD-YYYY"/>
                        <FieldForm name="discharge.criteria" label="Criteria" placeholder="Criteria"/>
                        <CommonButtons dirty={ dirty } isValid={ isValid } onCancel={ onCancel }/>
                    </FormikForm>
                );
            }}
        </Formik>
    );
};



export default HospitalForm;