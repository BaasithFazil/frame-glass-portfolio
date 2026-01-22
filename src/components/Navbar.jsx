import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const desktopLinkClasses = ({ isActive }) =>
  isActive
    ? "text-gray-900 underline underline-offset-4"
    : "text-gray-700 hover:text-gray-900";

const mobileLinkClasses = ({ isActive }) =>
  isActive
    ? "block py-2 text-gray-900 font-medium"
    : "block py-2 text-gray-700 hover:text-gray-900";


  const linkClasses = ({ isActive }) =>
    isActive
      ? "block py-2 text-gray-900 font-medium"
      : "block py-2 text-gray-700 hover:text-gray-900";

  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <h1 className="text-xl font-semibold text-gray-900">
            Frame & Glass
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
                <NavLink to="/" className={desktopLinkClasses}>
                    Home
                </NavLink>
                <NavLink to="/services" className={desktopLinkClasses}>
                    Services
                </NavLink>
                <NavLink to="/portfolio" className={desktopLinkClasses}>
                    Portfolio
                </NavLink>
                <NavLink to="/contact" className={desktopLinkClasses}>
                    Contact
                </NavLink>
</nav>


          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="mt-4 space-y-2 border-t border-gray-200 pt-4 md:hidden">
            <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/portfolio"
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
