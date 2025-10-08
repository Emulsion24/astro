'use client'

import { useState } from 'react'
import { CreditCard, Lock, CheckCircle, User, Phone, Mail } from 'lucide-react'

export default function PaymentPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  })

  const amount = 222

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePayment = async () => {
    setLoading(true)
    
    // Simulate payment processing
    setTimeout(() => {
      // Redirect to solutions page
      window.location.href = '/birth-chart'
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Complete Your Payment
          </h1>
          <p className="text-gray-600">Secure checkout for your personalized astrology report</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Order Summary Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={24} />
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Service</div>
                  <div className="font-semibold text-gray-800">Complete Birth Chart Analysis</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-700">Birth Chart Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-700">Choose 3 Life Problems</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-700">9 Powerful Remedies</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-700">Detailed PDF Report</span>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{amount}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">₹0</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl">₹{amount}</span>
                </div>
              </div>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center gap-2 text-green-700 text-sm">
                  <Lock size={16} />
                  <span className="font-semibold">100% Secure Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Personal Information Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="text-purple-600" size={24} />
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Your report will be sent to this email</p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="text-purple-600" size={24} />
                  Payment Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={3}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      name="cardholderName"
                      value={formData.cardholderName}
                      onChange={handleInputChange}
                      placeholder="Name as shown on card"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-lg text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock size={20} />
                    Pay ₹{amount}
                  </>
                )}
              </button>

              {/* Security Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Lock size={14} />
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={14} />
                    <span>PCI Compliant</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={14} />
                    <span>Secure Payment</span>
                  </div>
                </div>
                
                <p className="text-center text-xs text-gray-500">
                  Powered by Razorpay • Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">Money Back Guarantee</div>
                <div className="text-sm text-gray-600">100% satisfaction guaranteed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="text-blue-600" size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">Secure Checkout</div>
                <div className="text-sm text-gray-600">Your data is protected</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">Instant Delivery</div>
                <div className="text-sm text-gray-600">Report sent immediately</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}