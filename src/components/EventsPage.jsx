import React, { useEffect, useState } from 'react';
import './EventsPage.css';
import EventsPageCard from './EventsPageCard';
import EventPopup from './EventPopup';
import { getEvents } from './eventsService';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div className="EventsPage">
        <div className="container">
          {events.map(event => (
            <EventsPageCard
              key={event.id}
              {...event}
              onEventClick={setSelectedEvent}
            />
          ))}
        </div>
      </div>

      {/* Popup */}
      <EventPopup
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}

export default EventsPage;