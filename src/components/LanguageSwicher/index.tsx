'use client';
import React, { useState } from 'react';

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: 'VN', label: 'VN' },
  { code: 'EN', label: 'EN' },
  // Add more languages as needed
];

const LanguageSwitcher: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('VN');

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
  };

  return (
    <div className="flex items-center space-x-4">
      {languages.map((language, index) => (
        <React.Fragment key={language.code}>
          <button
            onClick={() => handleLanguageChange(language.code)}
            className={`font-bold ${
              selectedLanguage === language.code
                ? 'text-blue-ryb'
                : 'text-raisin-black'
            }`}
          >
            {language.label}
          </button>
          {/* Add a divider between languages except after the last item */}
          {index < languages.length - 1 && (
            <div className="w-px h-6 bg-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
