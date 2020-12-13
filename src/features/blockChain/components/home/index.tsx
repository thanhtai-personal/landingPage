import React from 'react'
import { IHomeProps } from './interfaces'

const HomeComponent: React.FC<IHomeProps> = (props: IHomeProps) => {
    return (
        <div>{props.title || 'Home'}</div>
    )
}

export default HomeComponent