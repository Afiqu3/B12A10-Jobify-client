import React from 'react';
import banner2 from '../../../assets/banner-2.jpg';

const AboutPage = () => {
  return (
    <section className="bg-[#244034]">
      <div className="py-30 relative">
        <div className="max-w-6xl mx-auto text-white">
          <motion.div
            className="flex flex-col justify-center items-center mb-15"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-2`}>About Us</h2>
            <div className="h-0.5 bg-[#D2F34C] w-30"></div>
          </motion.div>

          <div className="flex lg:flex-row flex-col gap-4 lg:px-0 px-4">
            <div className="relative flex-1">
              <img src={banner2} alt="" />
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-4 lg:text-left text-center">
              <h2 className="text-2xl font-bold">
                Jobify - Where Tasks Meet Talent, and Action Meets Trust
              </h2>
              <p className="text-gray-400">
                Jobify is not merely a task marketplace—it's a living,
                breathing, full-stack digital ecosystem meticulously engineered
                to redefine the entire lifecycle of how people post, discover,
                claim, negotiate, track, and complete jobs and tasks in real
                time, anywhere in the world. Launched on March 15, 2025, from a
                modest co-working hub in Gulshan-2, Dhaka, Bangladesh, Jobify
                emerged as a direct response to a universal, everyday
                frustration: the chaos of fragmented task management in an era
                dominated by remote work, gig economies, and hyper-connected yet
                disorganized digital lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
