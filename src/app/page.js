'use client'

import { useEffect, useRef, useState } from 'react'
import { Sparkles, Star, Zap, BookOpen, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
    setIsVisible(true)
  }, [])

  const handleGetStarted = () => {
    // Redirect to payment page
    window.location.href = '/payment'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Video Background with Overlay */}
        <div className="absolute inset-0">
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
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-purple-800/80"></div>
        </div>
        
        {/* Floating Stars Animation Over Video */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <Star className="text-white opacity-40" size={Math.random() * 20 + 10} />
            </div>
          ))}
        </div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Video Demonstration Section - Top */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              <div className="relative aspect-video bg-black/50">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  LIVE DEMO
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay */}
               
            
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                    <p className="text-sm font-semibold">🎬 See how easy it is to get your personalized astrology report in just 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-white mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <Sparkles className="text-yellow-300" size={20} />
              <span className="text-sm font-semibold">Ancient Vedic Wisdom Meets Modern Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Unlock Your Cosmic Blueprint
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-purple-100">
              Discover personalized astrological solutions based on your unique birth chart
            </p>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Transform your life with powerful remedies backed by ancient Vedic astrology
            </p>
          </div>

          {/* Pricing Card - Featured */}
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-4 border-yellow-400">
              {/* Popular Badge */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-center py-2">
                <span className="text-sm font-bold text-gray-900">⭐ MOST POPULAR ⭐</span>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Complete Birth Chart Analysis</h3>
                  <p className="text-gray-600">Personalized Solutions for Your Life Problems</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-purple-600">₹222</span>
                  </div>
                  <p className="text-sm text-gray-500">One-time payment • Instant access</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Complete Birth Chart Analysis',
                    'Choose Up to 3 Life Problems',
                    '9 Powerful Remedies (3 per problem)',
                    'Detailed PDF Report',
                    'Planetary Positions & Effects',
                    'Lifetime Access to Your Report'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <Zap className="text-green-600" size={14} />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleGetStarted}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
                >
                  Get Started Now
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  🔒 Secure Payment • 100% Confidential
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center gap-8 mt-8 text-white/80 text-sm">
              <div className="text-center">
                <div className="font-bold text-2xl text-white">500+</div>
                <div>Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-white">4.9★</div>
                <div>Average Rating</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-white">24/7</div>
                <div>Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            What You&apos;ll Discover
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Your personalized astrology report includes everything you need to understand and improve your life
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-900">Detailed Birth Chart</h3>
              <p className="text-gray-700 leading-relaxed">
                Complete analysis of your planetary positions, houses, and their profound effects on every aspect of your life journey.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-900">Powerful Remedies</h3>
              <p className="text-gray-700 leading-relaxed">
                Get 3 proven remedies for each problem. Ancient Vedic solutions that have transformed thousands of lives.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📄</div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-900">Professional Report</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive PDF report with personalized guidance, remedies, and insights you can reference anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12">Simple, fast, and secure process</p>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              { num: 1, title: 'Enter Birth Details', desc: 'Date, time, and place of birth for accurate calculations', icon: '📅' },
              { num: 2, title: 'Select Problems', desc: 'Choose up to 3 problems from 15 life areas', icon: '🎯' },
              { num: 3, title: 'Make Payment', desc: 'Secure payment of just ₹222', icon: '💳' },
              { num: 4, title: 'Get Solutions', desc: 'Instant access to your personalized report', icon: '🎁' }
            ].map((step) => (
              <div key={step.num} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-4xl">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2 mt-4 text-black">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Video Demonstration Section */}
         
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Life Problems We Can Help Solve
          </h2>
          <p className="text-center text-gray-600 mb-12">Choose up to 3 problems and get tailored remedies</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { icon: '💼', name: 'Career' },
              { icon: '💰', name: 'Finance' },
              { icon: '❤️', name: 'Love' },
              { icon: '👨‍👩‍👧', name: 'Family' },
              { icon: '🏥', name: 'Health' },
              { icon: '📚', name: 'Education' },
              { icon: '💑', name: 'Marriage' },
              { icon: '🧘', name: 'Mental Peace' },
              { icon: '⚖️', name: 'Legal Issues' },
              { icon: '🏠', name: 'Property' },
              { icon: '🎯', name: 'Success' },
              { icon: '🤝', name: 'Relationships' },
              { icon: '😰', name: 'Anxiety' },
              { icon: '✨', name: 'Spirituality' },
              { icon: '🌟', name: 'Life Purpose' }
            ].map((problem, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl text-center hover:shadow-md transition-all hover:scale-105">
                <div className="text-3xl mb-2">{problem.icon}</div>
                <div className="text-sm font-semibold text-gray-700">{problem.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have found clarity and solutions through Vedic astrology
          </p>
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl"
          >
            Start Your Journey - ₹222
            <ChevronRight size={20} />
          </button>
          <p className="mt-4 text-purple-200 text-sm">
            ⚡ Instant access • 🔒 100% secure • 📱 Mobile-friendly report
          </p>
        </div>
      </section>
    </div>
  )
}