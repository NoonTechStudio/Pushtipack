import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Add React Router imports
import Logo from '../assets/Images/Pushtipack.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation(); // Get current location for active state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'HOME', href: '/', active: location.pathname === '/' },
    { name: 'ABOUT US', href: '/about', active: location.pathname === '/about' },
    {
      name: 'MACHINES',
      href: '/machines',
      active: location.pathname === '/machines' || location.pathname.startsWith('/machines/'),
      dropdown: [
        { name: 'Packaging Machines', href: '/machines/packaging-machines' },
        { name: 'Printing Machines', href: '/machines/printing-machines' },
      ]
    },
    {
      name: 'PRODUCTS',
      href: '/products',
      active: location.pathname === '/products' || location.pathname.startsWith('/products/'),
      dropdown: [
        { name: 'Folding Cartons', href: '/products/folding-cartons' },
        { name: 'Paper Labels', href: '/products/paper-labels' },
        { name: 'Leaflets & Brochures', href: '/products/leaflets-brochures' },
        { name: 'Books & Catalogs', href: '/products/books-catalogs' },
        { name: 'Calendars', href: '/products/calendars' }
      ]
    },
    { name: 'CONTACT US', href: '/contact', active: location.pathname === '/contact' }
  ];

  return (
    <div className="w-full">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white py-3 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center group hover:text-blue-300 transition-all duration-300">
                <Phone className="w-4 h-4 mr-2 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">+91 9427611985</span>
              </div>
              <div className="flex items-center group hover:text-blue-300 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">pushti_pack@yahoo.co.in</span>
              </div>
              <div className="flex items-center group hover:text-blue-300 transition-all duration-300">
                <MapPin className="w-4 h-4 mr-2 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Vadodara, Gujarat, India</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-medium">Follow Us:</span>
              <div className="flex space-x-3">
                {[
                  { name: 'Facebook', icon: 'F', color: 'bg-blue-600 hover:bg-blue-500' },
                  { name: 'LinkedIn', icon: 'L', color: 'bg-blue-700 hover:bg-blue-600' },
                  { name: 'Twitter', icon: 'T', color: 'bg-sky-600 hover:bg-sky-500' }
                ].map((social) => (
                  <div 
                    key={social.name} 
                    className={`w-7 h-7 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg`}
                  >
                    <span className="text-xs font-bold text-white">{social.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            
            {/* Logo Section - Better Spacing */}
            <Link to="/" className="flex items-center group">
              <div className="relative overflow-hidden">
                <img 
                  className='h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110'
                  src={Logo} 
                  alt="Pushtipack logo" 
                />
              </div>
            </Link>

            {/* Desktop Navigation - Better Spacing */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`relative flex items-center px-4 xl:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                      item.active
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100'
                    }`}
                  >
                    <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 ml-2 transition-all duration-300 ${
                        activeDropdown === index ? 'rotate-180 text-orange-600' : ''
                      }`} />
                    )}
                    
                    {/* Animated background for non-active items */}
                    {!item.active && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-10"></div>
                    )}
                  </Link>

                  {/* Enhanced Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 py-3 transition-all duration-500 ${
                      activeDropdown === index 
                        ? 'opacity-100 translate-y-0 visible scale-100' 
                        : 'opacity-0 translate-y-4 invisible scale-95'
                    }`}>
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 rotate-45 border-t border-l border-gray-200/50"></div>
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="relative block px-6 py-3 text-sm text-gray-700 hover:text-orange-600 transition-all duration-300 group/item overflow-hidden"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 transform translate-x-full group-hover/item:translate-x-0 transition-transform duration-300"></div>
                          <span className="relative z-10 font-medium">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons - Better Alignment */}
            <div className="flex items-center space-x-3">
              {/* Enhanced Search Button */}
              <button className="p-2.5 text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Search className="w-5 h-5" />
              </button>

              {/* Enhanced Get Quote Button */}
              <Link 
                to="/contact"
                className="hidden sm:flex items-center px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10 whitespace-nowrap">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 rounded-xl transition-all duration-300 transform hover:scale-110"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[600px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
          }`}>
            <div className="space-y-2 pt-4 border-t border-gray-200/50">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="space-y-1">
                  <Link
                    to={item.href}
                    className={`block px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:translate-x-2 ${
                      item.active
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 rounded-lg transition-all duration-300 transform hover:translate-x-1"
                          style={{ transitionDelay: `${(index * 50) + (subIndex * 25)}ms` }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Enhanced Mobile Get Quote Button */}
              <Link 
                to="/contact"
                className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Animated Border */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></div>
      </header>
    </div>
  );
};

export default Header;