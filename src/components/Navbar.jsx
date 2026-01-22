import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
  `relative flex items-center py-1 text-base font-medium transition ${
    isActive
      ? "text-gray-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-gray-900"
      : "text-gray-600 hover:text-gray-900"
  }`;

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "block py-3 text-gray-900 font-medium"
      : "block py-3 text-gray-700 hover:text-gray-900";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Brand */}
          <Link
            to="/"
            className="font-heading text-xl tracking-wide text-gray-900"
          >
            Frame & Glass
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-4 rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-black transition"
            >
              Get a Quote
            </Link>
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
          <nav className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <NavLink to="/" className={mobileLinkClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/services" className={mobileLinkClass} onClick={() => setOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={mobileLinkClass} onClick={() => setOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={mobileLinkClass} onClick={() => setOpen(false)}>
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-black transition"
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
