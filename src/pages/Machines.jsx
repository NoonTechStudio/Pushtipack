import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import {
  ChevronRight,
  Settings,
  Package,
  Zap,
  Clock,
  Shield,
  Award,
  ArrowLeft,
  Layers,
  Ruler,
  ArrowLeftCircle,
  ArrowRightCircle,
  Package as PackageIcon,
  Filter,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Machine images
import img1 from "../assets/Images/machines/HEIDELBERG Punching Machine - Packaging.jpg";
import img2 from "../assets/Images/machines/HEIDELBERG.jpg";
import img3 from "../assets/Images/machines/MAXIMA Punching Machine-Packaging.jpg";
import img4 from "../assets/Images/machines/LockBottom Pasting Machine-Packaging.jpg";
import img5 from "../assets/Images/machines/LockBottom-Pasting - 2.jpg";
import img6 from "../assets/Images/machines/SUKANT Lamination Machine-Packaging.jpg";

import img7 from "../assets/Images/machines/komori1.jpg";
import img8 from "../assets/Images/machines/komori2.jpg";

// Machine Images (you'll need to import your actual images)
import PackagingMachine1 from "../assets/Images/PM1.jpg";
import PackagingMachine2 from "../assets/Images/PM2.jpg";
import PackagingMachine3 from "../assets/Images/PM3.jpg";
import PackagingMachine4 from "../assets/Images/PM4.jpg";
import PrintingMachine1 from "../assets/Images/PM5.png";
import PrintingMachine2 from "../assets/Images/PM6.png";
import PrintingMachine3 from "../assets/Images/PM7.jpg";
import PrintingMachine4 from "../assets/Images/PM8.jpg";

const Machines = () => {
  const { category } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Determine initial active tab based on URL path
    if (location.pathname.includes("/machines/packaging-machines")) {
      setActiveTab("packaging");
    } else if (location.pathname.includes("/machines/printing-machines")) {
      setActiveTab("printing");
    } else {
      setActiveTab("all");
    }
  }, [location.pathname]);

  // NOTE: Data structure remains the same for consistency
  const packagingMachines = [
    {
      id: 1,
      name: "HEIDELBERG Punching Machine",
      model: "KSBA-4658",
      images: [img1, img2],
      description:
        "High-precision cylinder die-cutting and punching machine for packaging applications with exceptional register accuracy. Designed for pharmaceutical, cosmetics, and food packaging industries, this machine delivers consistent quality in cutting, creasing, and embossing operations.",
      specifications: [
        "Max Sheet Size: 46 x 58.5 cm",
        "Production Speed: 5,000 sheets/hour",
        "Punching Force: 40-60 tons",
        "Min Sheet Size: 14 x 18 cm",
        "Power Consumption: 5 KW",
        "Weight: 3,030 kg",
      ],
      features: [
        "Precision Cylinder Die-Cutting Technology",
        "Suitable for Cutting, Creasing & Embossing",
        "Robust Steel Frame Construction",
        "Quick Tool Changeover System",
        "Central Lubrication System",
        "Safety Clutch & Emergency Stop",
      ],
      industries: ["Pharmaceutical Packaging", "Cosmetics", "Food Packaging"],
      category: "packaging",
    },
    {
      id: 2,
      name: "MAXIMA Punching Machine",
      model: "EXB-35/HS-1020",
      images: [img3],
      description:
        "Advanced flatbed automatic die-cutting machine with PLC control and Siemens automation. Features high-speed operation, accurate feeding, and triple-action stripping system. Ideal for pharmaceutical, food, and cosmetics packaging with excellent versatility for both small and large production runs.",
      specifications: [
        "Max Cutting Size: 615 x 895 mm",
        "Production Speed: 5,500-7,500 sheets/hour",
        "Punching Accuracy: ±0.1mm",
        "Power Consumption: 7.5 KW",
        "Material Thickness: 0.2-5mm",
        "Dimensions: 3.9m x 3.2m x 1.8m",
      ],
      features: [
        "Siemens PLC Control with Touch Screen HMI",
        "Triple Action Stripping (Upper, Middle, Bottom)",
        "Automatic Centralized Lubrication System",
        "Double Sheet Detector for Quality Control",
        "Pneumatic Chase Locking System",
        "Variable Frequency Drive (VFD) Motor Control",
      ],
      industries: ["Pharmaceutical", "Food & Beverage", "Cosmetics"],
      category: "packaging",
    },
    {
      id: 3,
      name: "Lock Bottom Pasting Machine",
      model: "LB-1100/AS-900",
      images: [img4, img5],
      description:
        "High-speed automatic folder gluer designed for crash lock bottom and straight-line carton production. Features pre-folding capability and multiple gluing stations for pharmaceutical, cosmetic, and specialty packaging applications. Offers exceptional production efficiency with quick setup times.",
      specifications: [
        "Max Sheet Size: 900 x 1,700 mm",
        "Production Speed: 100-200 m/min",
        "Min Sheet Size: 300 x 600 mm",
        "Feed Conveyor Speed: 30 m/min",
        "Power Consumption: 10.5 KW",
        "Overall Dimensions: 11.5m x 3m",
      ],
      features: [
        "Pre-Folding for 180° and 135° Creases",
        "Lock Bottom & Straight-Line Box Capability",
        "Multiple Gluing Stations (Side & Bottom)",
        "PLC Program Control with Servo Motors",
        "Quick Job Changeover (<5 minutes)",
        "Automatic Counting & Stacking System",
      ],
      industries: ["Pharmaceutical", "Cosmetics", "Specialty Packaging"],
      category: "packaging",
    },
    {
      id: 4,
      name: "SUKANT Lamination Machine",
      model: "TFL-1200/SLM-Pro",
      images: [img6],
      description:
        "Professional thermal film lamination system for packaging applications. Designed for laminating printed paper, boards, and flexible materials with precision temperature control. Suitable for enhancing product appearance and providing protective coating for various packaging materials.",
      specifications: [
        "Max Lamination Width: 1,200 mm",
        "Lamination Speed: 0-50 m/min",
        "Temperature Range: 40-180°C",
        "Film Thickness: 12-100 microns",
        "Power Consumption: 15 KW",
        "Roller Diameter: 150-200 mm",
      ],
      features: [
        "Precision Temperature Control System",
        "Variable Speed Control with Digital Display",
        "Suitable for Thermal & Cold Lamination",
        "Multiple Material Compatibility (Paper/Board/Film)",
        "Automatic Film Tension Control",
        "Emergency Stop & Safety Features",
      ],
      industries: ["Printing & Packaging", "Labels", "Flexible Packaging"],
      category: "packaging",
    },
  ];

  const printingMachines = [
    {
      id: 5,
      name: "Komori Lithrone 28",
      model: "L-528/L-428",
      images: [img7, img8],
      description:
        "Premium offset printing press in the 28-inch format range, offering exceptional print quality and reliability. Features advanced Komorimatic dampening system, PQC print quality control, and SAPC semi-automatic plate changing. Ideal for commercial printing, packaging, and high-quality production work.",
      specifications: [
        "Max Sheet Size: 52 x 72.8 cm (20.5 x 28.7 in)",
        "Colors: 4-6 Colors + Coating",
        "Production Speed: 10,000-15,000 sheets/hour",
        "Registration Accuracy: ±0.02mm",
        "Min Sheet Size: 36 x 52 cm",
        "Power Consumption: 25 KW",
      ],
      features: [
        "Komorimatic Dampening System",
        "SAPC Semi-Automatic Plate Change",
        "PQC Print Quality Control Console",
        "Chrome Plated Cylinders for Durability",
        "Automatic Blanket & Roller Washing",
        "Powder Spray System for Fast Drying",
      ],
      industries: ["Commercial Printing", "Packaging", "Label Printing"],
      category: "printing",
    },
  ];

  const allMachines = [...packagingMachines, ...printingMachines];

  const machineCategories = [
    {
      id: "all",
      name: "All Machines",
      count: allMachines.length,
      icon: Layers,
    },
    {
      id: "packaging",
      name: "Packaging",
      count: packagingMachines.length,
      icon: PackageIcon,
    },
    {
      id: "printing",
      name: "Printing",
      count: printingMachines.length,
      icon: Settings,
    },
  ];

  const getCurrentMachines = () => {
    switch (activeTab) {
      case "packaging":
        return packagingMachines;
      case "printing":
        return printingMachines;
      default:
        return allMachines;
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case "packaging":
        return "Precision Packaging Machinery";
      case "printing":
        return "State-of-the-Art Printing Presses";
      default:
        return "Machine Portfolio";
    }
  };

  const getPageDescription = () => {
    switch (activeTab) {
      case "packaging":
        return "Explore high-speed, reliable solutions for all your packaging needs, from punching to lamination.";
      case "printing":
        return "Discover world-class offset printing presses delivering unmatched quality and efficiency.";
      default:
        return "A curated selection of our best-in-class industrial printing and packaging automation solutions.";
    }
  };

  // --- MachineDetailCard Component Redesigned to match Products.jsx style ---
  const MachineDetailCard = ({ machine, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % machine.images.length,
      );
    };

    const prevImage = () => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + machine.images.length) % machine.images.length,
      );
    };

    const isReversed = index % 2 !== 0; // Alternating layout

    return (
      <div
        className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
      >
        {/* Image Carousel (Matching Products.jsx Image Cube Grid concept) */}
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Main container with elevation and hover effect */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700 hover:shadow-3xl border border-gray-200">
              {/* Carousel container */}
              <div className="relative aspect-video">
                <img
                  src={machine.images[currentImageIndex]}
                  alt={`${machine.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />

                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-gray-900 transition-colors z-10"
                  aria-label="Previous Image"
                >
                  <ArrowLeftCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-gray-900 transition-colors z-10"
                  aria-label="Next Image"
                >
                  <ArrowRightCircle className="w-5 h-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-gray-900/80 text-white rounded-full text-xs font-semibold">
                    {currentImageIndex + 1} / {machine.images.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute -z-10 top-8 ${isReversed ? "right-8" : "left-8"} w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl opacity-20`}
            ></div>
          </div>
        </div>

        {/* Content (Right Side/Left Side) */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            {/* Category Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              {machine.category.charAt(0).toUpperCase() +
                machine.category.slice(1)}{" "}
              Machine
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              {machine.name}
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Model: {machine.model}
            </p>

            <p className="text-xl text-gray-600 leading-relaxed">
              {machine.description}
            </p>
          </div>

          {/* Features Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Key Technical Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {machine.features.slice(0, 4).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center group">
                  <div className="w-3 h-3 bg-gray-900 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Industries & Specs
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {machine.industries.map((industry, appIndex) => (
                <span
                  key={appIndex}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  {industry}
                </span>
              ))}
            </div>

            <ul className="text-sm text-gray-700 space-y-2 p-4 bg-gray-100 rounded-xl">
              {machine.specifications.slice(0, 3).map((spec, index) => (
                <li key={index} className="flex items-start">
                  <Ruler className="w-4 h-4 mr-2 text-gray-900 flex-shrink-0 mt-0.5" />
                  {spec}
                </li>
              ))}
              {machine.specifications.length > 3 && (
                <li className="text-xs italic text-gray-500 pt-1">
                  ...and {machine.specifications.length - 3} more detailed
                  specifications.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  // --- END MachineDetailCard Component Redesigned ---

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section (Redesigned to match Products.jsx dark hero) */}
      <section className="relative bg-gray-900 py-24 overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Minimal Accent Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            {getPageTitle()}
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
            {getPageDescription()}
          </p>
        </div>
      </section>

      {/* Filter Section (Redesigned to match Products.jsx filter style) */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-30 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="flex gap-2 min-w-max">
                {machineCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex items-center ${
                      activeTab === category.id
                        ? "bg-gray-900 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Placeholder for View Mode Toggle if needed later (omitted for simplicity) */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center font-medium">
                <Clock className="w-4 h-4 mr-2 text-gray-700" />
                Latest Models
              </div>
              <div className="flex items-center font-medium">
                <Shield className="w-4 h-4 mr-2 text-gray-700" />
                Full Warranty Included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machines Section (Redesigned to match Products.jsx main section) */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">
              {machineCategories.find((c) => c.id === activeTab)?.name}
            </h2>
            <p className="text-lg text-gray-500 text-center">
              Displaying {getCurrentMachines().length} high-performance
              machines.
            </p>
          </div>

          <div className="space-y-20">
            {getCurrentMachines().map((machine, index) => (
              <MachineDetailCard
                key={machine.id}
                machine={machine}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (Retained design but with Products.jsx color palette) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              The Advantage of Choosing Us
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              We combine world-class engineering with dedicated service to
              maximize your uptime and output.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Engineering",
                description:
                  "Built with the highest precision standards for unmatched reliability and longevity.",
              },
              {
                icon: Zap,
                title: "Peak Efficiency",
                description:
                  "Optimized energy consumption and high-speed operation for maximum productivity.",
              },
              {
                icon: Shield,
                title: "Comprehensive Service",
                description:
                  "24/7 technical support and a global service network for peace of mind.",
              },
              {
                icon: Settings,
                title: "Intuitive Control",
                description:
                  "Advanced, user-friendly control systems with included training programs.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-100/70 hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 rounded-full mb-5 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Redesigned to match Products.jsx dark CTA) */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Production?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Get a personalized consultation to find the perfect machine that
            meets your capacity and quality demands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Schedule Consultation
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
            <button className="group relative px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white overflow-hidden transition-all duration-300 hover:text-gray-900 inline-flex items-center justify-center">
              <span className="relative z-10">Download Catalog</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Machines;
