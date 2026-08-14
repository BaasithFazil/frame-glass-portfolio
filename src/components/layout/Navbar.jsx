import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollPosition = useRef(0);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isFloating = !isHome || pinned;
  const isShown = !isHome ? visible : !pinned || visible;
  const hasLightNav = isHome && !isFloating;
  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-xs font-bold uppercase tracking-[0.24em] transition ${hasLightNav ? "text-white hover:text-white/70" : "text-zinc-600 hover:text-zinc-950"} ${isActive && !hasLightNav ? "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-zinc-950" : ""}`;

  useEffect(() => {
    const updateNavbar = () => {
      const currentPosition = window.scrollY;
      setPinned(currentPosition > 120);
      setVisible(
        currentPosition < 16 || currentPosition < lastScrollPosition.current,
      );
      lastScrollPosition.current = currentPosition;
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, [pathname]);

  return (
    <>
      {!isHome && <div className="h-[136px]" aria-hidden="true" />}
      <header
        className={`${isFloating ? "fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/95 text-zinc-900 shadow-sm backdrop-blur" : "absolute inset-x-0 top-0 z-30 text-white"} ${isShown ? "translate-y-0" : "-translate-y-full"} transition-transform duration-500 ease-out`}
      >
        <div className="h-10 bg-white px-4 text-center text-[11px] font-semibold tracking-[0.11em] text-zinc-900 sm:text-xs">
          <p className="flex h-full items-center justify-center">
            TRUSTED EXPERTS IN CUSTOM FRAMING &amp; MIRRORS
          </p>
        </div>
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-9">
          <div className="flex h-24 items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-black leading-[0.78] tracking-tight sm:text-3xl"
            >
              FRAME<span className="font-light">/</span>
              <br />
              GLASS<span className="font-light">.LK</span>
            </Link>
            <nav className="hidden items-center gap-8 lg:flex xl:gap-11">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Our Services
              </NavLink>
              <NavLink to="/products" className={navLinkClass}>
                Shop
              </NavLink>
              <NavLink to="/portfolio" className={navLinkClass}>
                Gallery
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
            </nav>
            <Link
              to="/contact"
              className={`hidden border px-5 py-3 text-xs font-bold uppercase tracking-widest transition sm:block ${hasLightNav ? "border-white text-white hover:bg-white hover:text-zinc-900" : "border-zinc-900 hover:bg-zinc-900 hover:text-white"}`}
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <nav
              className={`border-t py-4 lg:hidden ${hasLightNav ? "border-white/30 bg-zinc-950/90" : "border-zinc-200"}`}
            >
              {[
                ["/", "Home"],
                ["/services", "Our Services"],
                ["/products", "Shop"],
                ["/portfolio", "Gallery"],
                ["/contact", "Contact Us"],
              ].map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-sm font-semibold"
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
