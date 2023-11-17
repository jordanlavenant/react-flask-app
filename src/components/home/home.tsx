import React from 'react'
import Card from './concert-card/card.tsx'
import './home.css'

export default function home() {

  const concertListExample = [
    {
      id: 1,
      artist: "daft punk",
      date: "6 & 7 octobre",
      hour: "21:00 - 02:00",
      style: "Electro",
    },
    {
      id: 2,
      artist: "Imagine Dragons",
      date: "16 octobre",
      hour: "14:00 - 19:00",
      style: "Electro - Pop",
    },
    {
      id: 3,
      artist: "Damso",
      date: "28 & 29 octobre",
      hour: "19:00 - 00:00",
      style: "Rap",
    },
    {
      id: 4,
      artist: "4am-liam",
      date: "3 novembre",
      hour: "20:00 - 23:30",
      style: "Electro - Rap",
    },
  ];

  let cardsList: React.ReactElement[] = [];
  
  concertListExample.forEach((concert) => {
    cardsList.push(
      <Card 
        id = {concert.id}
        artist = {concert.artist}
        date = {concert.date}
        hour = {concert.hour}
        style = {concert.style}
      />
      );
  });


  return (
    <>
      <section className="header-container">

        <div className="title-container">
          <div className="title-content">
            <p>fest<span>iut</span>'</p>
          </div>
          <div className="title-aside">
            <div className="circle"></div>
            <div className="slogan-content">
              <p>soyez prêt pour une expérience <span>immersive</span></p>
            </div>
          </div>
        </div>

        <div className="artist-container">
          <div className="artist-review">
            <h2>découvrez 15 artistes</h2>
            {/* ici insérer des artistes aléatoires en fonction de la bd */}
            <div className="artists">
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons - </p>
              <p> Imagine dragons</p>
            </div>
          </div>
        </div>

      </section>

      <section className="search-container">
        <div className="search-content">
          <p>votre concert, accessible dès maintenant !</p>
          <div className="search-utils">
            <input type="text" placeholder="artiste, groupe, lieu, concert"/>
            <button>rechercher</button>
          </div>
        </div>
      </section>

      <section className="result-container">
        {cardsList} 
      </section>

      <footer>

      </footer>
    </>
  )
}