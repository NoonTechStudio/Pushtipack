import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Package, Award, Filter, Grid, List, Layers } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productCategories, categories } from '../data/Data'; // This correctly imports the data

const Products = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Hash link scrolling from Header
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.substring(1); // Remove the '#'
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100; // Adjust based on header height
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  const filteredProducts = selectedCategory === 'all'
    ? productCategories
    : productCategories.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <div className="mb-8">
            <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
              <Package className="w-4 h-4 mr-2" />
              Premium Printing & Packaging
            </div>
          </div> */}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Our Products
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
            Discover our comprehensive range of printing and packaging solutions, crafted with precision and designed for excellence
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Request Custom Quote
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
            <button className="group relative px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white overflow-hidden transition-all duration-300 hover:text-gray-900">
              <span className="relative z-10">Download Catalog</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div> */}
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-30 backdrop-blur-lg bg-white/95">
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
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex items-center ${
                      selectedCategory === category.id
                        ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    <Layers className="w-4 h-4 mr-2" />
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
                    viewMode === 'grid' ? 'bg-white shadow-sm ring-1 ring-gray-200' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid className="w-4 h-4 text-gray-900" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-white shadow-sm ring-1 ring-gray-200' : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="w-4 h-4 text-gray-900" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-20">
            {filteredProducts.map((product, index) => (
              <div
                id={product.id} // This uses the product ID (e.g., 'folding-cartons') for the anchor
                key={product.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Cube Grid */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700 hover:shadow-3xl border border-gray-200">
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
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            <div className="absolute top-3 right-3 w-8 h-8 bg-gray-900/90 rounded-full flex items-center justify-center text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                              {imgIndex + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`absolute -z-10 top-8 ${index % 2 === 0 ? 'left-8' : 'right-8'} w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl opacity-20`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-8">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
                      <Award className="w-4 h-4 mr-2" />
                      {/* Displays the category name from Data.js (e.g., 'packaging', 'labels') */}
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)} 
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      {/* Displays the product name from Data.js (e.g., 'Folding Cartons') */}
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
                          <div className="w-3 h-3 bg-gray-900 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
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
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105"
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
                      className="flex-1 group relative bg-gray-900 text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/30 hover:scale-105 flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Quote
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Link>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 group relative border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:text-white flex items-center justify-center"
                    >
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Get a personalized quote for your printing and packaging needs. Our experts are ready to help you create something extraordinary.
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
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-transparent text-white rounded-full text-lg font-semibold border-2 border-white overflow-hidden transition-all duration-300 hover:text-gray-900 inline-flex items-center justify-center"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;