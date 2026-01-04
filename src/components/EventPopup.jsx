import "./EventPopup.css";

function EventPopup({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="event-popup-overlay" onClick={onClose}>
      <div
        className="event-popup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="material-symbols-rounded popup-close"
          onClick={onClose}
        >
          close
        </span>

        <div className="popup-img-wrapper">
          <img src={event.bgUrl} alt="event" />
        </div>

        <h2 className="popup-title">{event.CardTitle}</h2>

        <p className="popup-organiser">
          By {event.Organiser}
          <span className="popup-date"> • {event.date}</span>
        </p>

        <p className="popup-desc">{event.Desc}</p>
      </div>
    </div>
  );
}

export default EventPopup;