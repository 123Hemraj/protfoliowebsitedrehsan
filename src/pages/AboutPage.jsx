export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About</h1>
          <p className="text-indigo-100 text-lg">Personal background and professional overview</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-600 text-sm font-semibold mb-1">FULL NAME</p>
                <p className="text-gray-900 text-lg">Dr. Md. Ehsan Asgar</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-600 text-sm font-semibold mb-1">DATE OF BIRTH</p>
                <p className="text-gray-900 text-lg">10th August 1990</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-600 text-sm font-semibold mb-1">QUALIFICATION</p>
                <p className="text-gray-900 text-lg">Ph.D. in Manufacturing Technology</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-600 text-sm font-semibold mb-1">FATHER'S NAME</p>
                <p className="text-gray-900 text-lg">Md. Noman Banarasi</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">FATHER'S OCCUPATION</p>
                <p className="text-gray-900 text-lg">Assistant Professor, Mechanical Engineering</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Residential Address</h2>
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                H. No.- 43, Block R-3,<br/>
                Mohan Garden,<br/>
                New Delhi,<br/>
                India - 110059
              </p>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Experienced Assistant Professor with strong commitment to academic excellence and research innovation. Specialized in mechanical engineering with focus on advanced manufacturing processes, Wire Electrical Discharge Machining (WEDM), composite materials, and emerging technologies including machine learning and artificial intelligence.
            </p>
          </div>
        </div>

        {/* Current Position */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Position</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">DESIGNATION</p>
              <p className="text-gray-900 text-xl font-semibold">Assistant Professor</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">INSTITUTION</p>
              <p className="text-gray-900 text-lg">HMR Institute of Technology and Management</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">DEPARTMENT</p>
              <p className="text-gray-900 text-lg">Department of Mechanical & Automation Engineering</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">LOCATION</p>
              <p className="text-gray-900 text-lg">Hamidpur, New Delhi - 110036</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">AFFILIATION</p>
              <p className="text-gray-900 text-lg">GGSIP University, Dwarka, New Delhi</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">SINCE</p>
              <p className="text-gray-900 text-lg font-semibold">29th July 2013 (12+ years)</p>
            </div>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Responsibilities</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Academic Roles</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Deliver educational lectures</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Conduct examinations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Guide UG students for technical & research papers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Supervise final year projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Group mentor for 6th semester students</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Administrative Roles</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">NAAC Coordinator</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Examination In-charge</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Editor, HMRIJSTEM Journal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Lab In-charge (CIM, Robotics, Metrology)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span className="text-gray-700">Conference Convener & Organizer</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Organizational Activities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-700 flex gap-2">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span>Organize seminars and workshops</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700 flex gap-2">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span>Coordinate FDP programs</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700 flex gap-2">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span>Manage conferences</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700 flex gap-2">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span>Coordinate tech fest projects</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700 flex gap-2">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span>Organize cultural events</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700 flex gap-2">
                  <span className="text-indigo-600 font-bold">▪</span>
                  <span>Active in university activities</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
