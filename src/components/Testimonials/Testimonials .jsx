import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'motion/react';
import useTheme from '../../hooks/useTheme';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'TechCorp',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
    text: 'Jobify completely transformed my job search. I found my dream position within two weeks of signing up. The platform is intuitive and the job recommendations are incredibly accurate.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovation Labs',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    rating: 5,
    text: 'As a recruiter, Jobify has been invaluable. The quality of candidates is exceptional, and the platform makes it easy to manage applications and communicate with potential hires.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'Creative Studio',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    rating: 5,
    text: 'I love how easy it is to showcase my portfolio and skills. Within a month, I received multiple interview requests from top companies. Highly recommend Jobify to all job seekers!',
  },
];

const Testimonials = () => {
  const { theme } = useTheme();

  return (
    <section className="bg-white py-30">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#244034] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D2F34C] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? '' : 'text-[#244034]'
            } mb-2`}
          >
            What Our Users Say
          </h2>
          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#D2F34C]/50 hover:shadow-xl hover:shadow-[#D2F34C]/5 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="w-8 h-8 text-[#D2F34C]/40" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-[#D2F34C]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 grow">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full ring-2 ring-[#D2F34C]/20"
                  />
                  <div>
                    <h4 className="font-semibold text-[#244034]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: 'Active Users', value: '50K+' },
            { label: 'Jobs Posted', value: '10K+' },
            { label: 'Success Rate', value: '95%' },
            { label: 'Companies', value: '2K+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#244034] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
