import React from 'react'
import './EventsPage.css'
import EventDetails from '../EventDetails.json'
import EventsPageCard from './EventsPageCard'

function EventsPage() {

  // const CardData = 

  return (
    <div className='EventsPage'>
        <div className="container">
            <EventsPageCard {...EventDetails.card1}/>
            <EventsPageCard {...EventDetails.card2}/>
            <EventsPageCard {...EventDetails.card3}/>
            
            

        </div>
    </div> 
  )
}

export default EventsPage