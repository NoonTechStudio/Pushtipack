import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Award,
  Users,
  Target,
  Eye,
  Heart,
  Shield,
  CheckCircle,
  Star,
  Quote,
  ArrowUpRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import FactoryImage from "../assets/Images/Outside.jpg";
import Owner1 from "../assets/Images/Mananbhai.jpeg";
import Owner2 from "../assets/Images/Owner2.png";

const About = () => {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "50k+", label: "Projects Done" },
    { number: "25+", label: "Expert Team" },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision",
      description:
        "Meticulous attention to detail ensures every project meets the highest quality standards.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description:
        "Driven by a love for print craftsmanship, we deliver exceptional results.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership",
      description:
        "Building lasting relationships through collaboration and understanding client needs.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Innovation",
      description:
        "Embracing cutting-edge technology to stay ahead in the printing industry.",
    },
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Eco Management",
      icon: <Shield className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "FDA Compliance",
      subtitle: "Safety Standards",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-orange-500 to-amber-400",
    },
  ];

  const team = [
    {
      name: "Manan Modi",
      role: "Managing Director",
      description:
        "With over 30 years in the industry, John leads with a vision for innovation and excellence.",
      image: Owner1,
    },
    {
      name: "Manan Modi",
      role: "Director",
      description: "Founder of Pushtipack with over 40 years of Experience.",
      image: Owner2,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gray-900 selection:text-white">
      <Header />

      {/* --- HERO SECTION (Preserved) --- */}
      <section className="relative bg-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 font-light leading-relaxed">
            Pioneering printing and packaging excellence since 1995. We don't
            just print; we create brand experiences that leave a lasting
            impression.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CINEMATIC JOURNEY SECTION (Full Width Image) --- */}
      <section className="pt-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
            <img
              src={FactoryImage}
              alt="Modern printing facility"
              className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-12 left-6 md:left-12 max-w-2xl">
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium mb-4 border border-white/30">
                Established 1995
              </span>
              {/* <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">A Legacy of Precision & Innovation</h2> */}
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start pb-24">
            <p className="text-2xl md:text-3xl text-gray-900 font-medium leading-tight">
              Pushti Pack has been redefining the standards of offset printing
              for nearly three decades.
            </p>
            <div className="space-y-6 text-lg text-gray-600 font-light">
              <p>
                From our humble beginnings, we have evolved into a
                technology-driven powerhouse, serving the most demanding
                industries including Pharmaceuticals, FMCG, and Luxury
                Cosmetics.
              </p>
              <p>
                Our philosophy is simple: combine artisanal craftsmanship with
                industrial-scale efficiency. Today, we are proud to be the
                trusted partner for global brands seeking sustainable and
                high-impact packaging solutions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-semibold text-gray-900 hover:gap-4 transition-all group pt-4"
              >
                Explore our capabilities <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODERN VALUES SECTION --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Core Principles
              </h2>
              <p className="text-gray-600 text-lg">
                The foundation of every project we undertake and every
                partnership we build.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-gray-900 transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS SECTION (Two Members) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Partners
            </h2>
            <p className="text-gray-500 text-lg">
              Leading with experience and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 font-semibold tracking-widest uppercase text-xs">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-lg font-light leading-relaxed pt-2">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS (Redesigned) --- */}
      <section className="py-24 bg-gray-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative group p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg`}
                >
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs mb-4">
                  {cert.subtitle}
                </p>
                <div className="h-1 w-12 bg-white/20 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (Modern Minimal) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Quote className="w-16 h-16 text-gray-100 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 max-w-4xl mx-auto leading-tight italic">
            "Their attention to detail and commitment to quality have made them
            our go-to partner for packaging. They don't just deliver boxes; they
            deliver <span className="font-bold underline">reliability</span>."
          </h2>
          <div className="mt-12">
            <div className="font-bold text-lg">Mr. Sameer</div>
            <div className="text-gray-500">Kivi Labs</div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">
              Ready to transform your brand?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
