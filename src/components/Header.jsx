import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-transparent backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-lg font-semibold text-gray-800">Dr. Md. Ehsan Asgar</span>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 md:gap-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm">About</Link>
          <Link to="/experience" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm">Experience</Link>
          <Link to="/education" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm">Education</Link>
          <Link to="/publications" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm">Publications</Link>
          <Link to="/admin/login" className="text-gray-500 hover:text-indigo-600 transition-colors font-medium text-sm border-l border-gray-200 pl-6">Login</Link>
          <Link to="/contact" className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all font-bold text-sm">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-6 space-y-4 animate-fadeIn">
          <Link onClick={() => setOpen(false)} to="/" className="block text-gray-700 hover:text-indigo-600 font-medium pt-4">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block text-gray-700 hover:text-indigo-600 font-medium">About</Link>
          <Link onClick={() => setOpen(false)} to="/experience" className="block text-gray-700 hover:text-indigo-600 font-medium">Experience</Link>
          <Link onClick={() => setOpen(false)} to="/education" className="block text-gray-700 hover:text-indigo-600 font-medium">Education</Link>
          <Link onClick={() => setOpen(false)} to="/publications" className="block text-gray-700 hover:text-indigo-600 font-medium">Publications</Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link onClick={() => setOpen(false)} to="/admin/login" className="block w-full text-center px-4 py-3 text-slate-600 border border-slate-200 rounded-xl font-bold">Login</Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-bold">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
