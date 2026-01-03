import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'motion/react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');

    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <section className="bg-linear-to-br from-[#244034] to-[#1a2f26] py-30">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#D2F34C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D2F34C] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 md:p-16 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#D2F34C]/20 text-[#D2F34C] px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaEnvelope className="w-4 h-4" />
                <span>Stay Updated</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Get the latest job opportunities, career tips, and industry
                insights delivered straight to your inbox. Join thousands of
                professionals staying ahead in their careers.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-[#D2F34C] rounded-full"></div>
                  <span className="text-sm">Weekly updates</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-[#D2F34C] rounded-full"></div>
                  <span className="text-sm">Exclusive job alerts</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-[#D2F34C] rounded-full"></div>
                  <span className="text-sm">Career advice</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D2F34C] focus:border-transparent transition"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#D2F34C] hover:bg-[#c5e642] text-[#244034] font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#D2F34C]/20 hover:shadow-xl hover:shadow-[#D2F34C]/30"
                >
                  <span>Subscribe Now</span>
                  <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-sm"
                  >
                    🎉 Successfully subscribed! Check your email for
                    confirmation.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm"
                  >
                    ⚠️ Please enter a valid email address.
                  </motion.div>
                )}

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
