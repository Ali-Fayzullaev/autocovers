import React from "react";

interface KaspiRedLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const KaspiRedLogo: React.FC<KaspiRedLogoProps> = ({
  className = "",
  width = 120,
  height = 32,
}) => {
  return (
    <div className={`inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="mr-1.5 sm:mr-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-5 sm:h-5"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" fill="white" />
          <rect x="6" y="6" width="12" height="12" rx="2" fill="#DC2626" />
          <path d="M9 9h6v6H9z" fill="white" />
          <path d="M10.5 12l1.5-1.5 1.5 1.5-1.5 1.5z" fill="#DC2626" />
        </svg>
      </div>
      <span className="text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
        Kaspi Red
      </span>
    </div>
  );
};

export default KaspiRedLogo;