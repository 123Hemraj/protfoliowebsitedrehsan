export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Professional Experience</h1>
          <p className="text-indigo-100 mt-2">12+ years of teaching & academic excellence</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">Current Position</h2>
          
          <div className="border-l-4 border-indigo-600 pl-6 pb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Assistant Professor</h3>
            <p className="text-indigo-600 font-semibold text-lg">HMR Institute of Technology and Management, New Delhi</p>
            <p className="text-gray-600 mb-2">July 29, 2013 - Present (12+ years)</p>
            <p className="text-gray-700 font-semibold mb-4">Department of Mechanical & Automation Engineering</p>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Key Responsibilities:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">▪</span>
                  <span><strong>Teaching:</strong> Deliver educational lectures to undergraduate and postgraduate students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">▪</span>
                  <span><strong>Examinations:</strong> Conduct and oversee end-semester examinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">▪</span>
                  <span><strong>Research Guidance:</strong> Guide UG students for technical and research paper writing based on final year projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">▪</span>
                  <span><strong>Student Mentorship:</strong> Group mentor for sixth-semester mechanical engineering students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">▪</span>
                  <span><strong>Event Organization:</strong> Organize seminars, conferences, FDPs, and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">▪</span>
                  <span><strong>NAAC Coordination:</strong> Coordinate accreditation activities as NAAC Coordinator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">▪</span>
                  <span><strong>Laboratory Management:</strong> In-charge of CIM Lab, Robotics Lab, and Metrology Lab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">University Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">GGSIPU Contributions</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Active participation in conducting end-semester theory exams</li>
                <li>✓ Paper setting for GGSIPU (10+ years)</li>
                <li>✓ Paper evaluation and assessment</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Competition & Coordination</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Coordination team for Inter-College Major Project Competition (2015)</li>
                <li>✓ Coordinator in Tech Fest projects</li>
                <li>✓ Organizer of cultural and sports events</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Technical Expertise</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Wire Electrical Discharge Machining (WEDM)</li>
                <li>• Advanced Manufacturing Technology</li>
                <li>• Composite Materials Processing</li>
                <li>• Alloy Machining (Inconel 718, Alloy 718)</li>
                <li>• Oxy-Acetylene Gas Welding</li>
                <li>• Automation Engineering</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Emerging Technologies</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Machine Learning & AI Applications</li>
                <li>• Blockchain Technology</li>
                <li>• Internet of Things (IoT)</li>
                <li>• Cybersecurity</li>
                <li>• Generative AI in Engineering</li>
                <li>• Process Optimization (Lean Six Sigma)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
