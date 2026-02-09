import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf, Droplets, Shield, Sprout, Zap, FlaskConical, Target, Users, TrendingUp } from 'lucide-react';
import { ProductShowcase } from '../components/ProductShowcase';
import { useTheme } from '../contexts/ThemeContext';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';
import '../assets/background.css';

export function Homepage() {
  const [showLightLogo, setShowLightLogo] = useState(false);
  const { theme } = useTheme();

  const offerings = [
    {
      icon: FlaskConical,
      title: 'INNOVATION AT THE CORE',
      description: 'Innovation is the heartbeat of SAKASH AGRO TECH PVT. LTD. Our team of agronomists, chemists, and experts collaborate tirelessly to craft state-of-the-art crop nutrition solutions. Through cutting-edge research and technology, we formulate products that amplify plant health, elevate yields, and promote sustainable farming practices.'
    },
    {
      icon: Target,
      title: 'PRECISION AND PERFORMANCE',
      description: 'Our commitment to precision extends to every aspect of our offerings. We understand that each plant\'s needs are unique, and that\'s why our solutions are meticulously tailored to optimize growth at every stage. Whether it\'s enhancing nutrient uptake or unlocking the potential of plant through unique foliar solutions, our products deliver remarkable results.'
    },
    {
      icon: Leaf,
      title: 'CULTIVATING SUSTAINABILITY',
      description: 'SAKASH AGRO TECH PVT. LTD. is more than a manufacturer; we are stewards of the environment. Our focus on sustainability guides our every decision. By developing biostimulants, organic fertilizers, and micronutrients that nourish plants while minimizing ecological impact, we contribute to a healthier planet and a more resilient ecosystem.'
    },
    {
      icon: Users,
      title: 'EMPOWERING GROWERS',
      description: 'We believe that knowledge is the key to progress. Our team is dedicated to empowering farmers with the information they need to make informed choices. Through personalized guidance and expert support, we ensure that every grower reaps the maximum benefits from our solutions.'
    },
    {
      icon: TrendingUp,
      title: 'CULTIVATING EXCELLENCE, GROWING FUTURE',
      description: 'SAKASH AGRO TECH PVT. LTD. is a symbol of dedication, innovation, and progress. As we continue to push the boundaries of agricultural science, we envision a future where sustainable farming practices yield bountiful harvests, thriving ecosystems, and prosperous communities.'
    }
  ];

  // Split offerings into columns for the testimonials layout
  const firstColumn = offerings.slice(0, 2).map(o => ({
    text: o.description,
    name: o.title,
    icon: o.icon
  }));
  
  const secondColumn = offerings.slice(2, 4).map(o => ({
    text: o.description,
    name: o.title,
    icon: o.icon
  }));
  
  const thirdColumn = offerings.slice(4, 5).map(o => ({
    text: o.description,
    name: o.title,
    icon: o.icon
  }));

  // Duplicate the last item to balance the third column if needed, or just leave it
  if (thirdColumn.length > 0) {
     thirdColumn.push(firstColumn[0]); // Add one more to make it scroll nicely
  }



  return (
    <div className="min-h-screen dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-end pb-24 px-6 md:px-12">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/uploads/background.png')`
          }}
        >
            {/* Black Shade Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          
          {/* Left Side: Headline */}
          <div className="flex flex-col items-start">
            <div className="mb-8">
            <motion.img 
              src="/uploads/white.png" 
              alt="Nutrizenix Logo" 
              className="w-64 h-auto object-contain"
              animate={{ rotateY: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                ease: "easeInOut",
                repeatDelay: 1 
              }}
            />
          </div>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tight"
            >
              Smart Solutions<br />
              for a Stronger<br />
              Agriculture
            </motion.h1>
          </div>

          {/* Right Side: Description & Button */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start lg:max-w-xl lg:ml-auto"
          >
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Discover how cutting-edge technology, real-time insights, and precision tools are transforming traditional farming into a more productive, sustainable, and resilient industry.
            </p>
            
            <Link
              to="/products"
              className="flex items-center space-x-2 bg-orange-300 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 transition-colors"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* What Do We Offer? Section */}
      <section className="bg-background my-20 relative">
        <div className="w-full z-10 mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
            viewport={{ once: true }} 
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10" 
          > 
            <div className="flex justify-center"> 
              <div className="border border-green-200 dark:border-green-800 py-1 px-4 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium">Our Values</div> 
            </div> 
  
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-5 text-center text-gray-900 dark:text-white"> 
              What Do We Offer?
            </h2> 
            <p className="text-center mt-5 opacity-75 text-lg text-gray-600 dark:text-gray-300"> 
              Discover how our innovative solutions are transforming agriculture through precision, sustainability, and empowerment.
            </p> 
          </motion.div> 

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden"> 
            <TestimonialsColumn testimonials={firstColumn} className="flex-1" duration={15} /> 
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block flex-1" duration={19} /> 
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block flex-1" duration={17} /> 
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <ProductShowcase />




    </div>
  );
}