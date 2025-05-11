import { useState } from "react";
import logo1 from "../assets/logo01.svg";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = (section: string) => {
    onNavigate(section); // Navigate to the selected section
    setIsMenuOpen(false); // Close the menu
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

        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:block`}
        >
          <ul className="lg:flex gap-x-4 max-lg:space-y-3">
            <li>
              <button
                className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                onClick={() => handleMenuItemClick("Welcome")}
              >
                Welcome
              </button>
            </li>
            <li>
              <button
                className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                onClick={() => handleMenuItemClick("Gallery")}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                onClick={() => handleMenuItemClick("Arrival")}
              >
                Arrival
              </button>
            </li>
            <li>
              <button
                className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                onClick={() => handleMenuItemClick("Information")}
              >
                Information
              </button>
            </li>
          </ul>
        </div>

        <button
          className="lg:hidden px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all"
          onClick={handleToggleMenu}
        >
          Menu
        </button>
      </div>
    </header>
  );
}
