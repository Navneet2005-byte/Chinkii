import React, { useState, useEffect } from "react";

const NUM_PICS = 71;

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function PhotosGallery() {
  const originalImages = Array.from({ length: NUM_PICS }, (_, i) => `/Photos/image${i + 1}.jpg`);
  
  const [images, setImages] = useState(originalImages);
  const [modalPic, setModalPic] = useState(null);

  useEffect(() => {
    setImages(shuffleArray(originalImages));
  }, []);

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "30px",
          fontWeight: "600",
          fontFamily: "'Comic Sans MS', cursive, sans-serif",
          color: "#6b2233",
        }}
      >
        Chinki ki Crazy Diary 📸
      </h2>

      {/* Gallery grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
          padding: "0 30px 30px",
          backgroundColor: "#ffd1e8",  // softer pink background
          minHeight: "100vh",
          boxSizing: "border-box",
          fontFamily: "'Comic Sans MS', cursive, sans-serif",
        }}
      >
        {images.map((imgSrc, idx) => (
          <div
            key={idx}
            onClick={() => setModalPic(imgSrc)}
            style={{
              cursor: "pointer",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              transition: "transform 0.25s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={imgSrc}
              alt={`Photo ${idx + 1}`}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                display: "block",
                borderRadius: "12px",
                userSelect: "none",
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalPic && (
        <div
          onClick={() => setModalPic(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(255, 240, 246, 0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
            cursor: "zoom-out",
            padding: "20px",
          }}
        >
          <img
            src={modalPic}
            alt="Full view"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              userSelect: "none",
            }}
            draggable={false}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
