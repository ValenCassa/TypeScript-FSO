import React, { FC } from "react";
import { useStateValue } from "../state";
import { Entry } from '../types';

interface EntryProps {
    entry: Entry
}

const Entries: FC<EntryProps> = ({ entry }) => {
    const [{ diagnoses },] = useStateValue();

    const diagnoseCode = (diagnose: string) => {
        const findDiagnose = diagnoses.find(d => d.code === diagnose);

        return findDiagnose?.name;
    };

    return (
        <div >
            <p>{ entry.date }<span style={{ fontStyle: 'italic' }}> { entry.description }</span></p>
            <ul>
                { entry.diagnosisCodes?.map(diagnose => <li key={ diagnose }>{ diagnose }: <span style={{ fontStyle: 'italic' }}>{ diagnoseCode(diagnose) }</span></li>) }
            </ul>
        </div>
    );
};

export default Entries;