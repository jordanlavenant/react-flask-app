import React from 'react'
import './concert.css'

interface ConcertProps {
    id: number,
}

export default function concert(props:ConcertProps) {
  return (
    <div className='content'>{props.id}</div>
  )
}
