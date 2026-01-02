import React from 'react'
import './EventsPageCard.css'

function EventsPageCard(props) {
  return (
    <div className='Card'>
        <div className="Bgimg">
            <img src={props.bgUrl} alt="" />
        </div>
        <div className="CardTitle">
            {props.CardTitle}
        </div>
        <div className="Organiser">
            By {props.Organiser}  <span className='Date'>On {props.date} </span>
        </div>
        <div className="Desc">
            {props.Desc}
        </div>


    </div>
  )
}

export default EventsPageCard