export default function EventsCard({ title, events = [] }) {
  return (
    <div className="events-card">
      <h3 className="events-title">{title}</h3>

      {events.length === 0 ? (
        <p className="no-events">No events available</p>
      ) : (
        events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-info">
              <h4 className="event-name">{event.CardTitle}</h4>
              <span className="event-club">By {event.Organiser}</span>
              <p className="event-date">{event.date}</p>
            </div>

            <span className="material-symbols-rounded event-arrow">
              chevron_right
            </span>
          </div>
        ))
      )}
    </div>
  );
}
