import { FC } from 'react'
import { Props } from '../types'
import Part from './part'

const Content: FC<Props> = ({ props }) => {
    const courseParts = props

    return (
        <>
        <Part props={ courseParts }/>
        </>
    )
}

export default Content