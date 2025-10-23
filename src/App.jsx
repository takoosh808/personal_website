import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaSeedling, FaTrophy, FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 transition-shadow ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
            TT
          </div>
          <ul className="flex gap-8">
            {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-800 font-medium hover:text-indigo-500 transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                Hi, I'm Travis Takushi
              </h1>
              <p className="text-xl text-slate-400 mb-4">
                Full Stack Developer | Computer Science Student @ WSU
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Building scalable web applications and solving real-world problems with code
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-white hover:bg-white hover:text-slate-900 rounded-lg font-semibold transition-all"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-2xl font-mono text-sm">
                <div className="text-slate-300"><span className="text-purple-400">const</span> developer = {'{'}</div>
                <div className="text-slate-300 ml-4">name: <span className="text-green-400">"Travis Takushi"</span>,</div>
                <div className="text-slate-300 ml-4">location: <span className="text-green-400">"Pullman, WA"</span>,</div>
                <div className="text-slate-300 ml-4">education: <span className="text-green-400">"WSU CS"</span>,</div>
                <div className="text-slate-300 ml-4">skills: [</div>
                <div className="text-slate-300 ml-8"><span className="text-green-400">"React"</span>,</div>
                <div className="text-slate-300 ml-8"><span className="text-green-400">"Django"</span>,</div>
                <div className="text-slate-300 ml-8"><span className="text-green-400">"PostgreSQL"</span>,</div>
                <div className="text-slate-300 ml-8"><span className="text-green-400">"PyTorch"</span></div>
                <div className="text-slate-300 ml-4">],</div>
                <div className="text-slate-300 ml-4">passion: <span className="text-green-400">"Building"</span></div>
                <div className="text-slate-300">{'}'};
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                I'm a Computer Science student at Washington State University with a passion for building innovative solutions that make a difference. My journey in tech has led me to work on diverse projects ranging from full-stack web applications to computer vision models for agricultural applications.
              </p>
              <p>
                I specialize in creating seamless user experiences with modern web technologies while also exploring the potential of machine learning and AI. Whether it's designing intuitive interfaces or optimizing backend systems, I'm always eager to tackle new challenges.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or working on side projects that solve real-world problems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '2026', label: 'Expected Graduation' },
                { number: '10+', label: 'Technologies' },
                { number: '3+', label: 'Major Projects' },
                { number: '100%', label: 'Commitment' }
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-indigo-500">{stat.number}</div>
                  <div className="text-slate-600 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCalendarAlt />,
                title: 'Class Scheduler',
                description: 'A comprehensive full-stack web application that simulates a college system, allowing users to input and create class schedules with an intuitive interface for choosing classes.',
                tech: ['Django', 'React', 'PostgreSQL', 'REST API'],
                link: 'https://github.com/takoosh808/Class_Scheduler'
              },
              {
                icon: <FaSeedling />,
                title: 'Computer Vision for Plant Waste',
                description: 'Built a custom PyTorch model to identify and quantify plant waste coverage on farmland, helping farmers assess soil quality and retention for future crop cycles.',
                tech: ['PyTorch', 'Python', 'Computer Vision', 'Machine Learning'],
                link: 'https://github.com/takoosh808'
              },
              {
                icon: <FaTrophy />,
                title: 'AgAthon Project - Biomass Detection',
                description: "Collaborated with a team of 4 at AgAid WSU's hackathon to develop a computer vision model that distinguishes between helpful biomasses and unusable soil, contributing to sustainable agriculture.",
                tech: ['PyTorch', 'Python', 'Team Collaboration', 'Hackathon'],
                link: 'https://github.com/takoosh808/AgAthon'
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all hover:shadow-indigo-200">
                <div className="bg-gradient-to-br from-indigo-500 to-sky-500 p-8 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-500 font-semibold hover:text-indigo-600">
                    View Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technical <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Frontend Development',
                skills: ['React', 'HTML/CSS', 'JavaScript', 'Responsive Design']
              },
              {
                title: 'Backend Development',
                skills: ['Django', 'Node.js', 'REST APIs', 'PostgreSQL']
              },
              {
                title: 'Programming Languages',
                skills: ['Python', 'JavaScript', 'C/C++/C#', 'Haskell', 'Dart']
              },
              {
                title: 'Tools & Technologies',
                skills: ['Git & GitHub', 'Docker', 'PyTorch', 'SQL Databases']
              }
            ].map((category) => (
              <div key={category.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-500 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-slate-600">
                      <span className="text-indigo-500 font-bold">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Experience & <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="space-y-12 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-500"></div>
            {[
              {
                date: 'April 2025 - Present',
                title: 'Building Manager',
                company: 'Washington State University - Compton Union Building',
                points: [
                  'Monitor cleanliness and appearance of common areas within the facility',
                  'Oversee daily operations to ensure smooth functioning of all activities',
                  'Implement building policies and procedures to enhance operational efficiency'
                ]
              },
              {
                date: 'January - February 2025',
                title: 'AgAthon Participant',
                company: 'AgAid WSU',
                points: [
                  'Collaborated with a team of 4 developers on an agricultural AI project',
                  'Developed computer vision model using PyTorch framework',
                  'Created solution to distinguish helpful biomasses from unusable soil'
                ]
              },
              {
                date: '2022 - December 2026',
                title: 'B.S. in Computer Science',
                company: 'Washington State University',
                points: [
                  'Relevant Coursework: Big Data, Design and Analysis of Algorithms, Data Mining',
                  'Additional Courses: Object Oriented Programming, Systems Programming',
                  'Specialized Studies: Cyber Security & Cryptography'
                ]
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className={`bg-white rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}>
                  <div className="text-indigo-500 font-semibold mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="text-slate-600 mb-3">{item.company}</div>
                  <ul className="space-y-1 text-slate-600">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-sm">• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Let's Work <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            I'm currently seeking internship and full-time opportunities. If you have an exciting project or opportunity, let's connect!
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <FaEnvelope />, label: 'Email', href: 'mailto:t.takushi04@gmail.com' },
              { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/travis-takushi' },
              { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/takoosh808' },
              { icon: <FaPhone />, label: 'Phone', href: 'tel:8082271391' }
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-3 hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center text-2xl">
                  {contact.icon}
                </div>
                <span className="text-slate-300">{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 text-center py-8">
        <p>&copy; 2025 Travis Takushi. Built with passion and code.</p>
      </footer>
    </div>
  );
}