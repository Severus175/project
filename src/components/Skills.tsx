import { Code2, Database, Brain, Globe, Server, BarChart3 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skills = [
    // Frontend
    { name: "React", icon: "⚛️", category: "Frontend", color: "#61DAFB" },
    { name: "JavaScript", icon: "JS", category: "Frontend", color: "#F7DF1E" },
    { name: "TypeScript", icon: "TS", category: "Frontend", color: "#3178C6" },
    { name: "HTML5", icon: "🌐", category: "Frontend", color: "#E34F26" },
    { name: "CSS3", icon: "🎨", category: "Frontend", color: "#1572B6" },
    { name: "Tailwind", icon: "💨", category: "Frontend", color: "#06B6D4" },
    
    // Backend & APIs
    { name: "Node.js", icon: "📗", category: "Backend", color: "#339933" },
    { name: "Python", icon: "🐍", category: "Backend", color: "#3776AB" },
    { name: "REST API", icon: "🔗", category: "Backend", color: "#FF6B35" },
    { name: "Supabase", icon: "⚡", category: "Backend", color: "#3ECF8E" },
    
    // Database
    { name: "SQL", icon: "🗄️", category: "Database", color: "#336791" },
    { name: "PostgreSQL", icon: "🐘", category: "Database", color: "#336791" },
    
    // Data Science
    { name: "Pandas", icon: "🐼", category: "Data Science", color: "#150458" },
    { name: "NumPy", icon: "🔢", category: "Data Science", color: "#013243" },
    { name: "Scikit-learn", icon: "🤖", category: "Data Science", color: "#F7931E" },
    { name: "Matplotlib", icon: "📊", category: "Data Science", color: "#11557C" },
    
    // Analytics
    { name: "Power BI", icon: "📈", category: "Analytics", color: "#F2C811" },
    { name: "Excel", icon: "📋", category: "Analytics", color: "#217346" },
    
    // Tools
    { name: "Git", icon: "📝", category: "Tools", color: "#F05032" },
    { name: "Linux", icon: "🐧", category: "Tools", color: "#FCC624" },
    { name: "Jupyter", icon: "📓", category: "Tools", color: "#F37626" },
    { name: "VS Code", icon: "💻", category: "Tools", color: "#007ACC" },
  ];

  const categories = [
    { name: "Frontend", icon: Globe, count: skills.filter(s => s.category === "Frontend").length, color: "from-blue-500 to-cyan-500" },
    { name: "Backend", icon: Server, count: skills.filter(s => s.category === "Backend").length, color: "from-green-500 to-emerald-500" },
    { name: "Database", icon: Database, count: skills.filter(s => s.category === "Database").length, color: "from-purple-500 to-violet-500" },
    { name: "Data Science", icon: Brain, count: skills.filter(s => s.category === "Data Science").length, color: "from-orange-500 to-red-500" },
    { name: "Analytics", icon: BarChart3, count: skills.filter(s => s.category === "Analytics").length, color: "from-yellow-500 to-orange-500" },
    { name: "Tools", icon: Code2, count: skills.filter(s => s.category === "Tools").length, color: "from-gray-500 to-slate-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 text-gray-300 text-sm font-medium mb-6"
          >
            <Code2 className="w-4 h-4" />
            Technical Skills
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all duration-300 cursor-pointer"
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: skill.color }}
                />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  
                  {/* Skill name */}
                  <h3 className="text-white font-medium text-sm mb-1 group-hover:text-gray-100 transition-colors">
                    {skill.name}
                  </h3>
                  
                  {/* Category */}
                  <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Categories Summary */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-4 text-center hover:border-gray-700 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{category.name}</h3>
                <p className="text-gray-400 text-xs">{category.count} skills</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}