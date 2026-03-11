'use client'

import { createContext, useContext, useState, ReactNode } from "react";

// now only Astana remains
type City = "astana";

interface CityContextType {
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  getCityPhone: () => string;
  getCityWhatsApp: () => string;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<City>("astana");

  const getCityPhone = () => {
    // always Astana
    return "+77785228800";
  };

  const getCityWhatsApp = () => {
    return "https://wa.me/77785228800";
  };

  return (
    <CityContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        getCityPhone,
        getCityWhatsApp,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
}