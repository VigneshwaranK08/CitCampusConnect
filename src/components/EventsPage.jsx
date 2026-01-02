import React from 'react'
import './EventsPage.css'
import EventsPageCard from './EventsPageCard'

function EventsPage() {

  const CardData = {
    card1 : {
      CardTitle : "Appathon",
      Organiser : "celestius",
      Desc : 'desctiption about the event that is going to happen on some day',
      bgUrl : '../../public/ClubCelestius.jpg'
    },
    card2 : {
      CardTitle : "Workshop: AI & ML",
      Organiser : "Assymetric",
      Desc : 'desctiption about the event that is going to happen on some day',
      bgUrl : '../../public/ClubCelestius.jpg'
    },
    card3 : {
      CardTitle : "UI/UX on the Spot",
      Organiser : "Tezos",
      Desc : 'desctiption about the event that is going to happen on some day',
      bgUrl : '../../public/ClubCelestius.jpg'
    }
  }

  return (
    <div className='EventsPage'>
        <div className="container">
            <EventsPageCard {...CardData.card1}/>
            <EventsPageCard {...CardData.card2}/>
            <EventsPageCard {...CardData.card3}/>
            
            

        </div>
    </div> 
  )
}

export default EventsPage