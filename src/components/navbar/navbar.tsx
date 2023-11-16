import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import billeterie from '../billeterie/billeterie'

export default function navbar() {
    
    return (
        <>
            <nav id = "nav">
                <ul>
                    <li>
                        <Link to = {"/"}>accueil</Link>
                    </li>
                    <li>
                        <Link to = {"/billeterie"}>billeterie</Link>
                    </li>
                    <li>
                        <Link to = {"/programme"}>programme</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
