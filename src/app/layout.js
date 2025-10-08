import './globals.css'

export const metadata = {
  title: 'Astrology Solutions - Birth Chart & Remedies',
  description: 'Get your personalized birth chart and astrological solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 text-gray-900 font-sans">
        {/* Navbar */}
        <nav className="backdrop-blur-md bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-orange-800/90 text-white shadow-lg sticky top-0 z-50 border-b border-white/10">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            {/* Brand */}
            <a
              href="/"
              className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 hover:from-pink-300 hover:to-yellow-200 transition-all duration-300"
            >
              🔮 AstroSolutions
            </a>

            {/* Links */}
            <div className="hidden sm:flex items-center space-x-8">
              <a
                href="/"
                className="hover:text-yellow-300 transition-colors font-medium text-lg"
              >
                Home
              </a>
              <a
                href="/pricing"
                className="hover:text-yellow-300 transition-colors font-medium text-lg"
              >
                Pricing
              </a>
              <a
                href="/payment"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-gray-900 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started ✨
              </a>
            </div>

            {/* Mobile menu placeholder (optional later) */}
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-orange-800 text-white mt-16">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_60%)]"></div>

          <div className="relative container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              {/* Brand Info */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">AstroSolutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Personalized astrological insights and remedies crafted to balance your cosmic energies and life path.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-300">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="/" className="hover:text-yellow-300 transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="/pricing" className="hover:text-yellow-300 transition-colors">Pricing</a>
                  </li>
                  
                 
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-xl font-semibold mb-3 text-yellow-300">Connect</h4>
                <p className="text-gray-300 mb-2">📧 support@astrosolutions.com</p>
                <p className="text-gray-300 mb-2">📞 +91 98765 43210</p>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                  <a href="#" className="hover:text-yellow-300 transition"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="hover:text-yellow-300 transition"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="hover:text-yellow-300 transition"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-700/50 pt-6 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} AstroSolutions. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
