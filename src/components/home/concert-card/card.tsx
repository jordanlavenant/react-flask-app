import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './card.css'

interface CardProps {
  id: number,
  artist: string,
  date: string,
  hour: string,
  style: string,
}

export default function card(props: CardProps) {
  return (
    <Link to = {`/concert/${props.id}`}>
    <motion.div 
      className="card"
    >
        <p>{props.artist}</p>
        <p>{props.date}</p>	
        <p>{props.hour}</p>
        <p>{props.style}</p>
    </motion.div>
    </Link>
  )
}
