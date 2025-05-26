import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    marginRight: 20,
    textDecoration: "none",
    color: location.pathname === path ? "#db2777" : "#a1a1aa", // rose-600 vs neutral-400
    fontWeight: location.pathname === path ? "bold" : "normal",
    fontSize: "18px",
    padding: "6px 12px",
    borderRadius: "8px",
    backgroundColor: location.pathname === path ? "#fce7f3" : "transparent",
    transition: "all 0.3s ease",
  });

  return (
    <nav
      style={{
        padding: "15px",
        borderBottom: "1px solid #f9a8d4",
        backgroundColor: "#fff0f6",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        fontFamily: "sans-serif",
      }}
    >
      <Link to="/" style={linkStyle("/")}>Home</Link>
      <Link to="/photos" style={linkStyle("/photos")}>Photos</Link>
      <Link to="/videos" style={linkStyle("/videos")}>Videos</Link>
      <Link to="/farewell" style={linkStyle("/farewell")}>Letter for You 💌</Link>
    </nav>
  );
}
