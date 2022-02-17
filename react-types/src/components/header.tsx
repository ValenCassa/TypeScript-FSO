import React, { FC } from 'react'
import { HeaderProps } from '../types'
const Header: FC<HeaderProps> = ({ name }) => {
    return (
        <>
        <h1>{name}</h1>
        </>
    )
}

export default Header