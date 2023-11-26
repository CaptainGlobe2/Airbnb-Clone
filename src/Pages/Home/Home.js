import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Card from '../../Components/Card/Card'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <div className="home__section">
        <Card 
          src="https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg"
          title="Online Experience"
          description="Worldwide Booking"
        />
        <Card 
          src="https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg"
          title="Online Experience"
          description="Worldwide Booking"
        />
        <Card 
          src="https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg"
          title="Online Experience"
          description="Worldwide Booking"
        />
      </div>
      <div className="home__section">
        <Card 
          src="https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg"
          title="Online Experience"
          description="Worldwide Booking"
          price="$5432/night"
        />
        <Card 
          src="https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg"
          title="Online Experience"
          description="Worldwide Booking"
          price="$5432/night"
        />
        <Card 
          src="https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg"
          title="Online Experience"
          description="Worldwide Booking"
          price="$5432/night"
        />
      </div>
    </div>
  )
}

export default Home