import React, { useState } from "react";

const NUM_VIDEOS = 10;

export default function VideoGridWithOverlay() {
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <>
      <div
        style={{
          backgroundColor: "#fafafa",
          minHeight: "100vh",
          padding: "40px 20px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#222",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "30px",
            fontWeight: "600",
          }}
        >
          Chinki ki kinky harkatein
        </h2>

        <div className="video-grid">
          {[...Array(NUM_VIDEOS)].map((_, i) => {
            const videoSrc = `/videos/video${i + 1}.mp4`;
            return (
              <div
                key={i}
                className="video-thumb"
                tabIndex={0}
                role="button"
                aria-label={`Play video ${i + 1}`}
                onClick={() => setModalVideo(videoSrc)}
                onKeyDown={(e) => e.key === "Enter" && setModalVideo(videoSrc)}
              >
                <video
                  src={videoSrc}
                  muted
                  preload="metadata"
                  className="video-element"
                  playsInline
                />
                <div className="overlay">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    fill="white"
                    width="48"
                    height="48"
                    aria-hidden="true"
                  >
                    <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.6)" />
                    <polygon points="26,20 46,32 26,44" fill="white" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalVideo && (
        <div
          onClick={() => setModalVideo(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
            cursor: "zoom-out",
            padding: "20px",
          }}
          aria-modal="true"
          role="dialog"
        >
          <video
            src={modalVideo}
            controls
            autoPlay
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              borderRadius: "10px",
              boxShadow: "0 0 20px rgba(0,0,0,0.6)",
              backgroundColor: "#000",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .video-thumb {
          position: relative;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          outline-offset: 3px;
          transition: box-shadow 0.3s ease;
        }
        .video-thumb:focus {
          outline: 3px solid #4a90e2;
        }
        .video-thumb:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }
        .video-element {
          width: 100%;
          height: 160px;
          object-fit: cover;
          display: block;
          pointer-events: none;
          user-select: none;
          filter: brightness(0.85);
          transition: filter 0.3s ease;
        }
        .video-thumb:hover .video-element {
          filter: brightness(0.5);
        }
        .overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .video-thumb:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
