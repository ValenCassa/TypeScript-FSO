import { FC } from 'react'
import { Props } from '../types'

const ExerciseCount: FC<Props> = ({ props }) => {
    const courseParts = props

    return (
        <p>
            Number of exercises{" "}
            {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    )
}

export default ExerciseCount