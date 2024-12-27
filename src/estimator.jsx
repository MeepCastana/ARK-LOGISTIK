import React, { useState, useEffect, useRef } from "react";

function ParcelEstimator() {
  // State variables
  const [weight, setWeight] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [cost, setCost] = useState(0);
  const [currency, setCurrency] = useState("RON");
  const [convertedCost, setConvertedCost] = useState(0);
  const suggestionsRef = useRef(null);

  // Fetch exchange rates
  const fetchExchangeRate = async (fromCurrency, toCurrency) => {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();
    return data.rates[toCurrency];
  };

  useEffect(() => {
    const convertCurrency = async () => {
      if (currency !== "RON") {
        const rate = await fetchExchangeRate("RON", currency);
        setConvertedCost((cost * rate).toFixed(2));
      } else {
        setConvertedCost(cost);
      }
    };
    convertCurrency();
  }, [cost, currency]);

  // Handle address selection

  // Calculation function
  const calculateCost = () => {
    const volume = length * width * height;
    const baseRate = 5;
    const weightFactor = 0.5;
    const volumeFactor = 0.002;

    const totalCost = baseRate + weight * weightFactor + volume * volumeFactor;
    setCost(totalCost.toFixed(2));
  };

  // Get user's current location

  return (
    <div className="p-4 bg-[#f7fbf8] rounded-xl shadow-lg w-[25rem] mx-auto ">
      <h1 className="text-2xl font-bold mb-4 text-center ">Estimator Tarif</h1>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div className="space-y-2 ">
          <label className="block">
            Greutate (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full p-1 border rounded"
            />
          </label>
          <label className="block">
            Lungime (cm):
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(parseFloat(e.target.value))}
              className="w-full p-1 border rounded"
            />
          </label>
          <label className="block">
            Latime (cm):
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(parseFloat(e.target.value))}
              className="w-full p-1 border rounded"
            />
          </label>
          <label className="block">
            Inaltime (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              className="w-full p-1 border rounded"
            />
          </label>
        </div>

        <div className="space-y-4">
          <label className="block">
            Valuta:
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-1 border rounded"
            >
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="RON">RON</option>
            </select>
          </label>

          <div className="invisible h-[4.3rem]"></div>
          <button
            onClick={calculateCost}
            className="w-full bg-[#5669C1] text-[#0a150f] p-1 rounded hover:bg-[#949494] transition-colors duration-300"
          >
            Calculeaza Pretul
          </button>

          <div className="p-2 bg-[#f7fbf8] rounded-lg shadow">
            <p className="text-lg font-semibold">
              Pret: {convertedCost} {currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParcelEstimator;
