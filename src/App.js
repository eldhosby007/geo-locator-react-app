import { useState } from "react";
import { useGeoLocation } from "./useGeoLocation";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  // const [position, setPosition] = useState({});
  // const [error, setError] = useState(null);

  const { error, isLoading, lat, lng, getLocation } = useGeoLocation();

  function handleClick() {
    setCountClicks((count) => count + 1);
    getLocation();
  }

  return (
    <div
      style={{
        margin: "auto",
        alignItems: "center",
        marginTop: "30px",
        width: "400px",
      }}
    >
      <button
        onClick={handleClick}
        disabled={isLoading}
        style={{
          backgroundColor: "#0a0a23",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
