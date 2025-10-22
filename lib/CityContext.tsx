'use client'

import { createContext, useContext, useState, ReactNode } from "react";

type City = "astana" | "almaty";

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
    return selectedCity === "astana" ? "+77785228800" : "+77067088225";
  };

  const getCityWhatsApp = () => {
    return selectedCity === "astana" 
      ? "https://wa.me/77785228800" 
      : "https://wa.me/77067088225";
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