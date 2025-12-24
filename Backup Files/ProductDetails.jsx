import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Award, Star, ArrowLeft, Zap, Shield, Award as AwardIcon, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productData } from '../data/data';

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
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
            <Link to="/" className="hover:text-green-600 transition-colors duration-300">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-green-600 transition-colors duration-300">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 group">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <Star className="w-4 h-4 inline mr-1" />
                  Premium
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
                        ? 'ring-2 ring-green-500 ring-offset-2 scale-105' 
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
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
                  className="inline-flex items-center text-green-600 hover:text-green-700 mb-4 transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Products
                </Link>
                
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
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
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-sm font-medium group-hover:text-green-600 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                >
                  Request Quote
                </Link>
                <button className="flex-1 border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                  Download Specs
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help? Contact Our Experts</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Phone:</strong> +91 9427611985</p>
                  <p><strong>Email:</strong> pushti_pack@yahoo.co.in</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-green-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
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
              <div className="space-y-8 animate-fadeIn">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    {product.description} Our {product.name.toLowerCase()} are designed with precision and manufactured 
                    using state-of-the-art technology to meet the highest industry standards.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our {product.name}?</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Premium quality materials and construction
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Customizable to your specific requirements
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Quick turnaround times
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Competitive pricing
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        ISO certified manufacturing process
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Rigorous quality control at every stage
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        100% satisfaction guarantee
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Expert technical support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Detailed technical specifications for {product.name.toLowerCase()}
                  </p>
                </div>
                
                <div className="grid gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-gray-700 font-medium">{spec}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Discover the advantages of choosing our {product.name.toLowerCase()}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-green-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-4 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <div>
                          <p className="text-gray-700 font-medium group-hover:text-green-700 transition-colors duration-300">{benefit}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications & Use Cases</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Explore the various industries and applications where our {product.name.toLowerCase()} excel
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {product.applications.map((app, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:from-green-50 hover:to-green-100 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                        {app}
                      </h3>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Applications</h3>
                  <p className="text-gray-700 mb-6">
                    Don't see your specific application listed? We specialize in custom solutions 
                    tailored to unique industry requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Discuss Custom Solution
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact us today for a personalized quote for {product.name.toLowerCase()}. Our experts are ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Custom Quote
            </Link>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
              Call Now: +91 9427611985
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;