'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
          Simple & Transparent Pricing
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Choose the package that works best for you
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200 text-black">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">
                Birth Chart Solutions
              </h3>
              <div className="text-5xl font-bold text-purple-600 my-6">
                ₹222
              </div>
              <p className="text-gray-600 mb-8">
                Get personalized solutions for your selected problems
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Complete Birth Chart Analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Select Multiple Problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>3 Solutions Per Problem</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Personalized Report with Your Name</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Remedy Videos</span>
              </li>
            </ul>

            <Link
              href="/payment"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center font-bold py-4 rounded-lg transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Premium Package */}
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                Complete Remedy Bundle
              </h3>
              <div className="text-5xl font-bold my-6">
                ₹2,000
              </div>
              <p className="text-purple-200 mb-8">
                Guaranteed solutions for all your life problems
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Everything in Basic Package</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Solutions for ALL 15 Problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Comprehensive PDF Report</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>45 Powerful Remedies (3 x 15)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Lifetime Access to Your Report</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span>Priority Support</span>
              </li>
            </ul>

            <Link
              href="/more-remedies"
              className="block w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 text-center font-bold py-4 rounded-lg transition-all"
            >
              Get Complete Bundle
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            🔒 Secure Payment • 💯 Money Back Guarantee • 📱 24/7 Support
          </p>
        </div>
      </div>
    </div>
  )
}

