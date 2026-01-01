export default function PostCard({ title, time, text }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="avatar"></div>
        <div className="info">
          <h4>{title}</h4>
          <span>{time}</span>
        </div>
      </div>
      <p className="post-text">{text}</p>
    </div>
  );
}
