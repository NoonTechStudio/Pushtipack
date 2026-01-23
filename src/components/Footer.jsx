import React from "react";
import {
  Package,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    "Folding Cartons",
    "Paper Labels",
    "Leaflets & Brochures",
    "Books & Catalogs",
    "Promotional Materials",
    "Custom Calendars",
  ];

  const industries = [
    "Pharmaceutical & OTC",
    "Cosmetic & Skin Care",
    "Food & Beverage",
    "Hair Care Products",
    "FMCG Industries",
    "Healthcare Products",
  ];

  const capabilities = [
    { name: "Offset Printing", href: "/machines/offset-printing" },
    { name: "Lamination Services", href: "/services/lamination" },
    { name: "High Gloss UV Coating", href: "/services/uv-coating" },
    { name: "Foil Stamping", href: "/services/foil-stamping" },
    { name: "Die Cutting & Sorting", href: "/services/die-cutting" },
    { name: "Perfect Binding", href: "/services/binding" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Machines", href: "/machines" },
    { name: "Quality Standards", href: "/quality" },
    { name: "Request Quote", href: "/contact" },
    { name: "Client Testimonials", href: "/testimonials" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern - Matching Products.jsx theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Minimal Accent Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Section with Company Info */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <Link
                  to="/"
                  className="inline-flex items-center space-x-3 mb-6 group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-7 h-7 text-gray-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Pushti Pack</h2>
                    <p className="text-sm text-gray-400 font-medium">
                      Excellence Since 1995
                    </p>
                  </div>
                </Link>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  Leading offset printing and packaging company providing
                  personalized solutions with state-of-the-art technology and
                  expert team since 1995.
                </p>

                {/* Social Media */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
                    Connect With Us
                  </h4>
                  <div className="flex space-x-3">
                    {[
                      {
                        Icon: Facebook,
                        href: "https://facebook.com",
                        label: "Facebook",
                      },
                      {
                        Icon: Linkedin,
                        href: "https://linkedin.com",
                        label: "LinkedIn",
                      },
                      {
                        Icon: Twitter,
                        href: "https://twitter.com",
                        label: "Twitter",
                      },
                      {
                        Icon: Instagram,
                        href: "https://instagram.com",
                        label: "Instagram",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                        title={social.label}
                      >
                        <social.Icon className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                  Our Services
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-400 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries Served */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                  Industries Served
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {industries.map((industry, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-400 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">
                        {industry}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center text-sm group"
                      >
                        <ChevronRight className="w-3 h-3 mr-2 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Our Core Capabilities
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4"></div>
              <p className="text-gray-400">
                Advanced printing and finishing technologies for superior
                results
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {capabilities.map((capability, index) => (
                <Link
                  key={index}
                  to={capability.href}
                  className="text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800 hover:bg-white hover:border-white transition-all duration-300 group"
                >
                  <div className="text-white font-medium text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {capability.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © 2025 All rights reserved with{" "}
                <span className="text-white font-semibold">PushtiPack</span>
              </p>
              <p className="mt-1">
                Website Designed with excellence by{" "}
                <a
                  href="https://www.noontechstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 font-semibold transition-colors duration-300"
                >
                  Noon Tech Studio
                </a>
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/quality"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Quality Standards
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </footer>
  );
};

export default Footer;
