import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Play, Package, Tag, FileText, Box, ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom';

// Import your images - make sure these paths are correct
import herobackground from '../assets/Images/newHeroBG.png';
import hero1 from '../assets/Images/MonoCarton.png';
import hero2 from '../assets/Images/Rolls.webp';
import hero3 from '../assets/Images/Leaflet-1.jpg';
import hero4 from '../assets/Images/CorruBox.avif';

// Using placeholder images for demo
const herobg = herobackground;
const heroImg1 = hero1;
const heroImg2 = hero2;
const heroImg3 = hero3;
const heroImg4 = hero4;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      type: 'welcome',
      title: "Packaging Excellence",
      subtitle: "Since 1995",
      description: "Your trusted partner in premium printing and packaging solutions. We combine state-of-the-art technology with unmatched quality to elevate your brand.",
      backgroundImage: herobg,
    },
    {
      id: 2,
      type: 'product',
      title: "Mono Cartons",
      subtitle: "Premium Finish & Texture",
      description: "High-quality mono cartons with superior printing and custom structural designs that ensure your product stands out on the shelf.",
      productImage: heroImg1,
      accent: "border-blue-500",
      features: ["Custom Structuring", "UV & Foil Effects", "Fast Turnaround"]
    },
    {
      id: 3,
      type: 'product',
      title: "Labels",
      subtitle: "High Precision Identification",
      description: "Professional labels featuring vibrant color reproduction and durable materials suitable for various environmental conditions.",
      productImage: heroImg2,
      accent: "border-purple-500",
      features: ["Weather Resistant", "Roll & Sheet Form", "Vibrant Colors"]
    },
    {
      id: 4,
      type: 'product',
      title: "Leaflets",
      subtitle: "Marketing Collateral",
      description: "Crisp, clear, and impactful leaflets. We use premium paper stock and high-resolution offset printing for maximum clarity.",
      productImage: heroImg3,
      accent: "border-teal-500",
      features: ["Premium GSM Paper", "Fold Customization", "Offset Quality"]
    },
    {
      id: 5,
      type: 'product',
      title: "Corrugated Boxes",
      subtitle: "Logistics & Protection",
      description: "Engineered for strength. Our corrugated solutions offer the perfect balance of protection and brand visibility for shipping.",
      productImage: heroImg4,
      accent: "border-orange-500",
      features: ["High Burst Factor", "Custom Dimensions", "Sustainable Material"]
    }
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  // --- WELCOME SLIDE ---
  const WelcomeSlide = ({ slide }) => (
    <div className="relative w-full h-full">
      {/* Background Image with subtle zoom */}
      <div className="absolute inset-0">
        <img
          src={slide.backgroundImage}
          alt={slide.title}
          className="w-full h-full object-cover transition-transform duration-[20s] ease-linear scale-100 hover:scale-105"
        />
        {/* Professional Overlay: Dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
              {slide.subtitle}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {slide.title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link to ='/products'>
                <button className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-center">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              {/* <button className="group bg-white/5 border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Company Story
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // --- PRODUCT SLIDE ---
  const ProductSlide = ({ slide }) => (
    <div className="relative w-full h-full bg-slate-900">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full h-full flex flex-col md:flex-row items-center gap-12 py-12 md:py-0">
          
          {/* Left: Content */}
          <div className="w-full md:w-5/12 order-2 md:order-1 flex flex-col justify-center">
            <div className={`h-1 w-20 mb-6 bg-gradient-to-r from-orange-500 to-transparent`}></div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
              {slide.title}
            </h2>
            <h3 className="text-xl text-orange-400 mb-6 font-medium">
              {slide.subtitle}
            </h3>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {slide.description}
            </p>

            {/* Feature List - Clean Professional Grid */}
            <div className="grid gap-4 mb-10">
              {slide.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                  {feature}
                </div>
              ))}
            </div>
{/* 
            <button className="self-start text-white border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors uppercase tracking-widest text-sm font-semibold">
              View Specifications
            </button> */}
          </div>

          {/* Right: Image - BIGGER & CLEANER */}
          <div className="w-full md:w-7/12 order-1 md:order-2 h-[50vh] md:h-full flex items-center justify-center relative">
            {/* Glassmorphic Backing Card */}
            <div className="absolute inset-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm -z-10 transform rotate-1"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full max-h-[75vh] p-8 flex items-center justify-center">
              <img
                src={slide.productImage}
                alt={slide.title}
                className="w-full h-full object-contain drop-shadow-2xl filter brightness-110"
                style={{ maxHeight: '100%' }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="hero-section"
      className="relative w-full h-screen bg-slate-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {slide.type === 'welcome' ? (
            <WelcomeSlide slide={slide} />
          ) : (
            <ProductSlide slide={slide} />
          )}
        </div>
      ))}

      {/* Navigation - Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 z-30 bg-slate-900/80 backdrop-blur-md p-6 rounded-tl-3xl border-t border-l border-white/10 hidden md:flex flex-col gap-4">
        <div className="flex items-center space-x-6">
           {/* Custom Pagination */}
          <div className="text-white font-mono text-sm">
            <span className="text-orange-500">0{currentSlide + 1}</span>
            <span className="text-slate-500 mx-2">/</span>
            <span className="text-slate-500">0{slides.length}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
           <div 
             className="h-full bg-orange-500 transition-all duration-300"
             style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
           ></div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-4 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* CMYK Bar (Professional Touch for Printers) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-0 w-1.5 h-32 bg-slate-800 rounded-r-md overflow-hidden shadow-lg border-y border-r border-white/10">
        <div className="flex-1 bg-cyan-500 opacity-80"></div>
        <div className="flex-1 bg-pink-500 opacity-80"></div>
        <div className="flex-1 bg-yellow-400 opacity-80"></div>
        <div className="flex-1 bg-black opacity-80"></div>
      </div>

    </section>
  );
};

export default HeroSection;