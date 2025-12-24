import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Package, Award, Star, Filter, Grid, List } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productCategories, categories } from '../data/data';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filteredProducts = selectedCategory === 'all' 
    ? productCategories 
    : productCategories.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-green-900/30"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm font-medium mb-6">
              <Package className="w-4 h-4 mr-2" />
              Premium Quality Products
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Products
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover our comprehensive range of printing and packaging solutions, crafted with precision and designed for excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block text-center"
            >
              Request Custom Quote
            </Link>
            <button className="px-8 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-xl font-semibold transition-all duration-300">
              Download Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">View:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Cube Grid */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    {/* Main container with perspective */}
                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-700 hover:shadow-3xl">
                      {/* 2x2 Grid of Images */}
                      <div className="grid grid-cols-2 gap-1 p-4">
                        {product.images.map((image, imgIndex) => (
                          <div 
                            key={imgIndex}
                            className="relative aspect-square rounded-2xl overflow-hidden group"
                          >
                            <img
                              src={image}
                              alt={`${product.name} ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                            />
                            {/* Overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            {/* Image number indicator */}
                            <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              {imgIndex + 1}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                        <Star className="w-4 h-4 inline mr-1" />
                        Premium
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl opacity-20"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-8">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                      <Award className="w-4 h-4 mr-2" />
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      {product.name}
                    </h2>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {product.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center group">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:from-green-100 hover:to-green-200 hover:text-green-700 transition-all duration-300 transform hover:scale-105"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                    >
                      Get Quote
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get a personalized quote for your printing and packaging needs. Our experts are ready to help you create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
            >
              Request Quote Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;