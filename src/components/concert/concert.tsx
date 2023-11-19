import React from 'react'
import './concert.css'
import { useParams } from 'react-router-dom'

export default function concert() {

    const { id } = useParams();

    return (
        <div className='content'>{id}</div>
    )
}
