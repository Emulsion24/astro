'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PROBLEMS_LIST } from '@/data/problems'
import { Sparkles, Calendar, Clock, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function BirthChartPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    selectedProblems: [],
    problemDescription: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleProblemToggle = (problemValue) => {
    setFormData(prev => {
      const isSelected = prev.selectedProblems.includes(problemValue)
      return {
        ...prev,
        selectedProblems: isSelected
          ? prev.selectedProblems.filter(p => p !== problemValue)
          : [...prev.selectedProblems, problemValue]
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.selectedProblems.length === 0) {
      setError('Please select at least one problem')
      return
    }

    setLoading(true)
    setError('')
    setSuccess(true)
    
    // Store form data in memory
    if (typeof window !== 'undefined') {
      window.birthChartData = formData
    }
    
    // Navigate to solutions page after brief delay
    setTimeout(() => {
      router.push('/solutions')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '700ms'}}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-3">
            Birth Chart Analysis
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Unlock cosmic insights with personalized astrological solutions tailored just for you
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Birth Details Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* Date of Birth */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                    <Calendar className="w-4 h-4 inline mr-1 mb-1" />
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800"
                  />
                </div>

                {/* Time of Birth */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                    <Clock className="w-4 h-4 inline mr-1 mb-1" />
                    Time *
                  </label>
                  <input
                    type="time"
                    name="timeOfBirth"
                    value={formData.timeOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800"
                  />
                </div>

                {/* Place of Birth */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                    <MapPin className="w-4 h-4 inline mr-1 mb-1" />
                    Place *
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              {/* Problems Selection */}
              <div>
                <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                  Select Your Concerns * <span className="text-gray-500 text-xs normal-case">(Choose multiple)</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto p-5 bg-gray-50 rounded-xl border-2 border-gray-200">
                  {PROBLEMS_LIST.map(problem => (
                    <label
                      key={problem.id}
                      className={`flex items-center space-x-3 cursor-pointer p-4 rounded-lg transition-all duration-200 ${
                        formData.selectedProblems.includes(problem.value)
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md scale-105'
                          : 'bg-white hover:bg-purple-50 hover:shadow-sm text-black'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.selectedProblems.includes(problem.value)}
                        onChange={() => handleProblemToggle(problem.value)}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="font-medium">{problem.label}</span>
                    </label>
                  ))}
                </div>
                {formData.selectedProblems.length > 0 && (
                  <div className="mt-3 flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm font-semibold text-purple-900">
                      {formData.selectedProblems.length} concern{formData.selectedProblems.length > 1 ? 's' : ''} selected
                    </p>
                    <p className="text-sm font-semibold text-purple-700">
                      {formData.selectedProblems.length * 3} solutions included
                    </p>
                  </div>
                )}
              </div>

              {/* Problem Description */}
             

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Birth chart generated successfully!</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || success}
                className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white font-bold py-5 rounded-xl text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating Birth Chart...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Redirecting...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Birth Chart
                  </>
                )}
              </button>
            </form>

            {/* Security Badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Your information is 100% secure and confidential</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}