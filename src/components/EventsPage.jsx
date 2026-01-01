import React from 'react'
import './EventsPage.css'
import EventsPageCard from './EventsPageCard'

function EventsPage() {
  return (
    <div className='EventsPage'>
        <div className="container">
            <EventsPageCard CardTitle="Appathon" Organiser='celestius' Desc='desctiption about the event that is going to happen on some day' bgUrl='../../public/ClubCelestius.jpg'/>
            <EventsPageCard CardTitle="Workshop: AI & ML" Organiser='Assymetric' Desc='desctiption about the event that is going to happen on some day' bgUrl='../../public/ClubCelestius.jpg'/>
            <EventsPageCard CardTitle="UI/UX on the Spot" Organiser='Tezos' Desc='desctiption about the event that is going to happen on some day' bgUrl='../../public/ClubCelestius.jpg'/>
            

        </div>
    </div> 
  )
}

export default EventsPage