import React from "react";

interface LangselectorProps {
  selectedLang: string;
  onLanguageChange: (lang: string) => void;
}

const Langselector: React.FC<LangselectorProps> = ({ selectedLang, onLanguageChange }) => {
  const handleLanguageClick = (lang: string) => {
    onLanguageChange(lang);
  };

  return (
    <ul className="language-selector p-1 flex">
      <li>
        <img
          src="/spa.png"
          alt="Español"
          onClick={() => handleLanguageClick("es-ES")}
          style={{
            border: selectedLang === "es-ES" ? "2px solid white" : "2px solid transparent",
            height: "32px",
            width: "40px",
            padding: "2px",
            cursor: "pointer",
          }}
        />
      </li>
      <li>
        <img
          src="/eng.png"
          alt="English"
          onClick={() => handleLanguageClick("en-EN")}
          style={{
            border: selectedLang === "en-EN" ? "2px solid white" : "2px solid transparent",
            height: "32px",
            width: "40px",
            padding: "2px",
            cursor: "pointer",
          }}
        />
      </li>
    </ul>
  );
};

export default Langselector;
