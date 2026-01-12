export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-300 py-8 mt-20 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Phone: +91 9999 629550</li>
              <li>Email: asgarehsan@gmail.com</li>
              <li>Institute: HMRITM, New Delhi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Affiliation</h3>
            <p className="text-sm">GGSIP University, Dwarka, New Delhi</p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 Dr. Md. Ehsan Asgar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
