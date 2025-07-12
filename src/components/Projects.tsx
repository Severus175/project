import { Code, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

interface ProjectsProps {
  isDark: boolean;
}

const projects = [
  {
    title: "TaskIQ – Smart Task Management",
    description: "Full-stack task manager with JWT auth, real-time email alerts, and responsive UI using Flask, React.js, and Supabase.",
    href: "https://github.com/Scriptzstarling/TaskIQ", 
    tech: ["React.js", "Tailwind CSS", "Flask", "Supabase", "SendGrid"],
    image: "TaskIQ.webp"
  },
  {
    title: "JobHive",
    description: "Simple frontend job board interface built using HTML, CSS, and JavaScript with modern design patterns.",
    href: "https://github.com/Scriptzstarling/JobHive",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "JobHive.webp"
  },
  {
    title: "Spectra News",
    description: "News fetching website using HTML, CSS, JavaScript and News API integration with real-time updates.",
    href: "https://github.com/Scriptzstarling/Spectra-News",
    tech: ["HTML", "CSS", "JavaScript", "NEWS API"],
    image: "SpectraNews.webp"
  },
  {
    title: "AutoSpectra",
    description: "Frontend-only ML concept UI built using basic HTML, CSS, and JavaScript with interactive elements.",
    href: "https://github.com/Scriptzstarling/AutoSpectra",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "AutoSpectra.webp"
  },
  {
    title: "Cheesy Delight",
    description: "Full-stack food delivery web app for a pizza brand with order management and user authentication.",
    href: "https://github.com/Scriptzstarling/CheesyDelight",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "CheesyDelight.webp"
  },
  {
    title: "City Dine Recommendation",
    description: "Data-driven restaurant recommender based on user location using machine learning algorithms.",
    href: "https://github.com/Scriptzstarling/City-Dine-Recommendation",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Numpy", "Scikit-learn", "Matplotlib"],
    image: "CityDine.webp"
  },
  {
    title: "Uber Analysis Dashboard",
    description: "Interactive Power BI dashboard for Uber ride data with comprehensive analytics and insights.",
    href: "https://github.com/Scriptzstarling/Uber-Analysis-Dashboard",
    tech: ["Power BI", "SQL"],
    image: "UberRide.webp"
  },
  {
    title: "Telecom Churned Analysis",
    description: "EDA and predictive modeling for telecom churn with advanced statistical analysis.",
    href: "https://github.com/Scriptzstarling/Telecom_Churned_Analysis",
    tech: ["Python", "Numpy", "Pandas", "Seaborn", "Matplotlib"],
    image: "TelecomChurn.webp"
  },
  {
   title: "Amazon Sales Analysis",
   description: "End-to-end Power BI dashboard to analyze Amazon product sales and reviews with interactive visualizations.",
   href: "https://github.com/Scriptzstarling/Amazon-Sales-Analysis-PowerBI",
   tech: ["Power BI", "Excel"],
   image: "AmazonSales.webp"
  },
  {
   title: "Netflix Shows Analysis",
   description: "Interactive Power BI dashboard with filters and insights from Netflix dataset for content analysis.",
   href: "https://github.com/Scriptzstarling/Netflix-Shows-Analysis",
   tech: ["Power BI", "Excel"],
   image: "Netflix.webp"
  },
  {
   title: "HR Analytics Dashboard",
   description: "Interactive Power BI dashboard to analyze employee attrition based on role, age, education, and job satisfaction.",
   href: "https://github.com/Scriptzstarling/HR-Analytics-Dashboard",
   tech: ["Power BI", "CSV"],
   image: "HR.webp" 
  },
  {
  title: "Multi-Topic Quiz App",
  description: "ReactJS-based quiz platform with topic selection, real-time scoring, JSON backend, and optional timer and progress features.",
  href: "https://github.com/Scriptzstarling/Internship_Code_Bucket_Pvt_Ltd",
  tech: ["ReactJS", "Tailwind CSS", "JSON", "Framer Motion"],
  image: "quizapp.webp" 
},

];

export default function Projects({ isDark }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      {/* Space background decorations */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 backdrop-blur-sm">
            <Code className="w-3 h-3" />
            Portfolio Showcase
            <Sparkles className="w-3 h-3" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <p className="text-sm max-w-3xl mx-auto leading-relaxed text-gray-300">
            Innovative solutions showcasing expertise across 
            <span className="text-blue-400 font-medium"> web development</span>, 
            <span className="text-purple-400 font-medium"> data science</span>, and 
            <span className="text-pink-400 font-medium"> analytics</span>
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <motion.a 
            href="https://github.com/Scriptzstarling" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm border border-blue-500/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-4 h-4" />
            <span className="text-sm">View All Projects</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}