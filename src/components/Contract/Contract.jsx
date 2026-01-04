import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { motion } from 'motion/react';
import { Bounce, toast } from 'react-toastify';
import useTheme from '../../hooks/useTheme';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: 'support@jobify.com',
      subDetails: 'hr@jobify.com',
      link: 'mailto:support@jobify.com',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: '+880 1701-234567',
      subDetails: 'Mon-Fri, 9AM-6PM EST',
      link: 'tel:+880 1701-234567',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: '123 Business Street',
      subDetails: 'Dhaka, Bangladesh',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      Icon: FaFacebookF,
      label: 'Facebook',
      href: 'https://www.facebook.com/afique.hossain.J/',
      color: 'hover:text-blue-500',
    },
    {
      Icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/Afiqu3',
      color: 'hover:text-gray-700',
    },
    {
      Icon: SiX,
      label: 'X',
      href: 'https://x.com/',
      color: 'hover:text-gray-800',
    },
    {
      Icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/md-afique-hossain',
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <section className="py-40 bg-white">
      <title>Contact Us</title>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-2`}>Contract Us</h2>
          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-[#D2F34C]/50 hover:shadow-xl hover:shadow-[#D2F34C]/10'
                  : 'bg-white border-gray-200 hover:border-[#D2F34C]/50 hover:shadow-xl hover:shadow-[#D2F34C]/5'
              }`}
            >
              <div
                className={`inline-flex p-4 rounded-xl mb-4 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#D2F34C]/10 group-hover:bg-[#D2F34C]/20'
                    : 'bg-[#D2F34C]/10 group-hover:bg-[#D2F34C]/20'
                }`}
              >
                <info.icon className="w-6 h-6 text-[#D2F34C]" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-[#244034]'
                }`}
              >
                {info.title}
              </h3>
              <p
                className={`mb-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {info.details}
              </p>
              <p
                className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {info.subDetails}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl border ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200 shadow-lg'
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-[#244034]'
              }`}
            >
              Send Us a Message
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-[#244034]'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400'
                      : 'bg-gray-50 border-gray-300 text-black placeholder:text-gray-500'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-[#244034]'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400'
                      : 'bg-gray-50 border-gray-300 text-black placeholder:text-gray-500'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-[#244034]'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400'
                      : 'bg-gray-50 border-gray-300 text-black placeholder:text-gray-500'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-[#244034]'
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400'
                      : 'bg-gray-50 border-gray-300 text-black placeholder:text-gray-500'
                  }`}
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#D2F34C] hover:bg-[#c5e642] text-[#244034] shadow-lg shadow-[#D2F34C]/20 hover:shadow-xl hover:shadow-[#D2F34C]/30'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <div className="w-5 h-5 border-2 border-[#244034] border-t-transparent rounded-full animate-spin"></div>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Map and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map */}
            <div
              className={`rounded-2xl overflow-hidden border h-[400px] ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3870369269!2d90.27923991057244!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0811a5591%3A0x8fc252669da7f4c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>

            {/* Social Links */}
            <div
              className={`p-8 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-[#244034]'
                }`}
              >
                Follow Us
              </h3>
              <p
                className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Stay connected with us on social media for updates and news.
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`group p-3 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 hover:border-[#D2F34C]/50'
                        : 'bg-gray-50 border-gray-300 hover:border-[#D2F34C]/50'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        theme === 'dark'
                          ? 'text-gray-300 group-hover:text-[#D2F34C]'
                          : `text-gray-600 group-hover:text-[#D2F34C]`
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`mt-16 p-8 rounded-2xl border ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-[#D2F34C]/5 border-[#D2F34C]/20'
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 text-center ${
              theme === 'dark' ? 'text-white' : 'text-[#244034]'
            }`}
          >
            Frequently Asked Questions
          </h3>
          <p
            className={`text-center mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            For immediate answers, check out our{' '}
            <a href="/faq" className="text-[#D2F34C] hover:underline">
              FAQ page
            </a>{' '}
            or visit our{' '}
            <a href="/support" className="text-[#D2F34C] hover:underline">
              Help Center
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
