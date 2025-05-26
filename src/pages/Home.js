import React, { useState, useEffect } from "react";

const images = [
  "/Photos/image71.jpg",
  "/Photos/image43.jpg",
  "/Photos/image68.jpg",
  "/Photos/image45.jpg",
  "/Photos/image64.jpg",
];

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevIndex = (currentImage - 1 + images.length) % images.length;
  const nextIndex = (currentImage + 1) % images.length;

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#ffe4e6",
        minHeight: "100vh",
        paddingTop: "50px",
        position: "relative",
        overflow: "hidden",
        color: "#9d174d",
        fontFamily: "sans-serif",
      }}
    >
      {/* Slideshow with adjacent images */}
      {!showMessage && (
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <img
            src={images[prevIndex]}
            alt="Prev"
            style={{
              width: "120px",
              height: "150px",
              objectFit: "cover",
              opacity: 0.5,
              borderRadius: "8px",
              filter: "blur(1px)",
            }}
          />
          <img
            src={images[currentImage]}
            alt="Pinki Chinki"
            style={{
              width: "320px",
              height: "350px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 0 15px #f472b6",
              zIndex: 2,
            }}
          />
          <img
            src={images[nextIndex]}
            alt="Next"
            style={{
              width: "120px",
              height: "150px",
              objectFit: "cover",
              opacity: 0.5,
              borderRadius: "8px",
              filter: "blur(1px)",
            }}
          />
        </div>
      )}

      {/* Heading */}
      {!showMessage && (
        <h1
          style={{
            color: "#be185d",
            textShadow: "0 0 15px #f9a8d4",
            fontSize: "2.5rem",
            marginBottom: "20px",
            zIndex: 2,
            position: "relative",
          }}
        >
          This is Pinki Chinki a.k.a. Kinky Chinki 💗
        </h1>
      )}

      {/* Reveal/Back Button */}
      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{
          backgroundColor: "transparent",
          border: "2px solid #f472b6",
          color: "#be185d",
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "8px",
          cursor: "pointer",
          textShadow: "0 0 8px #f9a8d4",
          transition: "all 0.3s ease",
          position: "relative",
          zIndex: 2,
          marginTop: "20px",
        }}
      >
        {showMessage ? "← Back" : "Reveal Message 💌"}
      </button>

      {/* Message Content */}
      {showMessage && (
        <div
          style={{
            marginTop: "30px",
            fontSize: "1.1rem",
            whiteSpace: "pre-line",
            textShadow: "0 0 10px #f472b6",
            maxWidth: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
            zIndex: 2,
            lineHeight: "1.8",
          }}
        >
          <p className="text-pink-600 font-medium">
  Full-time drama queen, part-time genius 👑🧠 <br /><br />
  Starbucks in one hand, sass in the other 🧋 <br /><br />
  Roasting with precision and giggling through it all 🔥😄 <br />
  The heart of the group, and the soul of all chaos 💫 <br /><br />
  This ain’t goodbye… it's just "catch ya on the flip side" 💖 <br /><br />
          Keep it chill, keep it cheeky! 😄📱
</p>
        </div>
      )}

      {/* Footer Signature */}
      <p
        style={{
          marginTop: "50px",
          fontSize: "1rem",
          textShadow: "0 0 8px #f472b6",
          position: "relative",
          zIndex: 2,
        }}
      >
        Softie with savage timing 💘
      </p>
    </div>
  );
}
