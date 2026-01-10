import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Icons as reusable components for consistency
  const IconWrapper = ({ children, className = "" }) => (
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4 max-w-4xl mx-auto text-center">
        {/* Bio */}
        <div className="space-y-8 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-semibold uppercase tracking-wider rounded-full shadow-sm ring-1 ring-indigo-200">
            Assistant Professor
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
            Dr. Md. Ehsan <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Asgar</span>
          </h1>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Department of Mechanical & Automation Engineering
            </p>
            <p className="text-lg md:text-xl text-slate-500 font-medium">
              HMR Institute of Technology & Management, New Delhi
            </p>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Dedicated educator and researcher with <strong className="text-indigo-600">12+ years</strong> of experience in advanced manufacturing, machine learning, and sustainable engineering.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto py-8 border-y border-slate-200">
            {[
              { value: "12+", label: "Years Exp.", color: "text-indigo-600" },
              { value: "25+", label: "Publications", color: "text-violet-600" },
              { value: "2", label: "Patents", color: "text-emerald-600" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:asgarehsan@gmail.com"
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 shadow-sm"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Professional Overview</h2>

          <div className="space-y-5">
            {[
              {
                id: 'about',
                title: 'About',
                subtitle: 'Background and expertise',
                icon: '👤',
                color: 'bg-indigo-100 text-indigo-600',
                content: (
                  <>
                    <p className="mb-4">
                      Experienced Assistant Professor specializing in mechanical engineering with focus on Wire EDM, composites, and AI-driven manufacturing.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      {[
                        { label: 'Experience', value: '12+' },
                        { label: 'Students', value: '200+' },
                        { label: 'Events', value: '50+' },
                      ].map((item, i) => (
                        <div key={i} className="bg-indigo-50 p-3 rounded-lg text-center">
                          <div className="font-bold text-indigo-700">{item.value}</div>
                          <div className="text-xs text-gray-600">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </>
                ),
              },
              {
                id: 'experience',
                title: 'Experience',
                subtitle: 'Professional journey',
                icon: '💼',
                color: 'bg-blue-100 text-blue-600',
                content: (
                  <div className="pl-4 border-l-2 border-blue-200">
                    <h4 className="font-bold">Assistant Professor</h4>
                    <p className="text-blue-600 text-sm">HMR Institute • 2013–Present</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      {[
                        'Teaching & Curriculum',
                        'Research Guidance',
                        'Lab Management',
                        'NAAC Coordination',
                        'Conference Org.',
                        'Examinations',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-blue-500">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              },
              {
                id: 'education',
                title: 'Education',
                subtitle: 'Academic qualifications',
                icon: '🎓',
                color: 'bg-emerald-100 text-emerald-600',
                content: (
                  <div className="space-y-3">
                    {[
                      { deg: 'Ph.D. in Manufacturing Technology', inst: 'GGSIPU, New Delhi', year: '2022' },
                      { deg: 'M.Tech in Manufacturing Tech & Automation', inst: 'Al-Falah, Faridabad', year: '2014 (75.9%)' },
                      { deg: 'B.Tech in Mechanical Engineering', inst: 'Al-Falah, Faridabad', year: '2012 (72.6%)' },
                    ].map((edu, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-emerald-500 mt-1">•</span>
                        <div>
                          <div className="font-medium">{edu.deg}</div>
                          <div className="text-sm text-gray-600">{edu.inst} • {edu.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                id: 'publications',
                title: 'Publications & Patents',
                subtitle: 'Research & innovation',
                icon: '📚',
                color: 'bg-purple-100 text-purple-600',
                content: (
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold mb-1">Patents</div>
                      <ul className="text-sm space-y-1">
                        <li>• UK Patent: AI Hybrid Vehicle Charging Station (2024)</li>
                        <li>• India Patent: Inert Oxy-Acetylene Gas Welding (2014)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Publications (25+)</div>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Scopus Indexed Journals</li>
                        <li>• UGC Care Group I</li>
                        <li>• International Conferences</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                id: 'contact',
                title: 'Contact',
                subtitle: 'Reach out anytime',
                icon: '📧',
                color: 'bg-rose-100 text-rose-600',
                content: (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Personal</div>
                      <a href="tel:+919999629550" className="block text-indigo-600 hover:underline">+91 9999 629550</a>
                      <a href="mailto:asgarehsan@gmail.com" className="block text-indigo-600 hover:underline">asgarehsan@gmail.com</a>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Institute</div>
                      <a href="mailto:ehsan.asgar@hmritm.ac.in" className="block text-indigo-600 hover:underline">ehsan.asgar@hmritm.ac.in</a>
                      <p className="text-gray-600">011-27724116</p>
                    </div>
                  </div>
                ),
              },
            ].map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <IconWrapper className={section.color}>{section.icon}</IconWrapper>
                    <div>
                      <h3 className="font-semibold text-lg">{section.title}</h3>
                      <p className="text-gray-500 text-sm">{section.subtitle}</p>
                    </div>
                  </div>
                  <span className={`transform transition-transform ${expandedSection === section.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {expandedSection === section.id && (
                  <div className="px-6 pb-5 pt-0 border-t border-gray-100">
                    <div className="mb-4 text-gray-700 text-sm leading-relaxed">
                      {section.content}
                    </div>
                    <Link
                      to={`/${section.id}`}
                      className="inline-flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800"
                    >
                      View Full Details →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}