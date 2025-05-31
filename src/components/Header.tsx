import { useState, useEffect } from "react";
import logo1 from "../assets/logo02.svg";
import { setArrivalAuthForToday, hasValidArrivalAuth } from "../utils/arrivalAuth";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const ARRIVAL_AUTH_KEY = import.meta.env.VITE_ARRIVAL_AUTH_KEY as string;

export default function Header({ onNavigate }: HeaderProps) {
  const [hasArrivalAuth, setHasArrivalAuth] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlAuth = urlParams.get("auth") === ARRIVAL_AUTH_KEY;
    if (urlAuth) {
      setArrivalAuthForToday();
      setHasArrivalAuth(true);
      onNavigate("Arrival"); // Automatically navigate to Arrival
    } else if (hasValidArrivalAuth()) {
      setHasArrivalAuth(true);
    }
  }, [onNavigate]);

  const handleMenuItemClick = (section: string) => {
    onNavigate(section);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-transparent backdrop-blur-md min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="javascript:void(0)" className="max-sm:hidden">
          <img
            src={logo1}
            alt="logo"
            className="w-auto h-12 max-h-[70px] object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:block w-full">
          <ul className="flex gap-x-4 justify-center">
            <li>
              <button
                style={{ color: "#9b6a02" }}
                className="hover:text-blue-700 block font-semibold text-[15px]"
                onClick={() => handleMenuItemClick("Welcome")}
              >
                Welcome
              </button>
            </li>
            <li>
              <button
                style={{ color: "#9b6a02" }}
                className="hover:text-blue-700 block font-semibold text-[15px]"
                onClick={() => handleMenuItemClick("Gallery")}
              >
                Gallery
              </button>
            </li>
            {hasArrivalAuth && (
              <li>
                <button
                  style={{ color: "#9b6a02" }}
                  className="hover:text-blue-700 block font-semibold text-[15px]"
                  onClick={() => handleMenuItemClick("Arrival")}
                >
                  Arrival
                </button>
              </li>
            )}
            <li>
              <button
                style={{ color: "#9b6a02" }}
                className="hover:text-blue-700 block font-semibold text-[15px]"
                onClick={() => handleMenuItemClick("Information")}
              >
                Information
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation: always visible, row, 80% opacity, centered */}
        <nav className="block lg:hidden w-full">
          <ul className="flex gap-x-2 justify-center items-center bg-white bg-opacity-80 rounded-lg py-2">
            <li className="flex-1 min-w-0">
              <button
                style={{ color: "#9b6a02", height: "150%" }}
                className="hover:text-blue-700 block font-semibold text-base w-full h-[150%] truncate"
                onClick={() => handleMenuItemClick("Welcome")}
              >
                Welcome
              </button>
            </li>
            <li className="flex-1 min-w-0">
              <button
                style={{ color: "#9b6a02", height: "150%" }}
                className="hover:text-blue-700 block font-semibold text-base w-full h-[150%] truncate"
                onClick={() => handleMenuItemClick("Gallery")}
              >
                Gallery
              </button>
            </li>
            {hasArrivalAuth && (
              <li className="flex-1 min-w-0">
                <button
                  style={{ color: "#9b6a02", height: "150%" }}
                  className="hover:text-blue-700 block font-semibold text-base w-full h-[150%] truncate"
                  onClick={() => handleMenuItemClick("Arrival")}
                >
                  Arrival
                </button>
              </li>
            )}
            <li className="flex-1 min-w-0">
              <button
                style={{ color: "#9b6a02", height: "150%" }}
                className="hover:text-blue-700 block font-semibold text-base w-full h-[150%] truncate"
                onClick={() => handleMenuItemClick("Information")}
              >
                Information
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
