import {
  ChevronRight,
  Package,
  Settings,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/HeroSection";
import Testimonials from "../components/TestimonialSection";
import Welcome from "../components/WelcomeSection";
import VideoShow from '../components/VideoShowcaseSection';

// images
import img1 from "../assets/Images/Mono.jpg";
import img2 from "../assets/Images/Labels.jpg";
import img3 from "../assets/Images/img12.jpg";
import img4 from "../assets/Images/f1.avif";
import img5 from "../assets/Images/img10.jpg";

// Machine Images
import Machine1 from "../assets/Images/machines/HEIDELBERG.jpg";
import Machine2 from "../assets/Images/machines/komori1.jpg";
import Machine3 from "../assets/Images/machines/LITHRONE1-28.jpg";

// Featured Products
import Feature1 from "../assets/Images/fp2.jpg";
import Feature2 from "../assets/Images/fp1.jpg";
import Feature3 from "../assets/Images/fp3.jpg";

const Home = () => {
  const services = [
    {
      title: "Mono Cartons",
      description:
        "Premium quality folding cartons for pharmaceutical, FMCG, and food industries with precise die-cutting and finishing.",
      image: img1,
    },
    {
      title: "Labels",
      description:
        "High-quality paper labels with vibrant colors and durable adhesives for all your branding needs.",
      image: img2,
    },
    {
      title: "Leaflets",
      description:
        "Eye-catching marketing materials with premium paper stock and professional finishing options.",
      image: img3,
    },
    {
      title: "Corrugated Boxes",
      description:
        "Durable corrugated packaging solutions for shipping and storage with custom printing options.",
      image: img4,
    },
    {
      title: "Promotional Products",
      description:
        "Custom calendars, brochures, and catalogs with superior print quality for corporate gifting and marketing.",
      image: img5,
    },
  ];

  const machines = [
    {
      name: "Heidelberg Punching Machine",
      type: "Offset Printing Press",
      description:
        "High-speed 6-color offset printing with perfecting capabilities for premium quality output.",
      image: Machine1,
      specs: [
        "Max Sheet: 74 x 106 cm",
        "6 Colors + Coating",
        "15,000 sheets/hour",
      ],
    },
    {
      name: "Komori",
      type: "Advanced Offset Press",
      description:
        "State-of-the-art printing technology with exceptional color consistency and registration.",
      image: Machine2,
      specs: ["4-Color Process", "LED-UV Curing", "Automated Quality Control"],
    },
    {
      name: "Lithrone 28",
      type: "Die Cutting Machine",
      description:
        "Precision die-cutting and creasing for folding cartons with automated waste stripping.",
      image: Machine3,
      specs: [
        "Max Sheet: 106 x 76 cm",
        "Automated Stripping",
        "High Precision Cutting",
      ],
    },
  ];

  const products = [
    {
      name: "Pharmaceutical Packaging",
      category: "Healthcare",
      description:
        "FDA compliant packaging solutions for pharmaceutical and medical device industries.",
      image: Feature1,
    },
    {
      name: "Food & Beverage Cartons",
      category: "F&B Industry",
      description:
        "Food-grade packaging with barrier properties and attractive shelf appeal.",
      image: Feature2,
    },
    {
      name: "Cosmetic Packaging",
      category: "Beauty & Personal Care",
      description:
        "Premium packaging solutions that enhance product presentation and brand value.",
      image: Feature3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <Welcome />

      {/* Video Showcase  */}
      <VideoShow /> 

      {/* Home Product section - UPDATED MODERN DESIGN */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-700 pr-3">
                Our Products
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive printing and packaging solutions tailored to your
              industry needs
            </p>
          </div>

          {/* Products Grid - 2 columns for first 4, then centered single item */}
          <div className="mb-16">
            {/* First 4 products in 2x2 grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-8">
              {services.slice(0, 4).map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      Learn More →
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Bottom Border Animation */}
                    <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 5th product centered */}
            {services.length > 4 && (
              <div className="flex justify-center">
                <div className="w-full md:w-1/2 lg:w-1/2">
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={services[4].image}
                        alt={services[4].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        Learn More →
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                        {services[4].title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {services[4].description}
                      </p>

                      {/* Bottom Border Animation */}
                      <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <Link
              to="/products"
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/40 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                View All Products
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>

            {/* Supporting text */}
            <p className="mt-6 text-gray-500 text-sm">
              Discover our complete range of premium printing and packaging
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section
        id="machines"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 border border-gray-200 px-6 py-2 rounded-full">
                Our Equipment
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              State-of-the-Art Machines
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              Advanced printing and finishing equipment ensuring superior
              quality and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-200 hover:border-gray-900 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-gray-500 font-semibold mb-4 uppercase text-sm tracking-wide">
                    {machine.type}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {machine.description}
                  </p>
                  <div className="space-y-3">
                    {machine.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/machines">
              <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/30 hover:scale-105 inline-flex items-center">
                <span className="relative z-10 flex items-center">
                  View All Machines
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section - Simple Cards */}
      <section
        id="products"
        className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 border border-gray-200 px-6 py-2 rounded-full">
                Featured Products
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Industry Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              Discover our premium product range across various industries
            </p>
          </div>

          {/* Card Grid with simplified content */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:border-gray-900 transition-all duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Reduced Image Height */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay for visual appeal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Simplified Content Block */}
                <div className="p-6">
                  {/* Category as a small badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold mb-3 tracking-wider">
                    {product.category}
                  </div>
                  {/* Main Product Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-0">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Get a personalized quote for your printing and packaging needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* UPDATED: Link to Contact Form */}
            <Link
              to="/contact#contact-form"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="relative z-10">Request Quote Now</span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>

            {/* <Link 
              to="/contact"
              className="group relative px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white overflow-hidden transition-all duration-300 hover:text-gray-900 inline-flex items-center justify-center"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
