import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Hash, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section (Matches Products.jsx Theme) */}
      <section className="relative bg-gray-900 py-24 overflow-hidden">
        {/* Subtle Pattern (Matches Products.jsx) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Minimal Accent Elements (Matches Products.jsx) */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

          {/* Badge/Pill (Matches Products.jsx Style) */}
          {/* <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            <Mail className="w-4 h-4 mr-2" />
            Connect With Experts
          </div> */}

          {/* Title (Matches Products.jsx Style) */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Get In Touch
          </h1>

          {/* Divider (Matches Products.jsx Style) */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
            We are ready to discuss your project, provide technical support, or answer any questions you have about our products and machines.
          </p>

          {/* CTA Buttons (Matches Products.jsx Two-Button Style) */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Start Project Inquiry
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            <a
              href="tel:+919427611985"
              className="group relative px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white overflow-hidden transition-all duration-300 hover:text-gray-900 inline-flex items-center justify-center"
            >
              <span className="relative z-10">Call Us Directly</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div> */}
        </div>
      </section>

      {/* Contact Information & Form Section (Matches Products.jsx Main Section Theme) */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" id="contact-form">
        {/* Subtle Grid Background (Matches Products.jsx) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Direct Contact Information</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Reach out to us directly through phone or email. Our team is dedicated to providing swift and effective communication.
              </p>

              <div className="space-y-6">
                {/* Contact Block 1 - Phone */}
                <div className="flex items-start group p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gray-900 p-3 rounded-xl mr-6 group-hover:bg-gray-800 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Phone Support</h3>
                    <p className="text-gray-600 font-semibold">+91 9427611985</p>
                    <p className="text-sm text-gray-500 mt-1 flex items-center"><Clock className="w-4 h-4 mr-1" /> Mon-Sat 9:00 AM - 6:00 PM (IST)</p>
                  </div>
                </div>

                {/* Contact Block 2 - Email */}
                <div className="flex items-start group p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gray-900 p-3 rounded-xl mr-6 group-hover:bg-gray-800 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600 font-semibold">info@pushtipack.com</p>
                    <p className="text-gray-600 font-semibold">pushti_pack@yahoo.co.in</p>
                    
                    <p className="text-sm text-gray-500 mt-1 flex items-center"><Hash className="w-4 h-4 mr-1" /> Guaranteed response within 24 hours</p>
                  </div>
                </div>

                {/* Contact Block 3 - Location */}
                <div className="flex items-start group p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gray-900 p-3 rounded-xl mr-6 group-hover:bg-gray-800 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600 font-semibold">Vadodara, Gujarat, India</p>
                    <p className="text-sm text-gray-500 mt-1">Global reach with local expertise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 transform translate-y-[-2rem] lg:translate-y-0"> {/* Slight lift for visual emphasis */}
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-300"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-300 bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="folding-cartons">Folding Cartons</option>
                    <option value="paper-labels">Paper Labels</option>
                    <option value="leaflets-brochures">Leaflets & Brochures</option>
                    <option value="books-catalogs">Books & Catalogs</option>
                    <option value="calendars">Calendars</option>
                    <option value="custom-packaging">Custom Packaging</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-300"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit Button (Matches Products.jsx Primary Button Style) */}
                <button
                  type="submit"
                  className="w-full group relative bg-gray-900 text-white py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/30 hover:scale-[1.01] flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Send Message
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Matches Products.jsx Theme) */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Subtle Pattern (Matches Products.jsx) */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Get a personalized quote for your printing and packaging needs. Our experts are ready to help you create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Request Quote Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            {/* <a
              href="tel:+919427611985"
              className="group relative px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white overflow-hidden transition-all duration-300 hover:text-gray-900 inline-flex items-center justify-center"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;