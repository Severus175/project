import { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
}

export default function Navbar({ isDark }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: User, href: '#projects' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border border-gray-700/50' 
          : 'bg-black/60 backdrop-blur-sm border border-gray-600/30'
      } rounded-2xl px-6 py-3 shadow-2xl`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated background glow */}
      <div 
        className="absolute -inset-0.5 rounded-2xl opacity-60 blur-sm"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 6s ease infinite'
        }}
      />
      
      <div className="relative z-10">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group
                ${activeSection === item.id 
                  ? 'text-white bg-gradient-to-r from-blue-600/80 to-purple-600/80 shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <div className="relative z-10 flex items-center gap-2">
                <motion.div
                  animate={{ 
                    rotate: activeSection === item.id ? 360 : 0,
                    scale: activeSection === item.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-4 h-4" />
                </motion.div>
                <span>{item.label}</span>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </motion.button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center">
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`
                  relative p-2.5 rounded-lg transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-white bg-gradient-to-r from-blue-600/80 to-purple-600/80' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Active indicator for mobile */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
                    layoutId="activeMobileTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ 
                      rotate: activeSection === item.id ? 360 : 0,
                      scale: activeSection === item.id ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}