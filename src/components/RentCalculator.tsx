import { useState } from 'react';
import backgroundImage from "../assets/exempel.png"; // Update this path as necessary

export const RentCalculator = () => {
  const [marketValue, setMarketValue] = useState(15000000); // initial market value
  const monthlyRent = marketValue * 0.0083; // assuming 10% annual rent

  const roundedMonthlyRent = Math.round(monthlyRent / 1000) * 1000;
  const roundedMarketValue = Math.round(marketValue / 100000) * 100000;

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-70 p-8 rounded-lg max-w-3xl mx-auto text-center text-black">
        <h2 className="text-2xl font-bold mb-4">Räkna ut min hyra</h2>
        <p className="mb-6">Dra reglaget för att få en uppskattning av hur en affär med oss ser ut.</p>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <label className="block text-left font-semibold">Marknadsvärde</label>
            <span className="text-lg font-semibold">{roundedMarketValue.toLocaleString()} kr</span>
          </div>
          <input
            type="range"
            min="5000000"
            max="25000000"
            value={marketValue}
            onChange={(e) => setMarketValue(Number(e.target.value))}
            className="w-full range-input"
          />
        </div>
        <div className="mb-6">
          <label className="block text-left font-semibold mb-2">Estimerad Månadshyra (exkl. moms):</label>
          <div className="text-2xl font-bold">{roundedMonthlyRent.toLocaleString()} kr</div>
        </div>
        <a href="#apply" className="px-6 py-2 bg-black text-white rounded-full font-bold">Ansök nu</a>
        <p className="mt-4 text-sm text-[#454545]">
          Observera att detta är en uppskattning och den faktiska hyran kan variera beroende på flera faktorer. <br />
          Kontakta oss för en exakt offert.
        </p>
      </div>
    </section>
  );
};

// Add the following CSS styles to your stylesheet
