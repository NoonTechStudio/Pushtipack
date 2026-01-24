import React from "react";
import {
  Globe,
  Package,
  Truck,
  Award,
  Palette,
  Layers,
  PenTool,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Ship,
  Plane,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Facilities = () => {
  const exportFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Exporting to multiple countries worldwide",
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Reliable Shipping",
      description: "Timely delivery with trusted logistics partners",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Standards",
      description: "International quality certifications & compliance",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Custom Packaging",
      description: "Export-ready packaging solutions",
    },
  ];

  const prePressFacilities = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Custom Design",
      description: "Tailored designs matching your brand identity",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "3D Mockups",
      description: "Visualize your cartons before production",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Color Matching",
      description: "Precise Pantone & CMYK color management",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Structural Engineering",
      description: "Optimized designs for functionality & aesthetics",
    },
  ];

  const countries = [
    "USA",
    "UK",
    "UAE",
    "Australia",
    "Canada",
    "Germany",
    "Singapore",
    "South Africa",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            World-Class Facilities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our Facilities
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Equipped with cutting-edge technology and global export capabilities
          </p>
        </div>
      </section>

      {/* Export Capabilities Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                  <Globe className="w-4 h-4 mr-2" />
                  Export Capabilities
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Serving Clients{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Worldwide
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We take pride in our ability to deliver premium printing and
                  packaging solutions across international borders. Our
                  export-ready facilities ensure that your products meet global
                  standards and reach you on time, every time.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {exportFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Countries Badge Section */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Exporting To
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {countries.map((country, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* World Map Illustration */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
                {/* Animated globe background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Globe Icon - Large and centered */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="relative">
                    <Globe className="w-64 h-64 text-white/30 animate-spin-slow" />
                    
                    {/* Orbiting planes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-80 h-80 animate-spin-slow">
                        <Plane className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-96 h-96 animate-spin-reverse">
                        <Ship className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="relative z-10 mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-3xl font-bold text-white mb-1">15+</p>
                    <p className="text-sm text-white/80">Countries</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-3xl font-bold text-white mb-1">500+</p>
                    <p className="text-sm text-white/80">Exports</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-3xl font-bold text-white mb-1">100%</p>
                    <p className="text-sm text-white/80">On-Time</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Press Design Services Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Design Illustration */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 shadow-2xl overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-white rounded-lg"
                      style={{
                        width: `${20 + Math.random() * 40}px`,
                        height: `${20 + Math.random() * 40}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Central design tools illustration */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="relative">
                    {/* Main palette icon */}
                    <Palette className="w-48 h-48 text-white/40" />
                    
                    {/* Orbiting design elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-72 h-72 animate-spin-slow">
                        <PenTool className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 text-white" />
                        <Layers className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 text-white" />
                        <Sparkles className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process steps */}
                <div className="relative z-10 mt-8 space-y-3">
                  {["Concept", "Design", "Review", "Production"].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {index + 1}
                      </div>
                      <span className="text-white font-medium">{step}</span>
                      <CheckCircle className="w-5 h-5 text-white ml-auto" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-3xl opacity-50"></div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                  <PenTool className="w-4 h-4 mr-2" />
                  Pre-Press Services
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Professional{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                    Design Studio
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Our in-house pre-press facility brings your vision to life
                  with expert design services. From concept to final artwork, we
                  create custom carton designs tailored to your brand's unique
                  requirements, ensuring perfect execution every time.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {prePressFacilities.map((facility, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {facility.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Design Process Highlights */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Our Design Process
                </h3>
                <div className="space-y-3">
                  {[
                    "Understanding your brand requirements",
                    "Creating multiple design concepts",
                    "3D visualization and mockups",
                    "Final artwork preparation for production",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Whether you need export solutions or custom design services, we're
            here to help bring your packaging vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-transparent text-white rounded-full text-lg font-semibold border-2 border-white overflow-hidden transition-all duration-300 hover:text-gray-900 inline-flex items-center justify-center"
            >
              <span className="relative z-10">Request Quote</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Facilities;