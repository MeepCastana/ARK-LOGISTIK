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

  // Fetch exchange rates
  // Fetch exchange rates
  const fetchExchangeRate = async (fromCurrency, toCurrency) => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );

      if (!response.ok) throw new Error("Failed to fetch exchange rates");

      const data = await response.json();
      const rate = data.rates[toCurrency];

      if (!rate || isNaN(rate)) throw new Error("Invalid exchange rate");

      // Approximate conversion rate to nearest 0.1
      return Math.round(rate * 10) / 10;
    } catch (error) {
      console.error("Error fetching exchange rate:", error.message);
      return 1; // Default to 1:1 conversion in case of error
    }
  };

  // Currency conversion with approximation
  useEffect(() => {
    const convertCurrency = async () => {
      // Default cost to 0 if invalid
      const safeCost = parseFloat(cost) || 0;

      if (currency !== "RON") {
        const rate = await fetchExchangeRate("RON", currency);
        const converted = safeCost * rate;
        const approximatedCost = Math.round(converted * 10) / 10; // Approximation
        setConvertedCost(approximatedCost.toFixed(2));
      } else {
        setConvertedCost(safeCost.toFixed(2));
      }
    };
    convertCurrency();
  }, [cost, currency]);

  const calculateCost = () => {
    // Default values to prevent NaN errors
    const safeLength = parseFloat(length) || 0;
    const safeWidth = parseFloat(width) || 0;
    const safeHeight = parseFloat(height) || 0;
    const safeWeight = parseFloat(weight) || 0;

    // Ensure weight is non-negative
    if (safeWeight < 0) {
      setCost(0);
      return;
    }

    const volume = safeLength * safeWidth * safeHeight;

    // Base rate calculation
    let baseRate = safeWeight > 20 ? safeWeight * 9 : 180;
    const weightFactor = 0.5;
    const volumeFactor = 0.002;

    const totalCost =
      baseRate + safeWeight * weightFactor + volume * volumeFactor;

    // Round the final cost to 2 decimals
    setCost(totalCost.toFixed(2));
  };

  // Get user's current location

  return (
    <div className="p-4 bg-[#f7fbf8] rounded-xl shadow-lg w-[25rem] mx-auto  ">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#374151]">
        Estimator Tarif
      </h1>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#374151]">
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

          <div className="flex justify-between">
            <div className="p-2 rounded-lg bg-[#dfe0df] text-center">
              <div>Troller</div>
              <div className="text-sm text-gray-600 mt-1">70 x 40 x 30 cm</div>
            </div>
            <div className="p-2 rounded-lg bg-[#dfe0df] text-center">
              <div>Document</div>
              <div className="text-sm text-gray-600 mt-1">30 x 20 x 5 cm</div>
            </div>
            <div className="p-2 rounded-lg bg-[#dfe0df] text-center">
              <div>Geanta</div>
              <div className="text-sm text-gray-600 mt-1">50 x 30 x 20 cm</div>
            </div>
          </div>

          <button
            onClick={calculateCost}
            className="w-full bg-[#1F2937] text-[#d8d8d8] p-1 rounded hover:bg-[#949494] hover:text-[#1F2937] transition-colors duration-300"
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
