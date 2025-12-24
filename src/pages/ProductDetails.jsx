import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Award, Star, ArrowLeft, Zap, Shield, Award as AwardIcon, Users, Package, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productData } from '../data/Data';

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const product = productData[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Zap },
    { id: 'specifications', name: 'Specifications', icon: Shield },
    { id: 'benefits', name: 'Benefits', icon: AwardIcon },
    { id: 'applications', name: 'Applications', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors duration-300">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-gray-900 transition-colors duration-300">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section (Product Detail) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-3xl shadow-xl overflow-hidden bg-gray-100 group border border-gray-200">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                  <Package className="w-4 h-4 inline mr-1" />
                  Premium Quality
                </div>
              </div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index 
                        ? 'ring-2 ring-gray-900 ring-offset-2 scale-105 shadow-md' 
                        : 'opacity-70 hover:opacity-100 hover:scale-[1.02]'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              
              {/* Header */}
              <div>
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-4 transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Products
                </Link>
                
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features Quick List */}
              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-gray-900 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="flex-1 group relative px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/30 hover:scale-105 flex items-center justify-center"
                >
                   <span className="relative z-10 flex items-center">
                        Request Quote
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>
                {/* <button className="flex-1 group relative border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:text-white">
                  <span className="relative z-10 flex items-center justify-center">
                    <FileText className="w-5 h-5 mr-2"/>
                    Download Specs
                  </span>
                  <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button> */}
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help? Contact Our Experts</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Phone:</strong> +91 9427611985</p>
                  <p><strong>Email:</strong> <a href="mailto:pushti_pack@yahoo.co.in" className="hover:text-gray-900 transition-colors duration-300">pushti_pack@yahoo.co.in</a></p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-3 p-1 bg-white rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    activeTab === tab.id
                      ? 'bg-gray-900 text-white shadow-md transform scale-105'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fadeIn p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4 border-gray-100">Product Overview</h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    {product.description} Our {product.name.toLowerCase()} are designed with precision and manufactured 
                    using state-of-the-art technology to meet the highest industry standards.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our {product.name}?</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                        Premium quality materials and robust construction
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                        Customizable to your specific requirements and branding
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                        Quick turnaround times and reliable delivery
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                        Highly competitive pricing without compromising on quality
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                        ISO certified manufacturing process
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                        Rigorous quality control at every stage of production
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                        100% satisfaction guarantee on all orders
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                        Expert technical support and consultation services
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div className="space-y-6 animate-fadeIn p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4 border-gray-100">Technical Specifications</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Detailed technical specifications for **{product.name}**
                  </p>
                </div>
                
                <div className="grid gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl shadow-sm border border-gray-100 p-5 hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-gray-900 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 font-medium">{spec}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4 border-gray-100">Key Benefits</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Discover the advantages of choosing our **{product.name}** for your business needs.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start">
                        <AwardIcon className="w-5 h-5 text-gray-900 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div className="space-y-8 animate-fadeIn p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4 border-gray-100">Applications & Use Cases</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Explore the various industries and applications where our **{product.name}** excel.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {product.applications.map((app, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-xl p-6 text-center hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {app}
                      </h3>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Applications</h3>
                  <p className="text-gray-700 mb-6">
                    Don't see your specific application listed? We specialize in custom solutions 
                    tailored to unique industry requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="group relative px-6 py-3 bg-gray-900 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/30 inline-flex items-center justify-center"
                  >
                    <span className="relative z-10">Discuss Custom Solution</span>
                    <div className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Matching Products.jsx CTA style */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Contact us today for a personalized quote for **{product.name.toLowerCase()}**. Our experts are ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Request Quote Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
            <a
              href="tel:+919427611985"
              className="group relative px-8 py-4 bg-transparent text-white rounded-full text-lg font-semibold border-2 border-white overflow-hidden transition-all duration-300 hover:text-gray-900 inline-flex items-center justify-center"
            >
              <span className="relative z-10">Call Now: +91 9427611985</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;