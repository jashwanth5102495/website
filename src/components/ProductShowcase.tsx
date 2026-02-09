import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export function ProductShowcase() {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const cardWidth = 300; // Width of each card including margin

  // Manual scroll functions
  const scrollLeft = () => {
    setTranslateX(prev => prev + cardWidth);
  };

  const scrollRight = () => {
    setTranslateX(prev => prev - cardWidth);
  };

  // Handle drag end for manual scrolling
  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      scrollLeft();
    } else if (info.offset.x < -threshold) {
      scrollRight();
    }
  };

  // Auto-scroll functionality - faster and smoother
  useEffect(() => {
    if (!isHovered && !isDragging) {
      intervalRef.current = setInterval(() => {
        setTranslateX(prev => {
          // Move faster - 2 pixels per frame
          let newTranslateX = prev - 2;
          
          // Reset position when we've scrolled through one full cycle
          if (Math.abs(newTranslateX) >= cardWidth * products.length) {
            return 0;
          }
          return newTranslateX;
        });
      }, 16); // 60fps for smooth animation
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, isDragging]);

  // Create extended array for seamless loop
  const extendedProducts = [...products, ...products, ...products];

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-black dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of agricultural solutions designed to boost your crop yields
          </p>
        </motion.div>

        <div className="relative">
          {/* Manual scroll buttons */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-green-600 dark:text-green-400" />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-green-600 dark:text-green-400" />
          </motion.button>

          <div 
            className="relative h-96 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Rolling container */}
            <motion.div 
              className="flex items-center h-full"
              style={{ 
                width: `${extendedProducts.length * cardWidth}px`,
                transform: `translateX(${translateX}px)`
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.98 }}
              transition={{ 
                duration: 0.1,
                ease: "linear"
              }}
            >
              {extendedProducts.map((product, index) => {
                // Calculate center position for scaling effect
                // The visible container center is at half the viewport width
                const viewportCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 400;
                
                // Calculate the actual position of this card's center
                const cardLeftEdge = (index * cardWidth) + translateX;
                const cardCenter = cardLeftEdge + (cardWidth / 2);
                
                // Distance from the viewport center
                const distanceFromCenter = Math.abs(viewportCenter - cardCenter);
                const maxDistance = cardWidth * 1.5;
                
                // Calculate opacity and scale based on distance from center
                const isNearCenter = distanceFromCenter < maxDistance;
                const opacity = isNearCenter ? Math.max(0.5, 1 - (distanceFromCenter / maxDistance)) : 0.3;
                const scale = isNearCenter ? Math.max(0.8, 1.2 - (distanceFromCenter / maxDistance) * 0.4) : 0.7;
                
                // More precise center detection - card is considered center when it's within 150px of viewport center
                const isCenter = distanceFromCenter < 150;

                return (
                  <motion.div
                    key={`${product.id}-${index}`}
                    className="flex-shrink-0 px-2"
                    style={{ 
                      width: `${cardWidth}px`,
                      opacity,
                      scale,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link 
                      to={`/products/${product.id}`}
                      className={`
                        block relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto group cursor-pointer
                        ${isCenter ? 'ring-4 ring-green-500/50 dark:ring-green-400/50' : ''}
                        transition-all duration-500 hover:shadow-3xl hover:scale-105
                      `}
                      style={{ 
                        backgroundColor: isCenter 
                          ? 'rgba(255, 255, 255, 0.95)' 
                          : 'rgba(255, 255, 255, 0.5)',
                      }}

                    >


                      {/* Product Image */}
                      <div className="h-3/4 p-4 flex items-center justify-center bg-white/90 dark:bg-black/90 group-hover:bg-green-50/90 dark:group-hover:bg-green-900/20 transition-colors duration-300">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/200x200/10b981/ffffff?text=Product';
                          }}
                        />
                      </div>
                      
                      {/* Product Name */}
                      <div className="h-1/4 p-4 flex items-center justify-center bg-gradient-to-t from-green-600/90 to-emerald-600/90 dark:from-green-700/90 dark:to-emerald-700/90 relative group-hover:from-green-700/90 group-hover:to-emerald-700/90 transition-all duration-300">
                        <div className="text-center">
                          <h3 className="text-white font-bold text-lg">
                            {product.name}
                          </h3>
                          <motion.p 
                            className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                          >
                            Click to view details
                          </motion.p>
                        </div>
                        

                      </div>

                      {/* Glow effect for center card */}
                      {isCenter && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                            background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))',
                            filter: 'blur(20px)',
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Gradient overlays for smooth edges */}
            <motion.div 
              className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-green-50 to-transparent dark:from-black dark:to-transparent pointer-events-none z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-green-50 to-transparent dark:from-black dark:to-transparent pointer-events-none z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isHovered ? 'Hover to pause auto-scroll' : `Scrolling through all ${products.length} products • Use arrows to navigate manually`}
          </p>
        </div>
      </div>
    </div>
  );
}