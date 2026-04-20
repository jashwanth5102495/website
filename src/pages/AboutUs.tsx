import { motion } from 'framer-motion';
import { Users, Target, Globe, Leaf, Heart, Droplets, Shield, Sprout, Zap, FlaskConical, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function AboutUs() {
  const { theme } = useTheme();
  
  const productPortfolio = [
    'Suspension Fertilizers',
    'Solution Fertilizers',
    'Foliar Liquid Fertilizers',
    'Bio-stimulants Organic Fertilizers',
    'Micronutrients'
  ];

  return (
    <div className={`min-h-screen pt-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-5819acf424d6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">SAKASH AGRO TECH PVT. LTD.</h1>
            <p className="text-xl md:text-3xl font-light opacity-90 italic">
              "Nurturing Growth, Cultivating Excellence"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            <span className="font-bold text-green-600">SAKASH AGRO TECH PVT. LTD.</span> is a dynamic and forward-thinking company 
            specializing in unique foliar solutions for modern agriculture. Driven by a deep 
            passion for farming and a strong commitment to environmental stewardship, 
            we are dedicated to redefining the way farmers nourish and protect their crops.
          </motion.p>
        </div>
      </section>

      {/* About Us Detail Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-green-50'}`}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              About Us
            </h2>
            <div className={`space-y-6 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Founded in Bengaluru, <span className="font-semibold">SAKASH AGRO TECH PVT. LTD.</span>, with its product brand 
                <span className="font-semibold text-green-600"> Nutrizenix – Innovation That Grows</span>, has emerged as a beacon of innovation and 
                technical excellence in the agricultural landscape.
              </p>
              <p>
                Established with a vision to revolutionize sustainable agriculture, the company embarked on a journey driven 
                by continuous research, development, and progressive growth.
              </p>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <video 
              src="/uploads/n.mp4" 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </div>
      </section>

      {/* Product Portfolio Section */}
      <section className={`py-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Our Product Portfolio
            </h2>
            <p className={`text-lg max-w-3xl mx-auto mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              At SAKASH AGRO TECH PVT. LTD., we specialize in the development, manufacturing, 
              and marketing of a comprehensive range of agricultural solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productPortfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 hover:border-green-500' 
                    : 'bg-white border-green-100 shadow-lg hover:border-green-400'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {item}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`text-center max-w-4xl mx-auto p-8 rounded-2xl ${
              theme === 'dark' ? 'bg-green-900/20 border border-green-800' : 'bg-green-50 border border-green-100'
            }`}
          >
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Each product is thoughtfully designed to enhance crop nutrition, improve yield quality, 
              and promote sustainable farming practices. By combining advanced technology with 
              deep agronomic knowledge, we empower farmers to achieve healthier crops and better 
              productivity while caring for the environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Commitment Section */}
      <section className="py-20 bg-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              SAKASH AGRO TECH PVT. LTD. continues to stand committed to innovation, quality, 
              and farmer success, nurturing growth at every stage of agriculture.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}