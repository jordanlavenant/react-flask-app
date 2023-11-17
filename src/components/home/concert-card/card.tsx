import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

interface CardProps {
  id: number,
  artist: string,
  date: string,
  hour: string,
  style: string,
}

export default function card({id,artist,date,hour,style}: CardProps) {
  return (
    <Link to = {`/artiste/${id}`}>
    <div className="card">
        <p>{artist}</p>
        <p>{date}</p>	
        <p>{hour}</p>
        <p>{style}</p>
    </div>
    </Link>
  )
}
