import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a route is active
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    // Check if the current pathname starts with the given path (ignoring hash for the main link)
    return location.pathname.startsWith(path);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Machines',
      href: '/machines',
      // These paths exactly match the logic in your Machines.jsx useEffect
      children: [
        { name: 'Packaging Machines', href: '/machines/packaging-machines' },
        { name: 'Printing Machines', href: '/machines/printing-machines' },
      ]
    },
    {
      name: 'Products',
      href: '/products',
      children: [
        // MODIFICATION: Updated hrefs to link to product section IDs on the /products page
        { name: 'Mono Cartons', href: '/products#mono-cartons' },
        { name: 'Labels', href: '/products#labels' },
        { name: 'Leaflets', href: '/products#leaflets' },
        { name: 'Corrugated Boxes', href: '/products#corrugated-boxes' },
        { name: 'Promotional Material', href: '/products#promotional-material' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* 1. Ultra-Minimal Top Bar */}
      <div className="bg-black text-white text-[11px] uppercase tracking-widest py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:02652581334" className="flex items-center hover:text-gray-300 transition-colors">
              <Phone className="w-3 h-3 mr-2" /> (0265) 2581334
            </a>
            <a href="mailto:pushti_pack@yahoo.co.in" className="flex items-center hover:text-gray-300 transition-colors">
              <Mail className="w-3 h-3 mr-2" /> pushti_pack@yahoo.co.in
            </a>
            <a href="mailto:pushti_pack@yahoo.co.in" className="flex items-center hover:text-gray-300 transition-colors">
              <Mail className="w-3 h-3 mr-2" /> info@pushtipack.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center opacity-70"><MapPin className="w-3 h-3 mr-2" /> Vadodara, Gujarat</span>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled || isMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100 top-0'
          : 'bg-white top-[32px] lg:top-[32px]' // Adjusts based on Top Bar height
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="z-50 relative group">
              <img
                src={Logo}
                alt="Pushtipack"
                className={`transition-all duration-300 ${isScrolled ? 'h-20' : 'h-22'}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {navigation.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center text-sm font-medium tracking-wide transition-colors py-3 ${isActive(item.href) ? 'text-black' : 'text-gray-500 hover:text-black'
                      }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-300 ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Animated Underline */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className={`absolute top-full -left-4 w-60 pt-2 transition-all duration-300 origin-top-left ${activeDropdown === idx ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                      }`}>
                      <div className="bg-white border border-gray-100 shadow-xl rounded-sm p-2">
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            to={child.href}
                            className="block px-4 py-3 text-sm text-gray-500 hover:text-white hover:bg-black transition-all rounded-sm flex justify-between group/item"
                          >
                            {child.name}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="group relative px-6 py-3 bg-black text-white text-sm font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-gray-500/30"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get a Quote</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-black z-50"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Menu Overlay (Slide-out) */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            <div className="space-y-6 flex-1">
              {navigation.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0 pb-4">
                  <Link
                    to={item.href}
                    onClick={() => !item.children && setIsMenuOpen(false)}
                    className={`text-2xl font-light tracking-tight block mb-3 ${isActive(item.href) ? 'text-black font-normal' : 'text-gray-400'
                      }`}
                  >
                    {item.name}
                  </Link>

                  {item.children && (
                    <div className="pl-4 space-y-3 border-l border-gray-100">
                      {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          // This onClick will navigate and close the menu
                          onClick={() => setIsMenuOpen(false)}
                          to={child.href}
                          className="block text-sm text-gray-500 font-medium"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-4 bg-black text-white text-center text-sm font-medium tracking-widest uppercase hover:bg-gray-900 transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;