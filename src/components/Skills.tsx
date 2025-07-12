import { Code, Database, Brain, Smartphone, Server, BarChart3, Zap, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skills = [
    {
      name: "Python",
      icon: "🐍",
      color: "from-yellow-500 to-blue-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      name: "JavaScript",
      icon: "⚡",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20"
    },
    {
      name: "React.js",
      icon: "⚛️",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20"
    },
    {
      name: "HTML5",
      icon: "🌐",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      name: "CSS",
      icon: "🎨",
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      name: "SQL",
      icon: "🗄️",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20"
    },
    {
      name: "Power BI",
      icon: "📊",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      name: "Pandas",
      icon: "🐼",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      name: "NumPy",
      icon: "🔢",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      name: "Scikit-learn",
      icon: "🤖",
      color: "from-green-500 to-blue-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      name: "Matplotlib",
      icon: "📈",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      name: "Supabase",
      icon: "⚡",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      name: "REST APIs",
      icon: "🔗",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    },
    {
      name: "JWT",
      icon: "🔐",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-600/10",
      borderColor: "border-gray-600/20"
    },
    {
      name: "Bootstrap",
      icon: "🅱️",
      color: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-600/10",
      borderColor: "border-purple-600/20"
    },
    {
      name: "Linux",
      icon: "🐧",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      name: "Git",
      icon: "📝",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      name: "Jupyter",
      icon: "📓",
      color: "from-orange-400 to-yellow-500",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20"
    },
    {
      name: "Agile",
      icon: "🔄",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      name: "VMware",
      icon: "💻",
      color: "from-gray-500 to-blue-600",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/20"
    },
    {
      name: "Shell Scripting",
      icon: "⌨️",
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-600/10",
      borderColor: "border-green-600/20"
    }
  ];

  return (
    <section id="skills" className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Space background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-300 backdrop-blur-sm">
            <Zap className="w-3 h-3" />
            Technical Arsenal
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <p className="text-sm max-w-2xl mx-auto leading-relaxed text-gray-300">
            Advanced toolkit for building cutting-edge applications and intelligent solutions
          </p>
        </AnimatedSection>
        
        {/* Skills Grid - Similar to the reference image */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`
                  group relative flex items-center gap-3 p-3 rounded-lg transition-all duration-300 
                  bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 
                  hover:bg-gray-800/80 hover:border-gray-600/50 hover:shadow-lg hover:shadow-cyan-500/10
                  ${skill.bgColor} ${skill.borderColor}
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Animated border effect on hover */}
                <div 
                  className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]}, ${skill.color.split(' ')[1]})`,
                    backgroundSize: '300% 300%',
                    animation: 'gradient-shift 2s ease infinite'
                  }}
                />
                
                <div className="relative z-10 flex items-center gap-2 w-full">
                  {/* Icon */}
                  <motion.div 
                    className="text-lg flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  {/* Skill name */}
                  <span className="text-xs font-medium text-white group-hover:text-cyan-400 transition-colors duration-300 truncate">
                    {skill.name}
                  </span>
                </div>
                
                {/* Hover glow effect */}
                <div 
                  className={`
                    absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 blur-xl 
                    transition-opacity duration-300 -z-10 bg-gradient-to-r ${skill.color}
                  `}
                />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom section with categories */}
        <AnimatedSection className="mt-12" delay={0.3}>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                title: "Frontend",
                icon: <Globe className="w-5 h-5" />,
                count: "9",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Backend & APIs",
                icon: <Server className="w-5 h-5" />,
                count: "4",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Data Science",
                icon: <BarChart3 className="w-5 h-5" />,
                count: "6",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Tools & DevOps",
                icon: <Code className="w-5 h-5" />,
                count: "5",
                color: "from-orange-500 to-red-500"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mx-auto mb-2`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{category.title}</h3>
                <p className="text-xs text-gray-400">{category.count} Technologies</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}