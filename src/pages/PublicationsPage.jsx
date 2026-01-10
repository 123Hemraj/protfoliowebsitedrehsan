export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Publications & Patents</h1>
          <p className="text-indigo-100 text-sm md:text-lg">Research contributions and intellectual property</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-3 md:px-4 py-12 md:py-16">
        {/* Patents Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Patents</h2>
          
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">UK Patent</h3>
              <div className="space-y-2 md:space-y-3">
                <div>
                  <p className="text-gray-600 font-semibold text-xs md:text-sm">TITLE</p>
                  <p className="text-gray-900 text-sm md:text-lg">AI Based Hybrid Vehicle Charging Station</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-xs md:text-sm">DESIGN NUMBER</p>
                  <p className="text-gray-900 text-sm md:text-base">6384788</p>
                </div>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 pt-2">
                  <div>
                    <p className="text-gray-600 font-semibold text-xs md:text-sm">REGISTRATION DATE</p>
                    <p className="text-gray-900 text-sm md:text-base">16 August 2024</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-xs md:text-sm">GRANT DATE</p>
                    <p className="text-gray-900 text-sm md:text-base">22 August 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">India Patent</h3>
              <div className="space-y-2 md:space-y-3">
                <div>
                  <p className="text-gray-600 font-semibold text-xs md:text-sm">TITLE</p>
                  <p className="text-gray-900 text-sm md:text-lg">Inert Oxy-Acetylene Gas Welding</p>
                </div>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <p className="text-gray-600 font-semibold text-xs md:text-sm">APPLICATION NUMBER</p>
                    <p className="text-gray-900 text-sm md:text-base">1212/DEL/2014</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-xs md:text-sm">PUBLICATION DATE</p>
                    <p className="text-gray-900 text-sm md:text-base">30th May 2014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Publications 2024-2025 */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Publications (2024-2025)</h2>
          
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Machine Learning Approaches for Predicting Mechanical Properties of Composite Materials</h3>
              <p className="text-gray-700 mb-2 text-xs md:text-sm">
                <span className="font-semibold">Authors:</span> Singh, A. P., Asgar, M. E., Singholi, A. K. S., Gautam, U., Ranjan, R. (2025)
              </p>
              <p className="text-gray-600 mb-2 text-xs md:text-sm">Proceeding of 2nd International Conference on Emerging Applications of Artificial Intelligence, Machine Learning and Cybersecurity (ICAMC 2024). HMR Institute of Technology and Management, New Delhi, 16-17 May 2024</p>
              <p className="text-gray-600 text-xs md:text-sm mb-2">AIJR Proceedings | ISSN: 2582-3922 | ISBN: 978-81-984081-8-1 | <span className="font-semibold text-indigo-600">BASE Indexed</span></p>
              <a href="https://doi.org/10.21467/proceedings.178.5" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.21467/proceedings.178.5</a>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Exploring the Landscape of Blockchain in Healthcare: Addressing Challenges and Seizing Opportunities</h3>
              <p className="text-gray-700 mb-2 text-xs md:text-sm">
                <span className="font-semibold">Authors:</span> Zaidi, S., Rani, K., Bhandari, R., Asgar, M. E. (2025)
              </p>
              <p className="text-gray-600 mb-2 text-xs md:text-sm">Proceeding of 2nd International Conference on Emerging Applications of Artificial Intelligence, Machine Learning and Cybersecurity (ICAMC 2024). HMR Institute of Technology and Management, New Delhi, 16-17 May 2024</p>
              <p className="text-gray-600 text-xs md:text-sm mb-2">AIJR Proceedings | ISSN: 2582-3922 | ISBN: 978-81-984081-8-1 | <span className="font-semibold text-indigo-600">BASE Indexed</span></p>
              <a href="https://doi.org/10.21467/proceedings.178.25" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.21467/proceedings.178.25</a>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Machining Assessment for Alloy 718 through WEDM</h3>
              <p className="text-gray-700 mb-2 text-xs md:text-sm">
                <span className="font-semibold">Authors:</span> Asgar, M. E., Singholi, A. K. S. (2024)
              </p>
              <p className="text-gray-600 mb-2 text-xs md:text-sm">Journal of Scientific Research, 16(3), 887-897</p>
              <p className="text-gray-600 text-xs md:text-sm mb-2">ISSN: 2070-0237 (Print), 2070-0245 (Online) | <span className="font-semibold text-green-600">UGC Care group 1</span></p>
              <a href="https://dx.doi.org/10.3329/jsr.v16i3.72077" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://dx.doi.org/10.3329/jsr.v16i3.72077</a>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Revolutionizing IoT with Blockchain: A State-of-the-Art Review</h3>
              <p className="text-gray-700 mb-2 text-xs md:text-sm">
                <span className="font-semibold">Authors:</span> Zaidi, S., Bhandari, R., Asgar, M. E. (2024)
              </p>
              <p className="text-gray-600 mb-2 text-xs md:text-sm">In book: Blockchain-based Internet of Things Opportunities, Challenges and Solutions</p>
              <p className="text-gray-600 text-xs md:text-sm mb-2">ebook ISBN: 9781003407096 | <span className="font-semibold text-blue-600">Scopus Indexed</span></p>
              <a href="https://doi.org/10.1201/9781003407096-4" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: 10.1201/9781003407096-4</a>
            </div>
          </div>
        </div>

        {/* Publications 2023 */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Publications 2023</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">A Review on Role of AI in Damage Assessment in Laminated Composite Structures</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Singh, A. P., Asgar, M. E., Ranjan, R., Kaushik, Y., Reji, J. K., Tyagi, T. (2023)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">International Journal of Engineering Applied Sciences and Technology, Vol. 8 Issue 2, Page 220-229, ISSN: 2455-2143 | <span className="font-semibold">Peer Reviewed</span></p>
                <a href="https://doi.org/10.33564/IJEAST.2023.v08i02.034" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.33564/IJEAST.2023.v08i02.034</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">A Review on Sign Gloves For Dumb and Deaf Peoples using ESP32</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Gautam, U., Asgar, M. E., Ranjan, R., Narayan, C. (2023)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">International Journal of Engineering Applied Sciences and Technology, Vol. 8 Issue 2, Page 303-308, ISSN: 2455-2143 | <span className="font-semibold">Peer Reviewed</span></p>
                <a href="http://dx.doi.org/10.33564/IJEAST.2023.v08i02.046" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: http://dx.doi.org/10.33564/IJEAST.2023.v08i02.046</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">SARS-COV-2: The 2019 Novel Coronavirus</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Gahlot, A., Rakhi, Asgar, M. E. (2023)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">International Journal of Engineering Applied Sciences and Technology, Vol. 8 Issue 2, Page 333-339, ISSN: 2455-2143 | <span className="font-semibold">Peer Reviewed</span></p>
                <a href="http://dx.doi.org/10.33564/IJEAST.2023.v08i02.051" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: http://dx.doi.org/10.33564/IJEAST.2023.v08i02.051</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">A review on material processing using microwave radiation</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Gautam, U., Asgar, M. E., Singh, K. (2023)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">Materials Today: Proceedings, Vol 78, Part 3, Page 426-431, ISSN: 2214-7853 | <span className="font-semibold text-blue-600">Scopus Indexed</span></p>
                <a href="https://doi.org/10.1016/j.matpr.2022.10.249" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.1016/j.matpr.2022.10.249</a>
              </div>
            </div>
          </div>
        </div>

        {/* Earlier Publications */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Earlier Publications (2021-2022)</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Analysis of control factors and surface integrity during wire-EDM of Inconel 718 alloy using T-GRA approach</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E., Singholi, A. K. S. (2021)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">EMITTER International Journal of Engineering Technology, Vol. 9 No. 2, ISSN: 2443-1168 | <span className="font-semibold text-blue-600">ESCI, WOS Journal</span></p>
                <a href="https://doi.org/10.24003/emitter.v9i2.633" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.24003/emitter.v9i2.633</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">A Review on Wire Electrical Discharge Machining of Advanced Conductive Materials</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E., Singholi, A. K. S. (2021)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">International Transaction Journal of Engineering, Management, & Applied Sciences & Technologies, 12(10), 1-10, ISSN: 1906-9642 | <span className="font-semibold text-blue-600">ESCI, WOS Journal</span></p>
                <a href="https://doi.org/10.14456/ITJEMAST.2021.206" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: 10.14456/ITJEMAST.2021.206</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Effective Application and Sustainability of Lean Six Sigma to Improve Process Performance</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar M. E., Ranjan R., Atre S., Bhandari R., Zaidi S. (2021)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">In: Singh J., Kumar S., Choudhury U. (eds) Innovations in Cyber Physical Systems. Lecture Notes in Electrical Engineering, vol 788, Springer, Singapore | <span className="font-semibold text-blue-600">Scopus Indexed</span></p>
                <a href="https://doi.org/10.1007/978-981-16-4149-7_69" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.1007/978-981-16-4149-7_69</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Study of the Effect of Dielectric on Performance Measure in EDM</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E., Singholi, A.K.S. (2021)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">In: Phanden R.K., Mathiyazhagan K., Kumar R., Paulo Davim J. (eds) Advances in Industrial and Production Engineering. Lecture Notes in Mechanical Engineering. Springer, Singapore | <span className="font-semibold text-blue-600">Scopus Indexed</span></p>
                <a href="https://doi.org/10.1007/978-981-33-4320-7_75" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.1007/978-981-33-4320-7_75</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Implementation of Regenerative Braking System in Automobiles</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Kumar M., Asgar M. E. (2021)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">In: Pandey V.C., Pandey P.M., Garg S.K. (eds) Advances in Electromechanical Technologies. Lecture Notes in Mechanical Engineering. Springer, Singapore | <span className="font-semibold text-blue-600">Scopus Indexed</span></p>
                <a href="https://doi.org/10.1007/978-981-15-5463-6_53" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.1007/978-981-15-5463-6_53</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Machinability Characteristics of Inconel 718 Superalloy</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E., Singholi, A.K.S. (2020)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">Solid state Technology, 63(6):11707-11715 | <span className="font-semibold">Peer Reviewed Journal</span></p>
                <a href="http://www.solidstatetechnology.us/index.php/JSST/article/view/6157" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">View Publication</a>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Parameter Study and Optimization of WEDM process: A Review</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E., Singholi, A.K.S. (2018)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">IOP Conf. Ser.: Mater. Sci. Eng. 404 012007 | <span className="font-semibold text-blue-600">Scopus Indexed</span></p>
                <a href="https://doi.org/10.1088/1757-899X/404/1/012007" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 hover:underline text-xs md:text-sm font-semibold">DOI: https://doi.org/10.1088/1757-899X/404/1/012007</a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Publications */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Additional Publications (2013-2017)</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Effective Application of Six Sigma to improve process performance</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E. (2017)</p>
                <p className="text-gray-600 text-xs md:text-sm">HMR Interdisciplinary Journal of Science, Technology & Education Management, Volume 1 Issue 2, ISBN: 978-93-85758-03-4 | <span className="font-semibold">Conference Proceeding</span></p>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Utilization of bio gas as a fuel for rural area: Comparative Analysis</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Gupta, D., Asgar, M. E. (2016)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">International Journal of Scientific Research in Science, Engineering and Technology (IJSRSET), Volume 2 Issue 2, Online ISSN: 2394-4099 | <span className="font-semibold">Peer Reviewed Journal</span></p>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Cryptography: An art of hidden secrets</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Zaidi, S., Asgar, M. E. (2016)</p>
                <p className="text-gray-600 text-xs md:text-sm">Presented in National Conference on Computational Intelligence, Communication Network, Smart Grid (NCCCS-2016), HMR Institute of Technology and Management, New Delhi, 19-20 February 2016 | <span className="font-semibold">Conference Proceeding</span></p>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Modification of Inert Oxy-Acetylene Welding Nozzle</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E., et al. (2015)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">International Journal of Innovative Research & Development (IJIRD), Volume 4, ISSN: 2278-0211 | <span className="font-semibold">Peer Reviewed Journal</span></p>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Optimization of Oxy Acetylene gas welding with inert gas</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E. (2014)</p>
                <p className="text-gray-600 text-xs md:text-sm">Presented in International Conference on Advancements in Mechanical Engineering (ICAME-2014), Al-Falah University, Faridabad, 7-8 August 2014 | <span className="font-semibold">Conference Proceeding</span></p>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Feasibility Study and Development of Inert Oxy Acetylene Gas Welding</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E., et al. (2014)</p>
                <p className="text-gray-600 text-xs md:text-sm mb-2">International Journal of Engineering Trends and Technology (IJETT), Volume 14 Number 1, August 2014, ISSN: 2231-5381 | <span className="font-semibold">Peer Reviewed Journal</span></p>
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">A Cost Reduction Technique- Lean Six Sigma</h3>
                <p className="text-gray-700 text-xs md:text-sm mb-1">Asgar, M. E., Jha, V., Alam, S.K. (2013)</p>
                <p className="text-gray-600 text-xs md:text-sm">International Journal of Research Review in Engineering, Science & Technology, Volume-2, Issue-4, ISSN: 2278 6643 | <span className="font-semibold">Peer Reviewed Journal</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial and Conference Roles */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Editorial & Conference Roles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Editor Positions</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="border-b border-gray-200 pb-3 md:pb-4 last:border-b-0">
                  <p className="font-bold text-gray-900 text-sm md:text-base">Editor: HMRIJSTEM Journal</p>
                  <p className="text-gray-600 text-xs md:text-sm">Volume 6 issue 1 - Present</p>
                </li>
                <li className="border-b border-gray-200 pb-3 md:pb-4 last:border-b-0">
                  <p className="font-bold text-gray-900 text-sm md:text-base">Volume Editor: ICAMC 2024 Proceedings</p>
                  <p className="text-gray-600 text-xs md:text-sm">Published March 17, 2025</p>
                </li>
                <li>
                  <p className="font-bold text-gray-900 text-sm md:text-base">Editor: ICAMC 2025 Abstract Proceedings</p>
                  <p className="text-gray-600 text-xs md:text-sm">ISBN: 978-81-987571-4-2 | May 1, 2025</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Conference Organization</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="border-b border-gray-200 pb-3 md:pb-4 last:border-b-0">
                  <p className="font-bold text-gray-900 text-sm md:text-base">Convener: ICAMC 2025</p>
                  <p className="text-gray-600 text-xs md:text-sm">May 1-2, 2025</p>
                </li>
                <li className="border-b border-gray-200 pb-3 md:pb-4 last:border-b-0">
                  <p className="font-bold text-gray-900 text-sm md:text-base">Convener: ICAMC 2024</p>
                  <p className="text-gray-600 text-xs md:text-sm">May 16-17, 2024</p>
                </li>
                <li className="border-b border-gray-200 pb-3 md:pb-4 last:border-b-0">
                  <p className="font-bold text-gray-900 text-sm md:text-base">Convener: ICAMC 2023</p>
                  <p className="text-gray-600 text-xs md:text-sm">May 11-12, 2023</p>
                </li>
                <li>
                  <p className="font-bold text-gray-900 text-sm md:text-base">Organizing Secretary: ICICPS 2020</p>
                  <p className="text-gray-600 text-xs md:text-sm">October 22-23, 2020</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
