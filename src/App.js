// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Farewell from "./pages/Farewell"; // 👈 New import
 
export default function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#ffe4e6", // Fully pink background
          color: "#9d174d", // deep pink text
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/farewell" element={<Farewell />} /> {/* 👈 New Route */}
        </Routes>

        <footer
          style={{
            textAlign: "center",
            padding: "15px 0",
            borderTop: "2px dashed #f472b6",
            color: "#be185d",
            fontStyle: "italic",
            fontSize: "0.9rem",
            backgroundColor: "#ffe4e6",
            textShadow: "0 0 5px #f9a8d4",
          }}
        >
          Made by Navneet.
        </footer>
      </div>
    </Router>
  );
}
