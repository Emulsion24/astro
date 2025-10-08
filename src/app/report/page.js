'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { PROBLEMS_LIST } from '@/data/problems'

export default function ReportPage() {
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
        generateSolutions(data.selectedProblems)
      } else {
        router.push('/birth-chart')
      }
    }

    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [router])

  const generateSolutions = (selectedProblems) => {
    const solutionsData = selectedProblems.map(problemValue => {
      const problem = PROBLEMS_LIST.find(p => p.value === problemValue)
      return {
        problem: problem.label,
        solutions: [
          `Perform daily meditation and chant mantras related to ${problem.label.toLowerCase()}`,
          `Wear gemstone recommended for ${problem.label.toLowerCase()} (consult astrologer for specific stone)`,
          `Donate to charity on specific days to reduce negative effects of ${problem.label.toLowerCase()}`
        ]
      }
    })
    setSolutions(solutionsData)
  }

  const downloadPDF = () => {
    alert('PDF download will be implemented with a PDF generation library')
  }

  if (!birthData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Report Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center border-b-2 border-purple-200 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-purple-900 mb-2">
              Astrological Solutions Report
            </h1>
            <p className="text-xl text-gray-700">Prepared for: <span className="font-bold">{birthData.name}</span></p>
            <p className="text-gray-600 mt-2">
              Date: {new Date().toLocaleDateString('en-IN')}
            </p>
          </div>

          {/* Personal Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Birth Details</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Date of Birth:</strong> {birthData.dateOfBirth}</p>
                <p><strong>Time of Birth:</strong> {birthData.timeOfBirth}</p>
                <p><strong>Place of Birth:</strong> {birthData.placeOfBirth}</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Report Summary</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Problems Analyzed:</strong> {birthData.selectedProblems.length}</p>
                <p><strong>Total Solutions:</strong> {birthData.selectedProblems.length * 3}</p>
                <p><strong>Report Type:</strong> Personalized</p>
              </div>
            </div>
          </div>
        </div>

        {/* Remedy Video in Report */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Apply Remedies</h2>
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video/intro.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-gray-600 text-sm">
            This video continuously loops to guide you through the remedy application process.
          </p>
        </div>

        {/* Detailed Solutions Report */}
        {solutions.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="border-l-4 border-purple-600 pl-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Problem {index + 1}: {item.problem}
              </h2>
              
              <div className="space-y-6">
                {item.solutions.map((solution, sIndex) => (
                  <div key={sIndex} className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {sIndex + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-900 mb-2">
                          Remedy {sIndex + 1}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{solution}</p>
                        <div className="mt-3 text-sm text-gray-600">
                          <p><strong>Duration:</strong> Perform for 40 days continuously</p>
                          <p><strong>Best Time:</strong> Early morning or evening</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Additional Notes */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-yellow-900 mb-3">⚠️ Important Notes</h3>
          <ul className="space-y-2 text-yellow-800">
            <li>• Follow remedies with faith and dedication for best results</li>
            <li>• Consult with an astrologer for personalized gemstone recommendations</li>
            <li>• Results may vary based on individual karma and planetary positions</li>
            <li>• Keep this report for future reference</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={downloadPDF}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition-all"
          >
            📥 Download PDF Report
          </button>
          <button
            onClick={() => router.push('/more-remedies')}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all"
          >
            🎁 Get Complete Bundle
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-600">
          <p>This report is generated based on Vedic astrology principles</p>
          <p className="text-sm mt-2">© 2024 AstroSolutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
