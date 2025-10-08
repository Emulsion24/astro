'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { PROBLEMS_LIST } from '@/data/problems'

export default function SolutionsPage() {
  const router = useRouter()
  const videoRef = useRef(null)
  const [birthData, setBirthData] = useState(null)
  const [solutions, setSolutions] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.sessionStorage?.getItem('birthChartData') || window.tempBirthData
      if (stored) {
        const data = JSON.parse(stored)
        setBirthData(data)
        generateSolutions(data.selectedProblems || [])
      } else {
        router.push('/birth-chart')
      }
    }

    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [router])

  const generateSolutions = (selectedProblems) => {
    const solutionsData = selectedProblems.map(problemValue => {
      const problem = PROBLEMS_LIST.find(p => p.value === problemValue)
      return {
        problem: problem?.label || 'Unknown Problem',
        solutions: [
          `Practice daily meditation and chant mantras related to ${problem?.label?.toLowerCase() || 'this issue'}.`,
          `Wear gemstones that balance ${problem?.label?.toLowerCase() || 'the affected area'} (consult a trusted astrologer).`,
          `Offer donations or service on auspicious days to harmonize the energy of ${problem?.label?.toLowerCase() || 'this planet'}.`
        ]
      }
    })
    setSolutions(solutionsData)
  }

  if (!birthData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 font-medium">Loading your birth chart details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl animate-fadeIn">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white rounded-3xl shadow-2xl p-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">✨ Your Personalized Remedies</h1>
          <p className="text-xl md:text-2xl font-medium">For {birthData.name}</p>
          <div className="mt-4 text-sm opacity-90 space-y-1">
            <p>📅 Date of Birth: {birthData.dateOfBirth} at {birthData.timeOfBirth}</p>
            <p>📍 Place: {birthData.placeOfBirth}</p>
          </div>
        </div>

        {/* Remedy Video */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-12 transition-transform hover:scale-[1.01]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            🎥 Remedy Guidance Video
          </h2>
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/remedy-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Watch this guidance video to understand the spiritual remedies crafted for your birth chart.
          </p>
        </div>

        {/* Birth Chart Info */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12 transition-transform hover:scale-[1.01]">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">🌙 Birth Chart Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">Planetary Positions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>☀️ Sun: Strong vitality and confidence</li>
                <li>🌙 Moon: Emotional intelligence and intuition</li>
                <li>🔥 Mars: High drive and courage</li>
                <li>💬 Mercury: Sharp communication skills</li>
              </ul>
            </div>
            <div className="bg-pink-50 border border-pink-100 p-6 rounded-xl">
              <h3 className="font-bold text-pink-900 mb-3 text-lg">Key Insights</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🌠 Current planetary period is favorable</li>
                <li>⚖️ Remedies will help balance your energies</li>
                <li>💫 Positive transformation on the horizon</li>
                <li>🙏 Continue self-discipline for lasting peace</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Remedies List */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔮 Personalized Remedies</h2>
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 shadow-md">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.problem}</h3>
                  <p className="text-gray-600">3 powerful spiritual solutions to resolve this issue</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {item.solutions.map((solution, sIndex) => (
                  <div
                    key={sIndex}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-md transition-all"
                  >
                    <div className="text-purple-700 font-bold mb-2">🌸 Solution {sIndex + 1}</div>
                    <p className="text-gray-700 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <button
            onClick={() => alert('Downloading report...')}
            className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 hover:from-purple-800 hover:to-pink-700 text-white font-bold py-6 rounded-2xl text-lg transition-all shadow-lg hover:shadow-2xl"
          >
            📄 Download Full Report
          </button>

          <button
            onClick={() => router.push('/more-remedies')}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-6 rounded-2xl text-lg transition-all shadow-lg hover:shadow-2xl"
          >
            ✨ Get Advanced Remedies (₹2000)
          </button>
        </div>
      </div>
    </div>
  )
}
