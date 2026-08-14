import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-heading">Frame & Glass Workshop</h3>
            <p className="mt-3 text-sm text-gray-300">
              Custom framing, glasswork and mirror solutions handcrafted with
              care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-3 text-sm text-gray-300 space-y-2">
              <div>
                Phone:{" "}
                <a className="hover:text-white" href="tel:+94772287228">
                  +94 77 228 7228
                </a>
              </div>
              <div>
                Email:{" "}
                <a
                  className="hover:text-white"
                  href="mailto:hello@frameglass.com"
                >
                  hello@frameglass.com
                </a>
              </div>
              <div>Address: 123 Glass St, Colombo</div>
            </div>

            <div className="flex items-center space-x-3 mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 109.2 12 3.8 3.8 0 0012 8.2zm4.5-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.2c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.08c-1.07 0-1.4.67-1.4 1.36v1.62h2.38l-.38 2.9h-2v7A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Frame & Glass Workshop. All rights
            reserved.
          </p>
          <div className="mt-3 md:mt-0">
            <Link to="/privacy" className="mx-2 text-gray-300 hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="mx-2 text-gray-300 hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
