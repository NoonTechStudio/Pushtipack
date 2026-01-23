import React from "react";
import {
  Award,
  Users,
  Calendar,
  Target,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  const achievements = [
    { icon: Calendar, text: "29+ Years", subtitle: "Industry Excellence" },
    { icon: Users, text: "1000+", subtitle: "Global Clients" },
    { icon: Target, text: "24/7", subtitle: "Dedicated Support" },
  ];

  const capabilities = [
    "State-of-the-art technology and infrastructure",
    "Skilled team of experts and gradual growth",
    "Variety of products including folding cartons and labels",
    "Personalized solutions for market requirements",
    "Enhanced value through focused client dialogue",
  ];

  const stats = [
    { value: "3 Lakh", label: "Daily Capacity", icon: TrendingUp },
    { value: "1000+", label: "Happy Clients", icon: Users },
    { value: "50K+", label: "Projects Done", icon: Target },
    { value: "24/7", label: "Support", icon: Zap },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Minimal Accent Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gray-900 rounded-full opacity-[0.02] blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-900 rounded-full opacity-[0.02] blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 border border-gray-200 px-6 py-2 rounded-full">
              Established 1995
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            PUSHTI PACK
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            Premier offset printing and packaging solutions
          </p>
        </div>

        {/* Achievements Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-900 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <achievement.icon className="w-10 h-10 text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.text}
                </h4>
                <p className="text-sm text-gray-500 tracking-wide uppercase">
                  {achievement.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Crafting Excellence
                <br />
                <span className="text-gray-400">Since 1995</span>
              </h2>
              <div className="w-16 h-1 bg-gray-900 mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 1995, Pushti Pack is a premier offset printing and
                packaging company dedicated to delivering tailored solutions
                that meet the unique needs of our clients.
              </p>
              <p>
                We invest in state-of-the-art technology and infrastructure,
                continuously upgrading the skills of our expert team. Our
                diverse product range includes folding cartons, labels,
                leaflets, books, and promotional materials.
              </p>
              <p>
                At Pushti Pack, we leverage the expertise and experience of our
                team to engage in meaningful dialogue with our clients,
                ultimately enhancing the value of their products.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/30 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button> */}

              {/* <button className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-medium border-2 border-gray-900 overflow-hidden transition-all duration-300 hover:text-white">
                <span className="relative z-10">Get Custom Quote</span>
                <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button> */}
            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Core Capabilities
            </h3>

            <div className="space-y-5">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-gray-900 transition-colors duration-300">
                    <CheckCircle className="w-3.5 h-3.5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Delivering Excellence
              </h3>
              <p className="text-gray-400 text-lg">
                Numbers that speak for our commitment
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg mb-6">
            Ready to elevate your packaging and printing experience?
          </p>
          <Link to="/contact">
            <button className="group inline-flex items-center text-gray-900 font-semibold text-lg hover:gap-3 gap-2 transition-all duration-300">
              Let's work together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
