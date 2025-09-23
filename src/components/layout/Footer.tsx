import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SITE_CONFIG, NAVIGATION_ITEMS } from "../../lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/images/badges/nausa_logo.jpg"
                  alt="NAUSA Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                {SITE_CONFIG.name}
              </h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              {SITE_CONFIG.fullName} - {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-nausa-lightblue mb-3 sm:mb-4 uppercase text-sm sm:text-base">
              Quick Links
            </h4>
            <nav>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-nausa-lightblue transition-colors focus:text-nausa-lightblue focus:outline-none focus:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-nausa-lightblue mb-3 sm:mb-4 uppercase text-sm sm:text-base">
              Contact
            </h4>
            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
              <p className="flex items-start sm:items-center">
                <Mail
                  className="w-4 h-4 mr-2 mt-0.5 sm:mt-0 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="break-all hover:text-nausa-lightblue transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="flex items-start sm:items-center">
                <MapPin
                  className="w-4 h-4 mr-2 mt-0.5 sm:mt-0 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{SITE_CONFIG.location}</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-nausa-lightblue mb-3 sm:mb-4 uppercase text-sm sm:text-base">
              Follow Us
            </h4>
            <div className="flex space-x-3 sm:space-x-4" role="list">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nausa-lightblue transition-colors focus:bg-nausa-lightblue focus:outline-none focus:ring-2 focus:ring-nausa-lightblue focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  aria-hidden="true"
                />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nausa-lightblue transition-colors focus:bg-nausa-lightblue focus:outline-none focus:ring-2 focus:ring-nausa-lightblue focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Visit our Instagram profile"
              >
                <FaInstagram
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  aria-hidden="true"
                />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nausa-lightblue transition-colors focus:bg-nausa-lightblue focus:outline-none focus:ring-2 focus:ring-nausa-lightblue focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Visit our YouTube channel"
              >
                <FaYoutube
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>
            © 2025 {SITE_CONFIG.name}, a 501(c)(3) nonprofit organization. All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
