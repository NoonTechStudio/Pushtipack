import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Anup Misra",
      company: "Exemed Pharmaceuticals",
      position: "VP of Operations",
      text: "Outstanding quality and reliability. Their attention to detail in pharmaceutical packaging is unmatched. We've seen a 40% improvement in our product presentation since partnering with them.",
      rating: 5,

    },
    {
      name: "Viral Bhai",
      company: "Centurion Healthcare pvt ltd ",
      position: "Packaging Director",
      text: "Excellent service and fast turnaround times. They've been our trusted partner for over 5 years. Their innovative solutions have helped us reduce packaging costs by 25%.",
      rating: 5,

    },
    {
      name: "Pankaj bhai",
      company: "Aura lifecare",
      position: "Brand Manager",
      text: "Innovative packaging designs that perfectly capture our brand essence. Highly recommended! Their creative team understands luxury packaging like no other.",
      rating: 5,
    },
    {
      name: "Kalpesh Bhai",
      company: "Shine Pharmaceuticals",
      position: "Brand Manager",
      text: "Innovative packaging designs that perfectly capture our brand essence. Highly recommended! Their creative team understands luxury packaging like no other.",
      rating: 5,
    }
  ];

  const clientLogos = [
    { name: "TechCorp" },
    { name: "GreenLife" },
    { name: "MediPharma" },
    { name: "FoodMax" },
    { name: "BeautyPlus" },
    { name: "PackPro" }
  ];

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialTimer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Minimal Accent Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 border border-gray-700 px-6 py-2 rounded-full">
                Testimonials
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Discover why leading companies trust us with their printing and packaging needs
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-200">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gray-900 fill-current mx-0.5" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed text-center font-light">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center md:text-left">
                  <p className="text-gray-900 font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600 font-medium">{testimonials[currentTestimonial].position}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white hover:bg-gray-900 border-2 border-gray-200 hover:border-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white hover:bg-gray-900 border-2 border-gray-200 hover:border-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <ChevronRight className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${index === currentTestimonial
                    ? 'w-10 h-3 bg-white'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="text-center mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/20"
                >
                  <div className="flex items-center justify-center h-12">
                    <span className="text-white font-bold text-base group-hover:text-gray-300 transition-colors duration-300">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-gray-600 font-medium tracking-wide uppercase text-sm">
                  Happy Clients
                </div>
              </div>
              <div className="text-center group border-x border-gray-200">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                  29+
                </div>
                <div className="text-gray-600 font-medium tracking-wide uppercase text-sm">
                  Years Experience
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-gray-600 font-medium tracking-wide uppercase text-sm">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;