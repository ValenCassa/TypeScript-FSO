import { Props } from "../types"
import { FC } from "react"

interface PartAttributes {
    name: string;
    exerciseCount: number;
    description?: string;
    groupProjectCount?: number;
    exerciseSubmissionLink?: string;
    requirements?: string[]
}

type Attribute = {
    part: PartAttributes
}


const PartName: FC<Attribute> = ({ part }) => {
    
    return (
        <>
        <div style={{ fontWeight: 'bold' }}>
            <p>{ part.name } <span>{ part.exerciseCount }</span></p>
        </div>
        { part.description &&
            <p style={{ fontStyle: 'italic' }}>{ part.description }</p>
        }
        { part.groupProjectCount &&
            <p>Number of exercises { part.groupProjectCount }</p>
        }
        { part.exerciseSubmissionLink &&
            <p>Submit to { part.exerciseSubmissionLink }</p>
        }
        { part.requirements &&
            <p>requirements: { part.requirements.join(', ') }</p>
        }
        
        </>
    )
}

const Part: FC<Props> = ({ props }) => {
    const courseParts  = props

    return (
        <div>
            { courseParts.map(course => {
                switch (course.name) {
                    case "Fundamentals":
                        return <PartName part={ course } />
                    case "Advanced":
                        return <PartName part={ course } />
                    case "Using props to pass data":
                        return <PartName part={ course } />
                    case "Deeper type usage":
                        return <PartName part={ course } />
                    case "Backend development":
                        return <PartName part={ course } />
                    default:
                        return 'hey'
                }
            }) }
        </div>

    )
}

export default Part