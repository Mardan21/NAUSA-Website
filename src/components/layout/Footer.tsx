import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SITE_CONFIG, NAVIGATION_ITEMS } from "../../lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/images/badges/nausa_logo.jpg"
                  alt="Nausa Logo"
                  width={45}
                  height={45}
                  className="object-cover rounded-full"
                />
                {/* <span className="text-nausa-blue font-black text-xl">N</span> */}
              </div>
              <h3 className="text-2xl font-black">{SITE_CONFIG.name}</h3>
            </div>
            <p className="text-gray-400">
              {SITE_CONFIG.fullName} - {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-nausa-lightblue mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-nausa-lightblue transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-nausa-lightblue mb-4 uppercase">
              Contact
            </h4>
            <p className="text-gray-400 flex items-center mb-2">
              <Mail className="w-4 h-4 mr-2" />
              {SITE_CONFIG.email}
            </p>
            <p className="text-gray-400 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {SITE_CONFIG.location}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-nausa-lightblue mb-4 uppercase">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nausa-lightblue transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>

              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nausa-lightblue transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nausa-lightblue transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © 2025 {SITE_CONFIG.name}, a 501(c)(3) nonprofit organization. All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
