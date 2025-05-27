import React from 'react'

interface ContactSectionProps {
  onNavigate?: (sectionIndex: number) => void
  isScrolling?: boolean
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate, isScrolling }) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-red-900 via-cyan-900 to-slate-900 flex items-center justify-center relative">
      <div className="text-center text-white z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">{`Let's Work Together`}</h2>
        <p className="text-lg mb-8 opacity-90">
          새로운 도전과 협업 기회를 기다리고 있습니다. <br />
          데이터 사이언스 프로젝트나 MLOps 구축에 대해 이야기해보세요.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: '📧', label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
            { icon: '💼', label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com/in/your-profile' },
            { icon: '⚡', label: 'GitHub', value: 'View my code', href: 'https://github.com/your-username' }
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 block"
            >
              <div className="text-2xl mb-2">{contact.icon}</div>
              <h3 className="font-semibold mb-1">{contact.label}</h3>
              <p className="text-sm opacity-80">{contact.value}</p>
            </a>
          ))}
        </div>

        <button
          onClick={() => onNavigate?.(0)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          disabled={isScrolling}
        >
          Back to Top
        </button>
      </div>
    </div>
  )
}