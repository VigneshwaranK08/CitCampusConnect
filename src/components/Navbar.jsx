import logo from "../assets/Group-3.svg"

export default function Navbar({ active, setActive }) {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>CIT Campus Connect</span>
    </div>

      <div className="nav-icons">
        {["home", "feed", "add", "profile"].map((item) => (
          <div
            key={item}
            className={`nav-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            <span className="material-symbols-rounded">
              {item === "home"
                ? "home"
                : item === "feed"
                ? "dynamic_feed"
                : item === "add"
                ? "add_circle"
                : "person"}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}
