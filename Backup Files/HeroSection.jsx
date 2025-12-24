import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Play, Palette, Zap, Award } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Premium Offset Printing",
      subtitle: "Excellence in Every Color",
      description: "Professional CMYK printing solutions with state-of-the-art Heidelberg and Komori presses delivering exceptional quality and consistency.",
      image: "https://images.unsplash.com/photo-1565000458392-47c7c2a9d3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      primaryColor: "cyan",
      accentColor: "blue"
    },
    {
      id: 2,
      title: "Custom Packaging Solutions",
      subtitle: "From Concept to Creation",
      description: "Innovative folding cartons, labels, and packaging designs that elevate your brand with precision die-cutting and premium finishing.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      primaryColor: "magenta",
      accentColor: "pink"
    },
    {
      id: 3,
      title: "Digital & Commercial Printing",
      subtitle: "Quality That Speaks",
      description: "Complete printing services including books, catalogs, brochures, and marketing materials with vibrant colors and sharp details.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      primaryColor: "yellow",
      accentColor: "amber"
    },
    {
        id: 4,
        title: "Quality Control & Finishing",
        subtitle: "Precision in Every Detail",
        description: "Advanced quality control systems and premium finishing services including UV coating, lamination, and embossing for exceptional results.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
        primaryColor: "black",
        accentColor: "gray"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 second interval

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* CMYK Color Bars - Top */}
      <div className="absolute top-0 left-0 right-0 h-2 z-20 flex">
        <div className="flex-1 bg-cyan-500"></div>
        <div className="flex-1 bg-magenta-500"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-gray-900"></div>
      </div>

      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className={`absolute inset-0 opacity-30 ${
              slide.primaryColor === 'cyan' ? 'bg-cyan-600' :
              slide.primaryColor === 'magenta' ? 'bg-magenta-600' :
              'bg-yellow-600'
            }`}></div>
          </div>
        ))}
      </div>

      {/* CMYK Halftone Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              
              {/* CMYK Badge */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 mr-4">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-magenta-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <span className="text-white/80 text-sm font-medium tracking-wider">CMYK PRINTING EXCELLENCE</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                <span className={`${
                  currentSlideData.primaryColor === 'cyan' ? 'text-cyan-400' :
                  currentSlideData.primaryColor === 'magenta' ? 'text-magenta-400' :
                  'text-yellow-400'
                } transition-colors duration-1000`}>
                  {currentSlideData.title}
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-white/90 mb-6 font-light">
                {currentSlideData.subtitle}
              </h2>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                {currentSlideData.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className={`${
                  currentSlideData.primaryColor === 'cyan' ? 'bg-cyan-600 hover:bg-cyan-700' :
                  currentSlideData.primaryColor === 'magenta' ? 'bg-magenta-600 hover:bg-magenta-700' :
                  'bg-yellow-600 hover:bg-yellow-700'
                } text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl`}>
                  Get Quote <ChevronRight className="inline w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <Play className="inline w-5 h-5 mr-2" />
                  Watch Process
                </button>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: Palette, label: "Full Color", value: "CMYK+" },
                  { icon: Zap, label: "Fast Delivery", value: "24-48H" },
                  { icon: Award, label: "Since", value: "1995" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className={`w-8 h-8 mx-auto mb-2 ${
                      currentSlideData.primaryColor === 'cyan' ? 'text-cyan-400' :
                      currentSlideData.primaryColor === 'magenta' ? 'text-magenta-400' :
                      'text-yellow-400'
                    } transition-colors duration-1000`} />
                    <div className="text-white font-bold text-lg">{item.value}</div>
                    <div className="text-white/70 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Color Swatch Display */}
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            } hidden lg:block`}>
              <div className="relative">
                {/* Large Color Swatch */}
                <div className="w-80 h-80 mx-auto relative">
                  <div className={`absolute inset-0 rounded-full shadow-2xl transform rotate-45 ${
                    currentSlideData.primaryColor === 'cyan' ? 'bg-gradient-to-br from-cyan-400 to-cyan-600' :
                    currentSlideData.primaryColor === 'magenta' ? 'bg-gradient-to-br from-magenta-400 to-magenta-600' :
                    'bg-gradient-to-br from-yellow-400 to-yellow-600'
                  } transition-all duration-1000`}></div>
                  
                  {/* CMYK Values */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 transform -rotate-45 shadow-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {currentSlideData.primaryColor.toUpperCase()}
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>C: {currentSlideData.primaryColor === 'cyan' ? '100' : '0'}%</div>
                          <div>M: {currentSlideData.primaryColor === 'magenta' ? '100' : '0'}%</div>
                          <div>Y: {currentSlideData.primaryColor === 'yellow' ? '100' : '0'}%</div>
                          <div>K: 0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? `${
                    currentSlideData.primaryColor === 'cyan' ? 'bg-cyan-400' :
                    currentSlideData.primaryColor === 'magenta' ? 'bg-magenta-400' :
                    'bg-yellow-400'
                  } scale-125` 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-20">
        <div
          className={`h-full transition-all duration-300 ${
            currentSlideData.primaryColor === 'cyan' ? 'bg-cyan-400' :
            currentSlideData.primaryColor === 'magenta' ? 'bg-magenta-400' :
            'bg-yellow-400'
          }`}
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* CMYK Color Bars - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 z-10 flex">
        <div className="flex-1 bg-cyan-500"></div>
        <div className="flex-1 bg-magenta-500"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-gray-900"></div>
      </div>
    </section>
  );
};

export default HeroSection;