import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ExternalLink, Heart } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.social.github,
      icon: Github,
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn', 
      url: personalInfo.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'hover:text-green-400',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-dark-border bg-dark-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-bold gradient-text mb-4">
              AI Portfolio
            </h3>
            <p className="text-dark-muted text-sm leading-relaxed mb-4">
              실무 중심의 AI 프로젝트와 데이터 사이언스 솔루션을 개발하는 포트폴리오입니다. 
              머신러닝, 딥러닝, 컴퓨터 비전 기술을 활용하여 실제 비즈니스 문제를 해결합니다.
            </p>
            
            {/* Tech Stack Badge */}
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Next.js', 'TailwindCSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-dark-card text-dark-muted text-xs rounded border border-dark-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-dark-text">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="text-dark-muted hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="mr-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-dark-text">
              Connect
            </h3>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name !== 'Email' ? '_blank' : '_self'}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className={`text-dark-muted ${social.color} transition-colors p-2 rounded-lg hover:bg-dark-card`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Email */}
            <div className="text-sm">
              <p className="text-dark-muted mb-1">Email</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-dark-text hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-dark-border pt-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-dark-muted text-sm flex items-center">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>and lots of ☕</span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm text-dark-muted">
              <span className="flex items-center">
                Built with 
                <span className="ml-1 text-blue-400">Next.js</span>
                <span className="mx-1">&</span>
                <span className="text-purple-400">TypeScript</span>
              </span>
              
              {/* Optional: Resume/CV link */}
              {personalInfo.resume && (
                <a 
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-dark-muted hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Resume
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Optional: Back to top button */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-dark-muted hover:text-blue-400 transition-colors text-sm flex items-center group"
          >
            <span className="mr-1 transition-transform group-hover:-translate-y-1">
              ↑
            </span>
            Back to top
          </button>
        </motion.div>
      </div>
    </footer>
  );
};