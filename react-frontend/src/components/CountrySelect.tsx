import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

interface Country {
  code: string;
  name: string;
}

const countries: Country[] = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },

];

const CountrySelect: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
            <ReactCountryFlag countryCode={selectedCountry} svg />
          </option>
        ))}
      </select>
      {selectedCountry && (
        <ReactCountryFlag countryCode={selectedCountry} svg />
      )}
    </div>
  );
};

export default CountrySelect;
