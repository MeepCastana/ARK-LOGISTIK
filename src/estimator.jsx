import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
import ReactCountryFlag from "react-country-flag";

// Parcel Estimator Component
function ParcelEstimator() {
  // State for inputs
  const [weight, setWeight] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [cost, setCost] = useState(0);
  const [currency, setCurrency] = useState("RON");
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);

  // Calculation function
  const calculateCost = () => {
    const volume = length * width * height;
    const baseRate = 5; // Base rate in currency unit
    const weightFactor = 0.5; // Rate per kg
    const distanceFactor = 0.1; // Rate per km
    const volumeFactor = 0.002; // Rate per cubic cm

    const totalCost =
      baseRate +
      weight * weightFactor +
      distance * distanceFactor +
      volume * volumeFactor;

    setCost(totalCost.toFixed(2));
  };

  // Function to calculate distance between points
  const calculateDistance = () => {
    if (startPoint && endPoint) {
      const lat1 = startPoint.lat;
      const lon1 = startPoint.lng;
      const lat2 = endPoint.lat;
      const lon2 = endPoint.lng;
      const R = 6371; // Radius of the Earth in km
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLon = ((lon2 - lon1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      setDistance(distance.toFixed(2));
    }
  };

  // Map Click Handler
  function MapClickHandler({ setPoint }) {
    useMapEvents({
      click(e) {
        setPoint(e.latlng);
      },
    });
    return null;
  }

  // Map Search Feature
  function MapWithSearch({ setPoint }) {
    const map = useMap();

    useEffect(() => {
      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        style: "bar",
        showMarker: true,
        showPopup: false,
        marker: {
          draggable: false,
        },
      });

      map.addControl(searchControl);

      // Listen to search results and update state
      map.on("geosearch/showlocation", (result) => {
        setPoint(result.location); // Set the location as the selected point
      });

      return () => map.removeControl(searchControl);
    }, [map, setPoint]);

    return null;
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Estimator Pret</h1>
      <div className="flex space-x-4 pb-5">
        <div className="flex flex-col space-y-2 pt-5">
          {/* Weight Input */}
          <label className="block mb-2">
            Greutate (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </label>

          {/* Dimensions Inputs */}
          <label className="block mb-2">
            Lungime (cm):
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Latime (cm):
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>

        <div className="flex flex-col space-y-2 pt-5">
          <label className="block mb-2">
            Valuta:
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="USD">
                USD <ReactCountryFlag countryCode="US" svg />
              </option>
              <option value="GBP">
                GBP <ReactCountryFlag countryCode="GB" svg />
              </option>
              <option value="EUR">
                EUR <ReactCountryFlag countryCode="EU" svg />
              </option>
              <option value="RON">
                RON <ReactCountryFlag countryCode="RO" svg />
              </option>
            </select>
          </label>
        </div>
      </div>

      {/* Map */}
      <MapContainer center={[45, 25]} zoom={6} className="h-64 w-full mb-4">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapWithSearch setPoint={setStartPoint} />
        {startPoint && <Marker position={startPoint}></Marker>}
        {endPoint && <Marker position={endPoint}></Marker>}
        <MapClickHandler setPoint={setStartPoint} />
        <MapClickHandler setPoint={setEndPoint} />
      </MapContainer>
    </div>
  );
}

export default ParcelEstimator;
