import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export function Products() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get('filter');

  const filteredProducts = filterType 
    ? products.filter(product => {
        switch (filterType) {
          case 'biostimulants':
            return product.shortDescription.toLowerCase().includes('nature biostimulants');
          case 'adjuvants':
            return product.shortDescription.toLowerCase().includes('nonionic spray adjuvants');
          case 'micronutrients':
            return product.shortDescription.toLowerCase().includes('micronutrients') || 
                   product.shortDescription.toLowerCase().includes('micronutrient mixture fertilizers');
          default:
            return true;
        }
      })
    : products;

  const currentProduct = filteredProducts[currentProductIndex] || products[0];

  // Auto-change product every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % filteredProducts.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [filteredProducts.length]);

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  return (
    <div 
      className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/uploads/product%20back%20(2).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-end mb-12">
          <Link
            to="/contact"
            className="border border-white/50 text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium"
          >
            Health Check
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[600px]">
          
          {/* Left Content - Dynamic Product Description */}
          <div className="lg:col-span-1">
            <motion.div
              key={`left-${currentProduct.id}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Product Category Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-white/80 text-sm font-medium capitalize">{currentProduct.category} Solution</span>
              </div>
              
              {/* Product Description */}
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {currentProduct.description || currentProduct.shortDescription}
              </p>
              
              {/* Product Name as Main Heading */}
              <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
                {currentProduct.name.split(' ').map((word, index) => (
                  <span key={index} className="block">
                    {index === currentProduct.name.split(' ').length - 1 ? (
                      <span className="font-normal">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h1>
              
              {/* Product Details */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Category</h4>
                  <p className="text-white font-medium capitalize">{currentProduct.category}</p>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Application</h4>
                  <p className="text-white font-medium">All Crops</p>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Availability</h4>
                  <p className={`font-medium ${currentProduct.inStock ? 'text-green-400' : 'text-red-400'}`}>
                    {currentProduct.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
                <div>
                  <h4 className="text-white/60 text-sm mb-1">Type</h4>
                  <p className="text-white font-medium">Premium Quality</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Link
                  to={`/products/${currentProduct.id}`}
                  className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm border border-white/20"
                >
                  <span>Learn More About {currentProduct.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Center - Product Showcase */}
          <div className="lg:col-span-1 flex justify-center">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Product Image Container */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-300/30 to-black/30 rounded-full blur-3xl"></div>
                
                {/* Product Image */}
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="relative z-10 w-80 h-80 object-contain drop-shadow-2xl"
                />
                
                {/* Reflection Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40 opacity-20">
                  <img
                    src={currentProduct.image}
                    alt=""
                    className="w-full h-full object-contain transform scale-y-[-1] blur-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white/80 text-lg">
                  Select from our team<br />
                  of highly skilled and<br />
                  experienced products
                </h3>
                <button
                  onClick={nextProduct}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="text-sm mr-2">Next</span>
                  <ChevronRight className="w-5 h-5 inline" />
                </button>
              </div>

              {/* Product Card */}
              <motion.div
                key={`card-${currentProduct.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{currentProduct.name}</h4>
                    <p className="text-white/60 text-sm capitalize">{currentProduct.category}</p>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {currentProduct.shortDescription}
                </p>
                
                <div className="flex items-center justify-end">
                  <Link
                    to={`/products/${currentProduct.id}`}
                    className="text-white/80 hover:text-white text-sm flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Product Navigation Dots */}
              <div className="flex items-center space-x-2 mb-8">
                {filteredProducts.slice(0, 5).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProductIndex ? 'bg-white w-6' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Browse All Button */}
              <Link
                to="#all-products"
                className="inline-flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('all-products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Browse All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* All Products Section - Changed from white to gradient */}
      <section id="all-products" className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent mb-4">All Products</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Explore our complete range of agricultural solutions</p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-green-200/50 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-600"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain bg-gradient-to-br from-green-50 to-emerald-50 group-hover:scale-105 transition-transform duration-300 p-4"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                    {product.shortDescription}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="w-full bg-orange-300 text-black text-center py-2 px-4 rounded-lg hover:bg-orange-400 transition-all duration-300 font-medium text-sm block shadow-md hover:shadow-lg"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}