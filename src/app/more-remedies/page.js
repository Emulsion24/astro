'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PROBLEMS_LIST } from '@/data/problems'

export default function MoreRemediesPage() {
  const router = useRouter()
  const [birthData, setBirthData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.sessionStorage?.getItem('birthChartData') || window.tempBirthData
      if (stored) {
        setBirthData(JSON.parse(stored))
      }
    }
  }, [])

  const handlePurchase = () => {
    setLoading(true)
    // Simulate payment
    setTimeout(() => {
      alert('Complete bundle purchased! You will receive the comprehensive PDF report via email.')
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center text-white mb-12">
          <div className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold mb-4">
            ⭐ PREMIUM PACKAGE ⭐
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Complete Remedy Bundle
          </h1>
          <p className="text-2xl text-purple-200">
            Get Solutions for ALL 15 Life Problems
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-purple-600 mb-2">₹2,000</div>
            <p className="text-gray-600">One-time payment • Lifetime access</p>
          </div>

          {/* What's Included */}
          <div className="border-t-2 border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              What&apos;s Included in This Bundle
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {PROBLEMS_LIST.map((problem, index) => (
                <div key={problem.id} className="flex items-start bg-purple-50 p-4 rounded-lg">
                  <span className="text-purple-600 font-bold mr-3">{index + 1}.</span>
                  <div>
                    <p className="font-semibold text-gray-800">{problem.label}</p>
                    <p className="text-sm text-gray-600">3 powerful remedies</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-purple-900 mb-4 text-lg">📦 Complete Package Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>45 Premium Remedies</strong> - 3 solutions for each of the 15 problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Comprehensive PDF Report</strong> - Professionally formatted with your name</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Detailed Birth Chart Analysis</strong> - Complete planetary positions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Video Guidance</strong> - Step-by-step remedy application videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Lifetime Access</strong> - Download and refer anytime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Priority Support</strong> - Get help when you need it</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Money-Back Guarantee</strong> - 100% satisfaction guaranteed</span>
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-gray-700 italic mb-3">
                &quot;I was struggling with multiple problems in my life. This bundle gave me complete solutions 
                for everything. The remedies actually work! Best investment I&apos;ve made.&quot;
              </p>
              <p className="text-gray-600 font-semibold">- Priya S., Mumbai</p>
            </div>

            {/* Purchase Button */}
            <button
              onClick={handlePurchase}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-6 rounded-xl text-xl transition-all disabled:opacity-50 shadow-lg"
            >
              {loading ? 'Processing...' : '🎁 Get Complete Bundle Now - ₹2,000'}
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              🔒 Secure payment • 💯 100% Money-back guarantee • 📧 Instant delivery
            </p>
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose the Complete Bundle?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-yellow-300">Basic Package (₹222)</h4>
              <ul className="space-y-2 text-purple-200">
                <li>• Selected problems only</li>
                <li>• Limited remedies</li>
                <li>• Basic report</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-yellow-300">Complete Bundle (₹2,000)</h4>
              <ul className="space-y-2 text-green-300">
                <li>• ALL 15 problems covered</li>
                <li>• 45 powerful remedies</li>
                <li>• Premium PDF report</li>
                <li>• Lifetime access</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}