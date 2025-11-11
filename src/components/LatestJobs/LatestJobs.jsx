import React from "react";
import useTheme from "../../hooks/useTheme";
import { motion } from "motion/react";
import JobCard from "./JobCard";
import { Link } from "react-router";

const latestJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    postedBy: "Arif Hossain",
    category: "Web Development",
    summary:
      "We are looking for an experienced React.js developer to build responsive web applications and collaborate with the backend team.",
    coverImage:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg",
    userEmail: "arif.hossain@techco.bd",
    salary: "BDT 80,000 - 120,000",
    vacancy: "2",
    postedDate: "2025-11-11T09:18:00+06:00",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    postedBy: "Fatima Rahman",
    category: "Digital Marketing",
    summary:
      "Drive online growth through SEO, PPC, and social media campaigns for e-commerce brands.",
    coverImage:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/11/service11.jpg",
    userEmail: "fatima@marketpro.bd",
    salary: "BDT 50,000 - 75,000",
    vacancy: "3",
    postedDate: "2025-11-10T14:30:00+06:00",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    postedBy: "Rahim Khan",
    category: "Graphics Designing",
    summary:
      "Create user-centered designs, wireframes, and prototypes for mobile and web platforms.",
    coverImage:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg",
    userEmail: "rahim.khan@designhub.bd",
    salary: "BDT 60,000 - 90,000",
    vacancy: "1",
    postedDate: "2025-11-10T14:30:00+06:00",
  },
  {
    id: 4,
    title: "Technical Support Engineer",
    postedBy: "Sanjida Akter",
    category: "Technical Support",
    summary:
      "Provide 24/7 customer support for cloud services, troubleshoot issues, and maintain SLAs.",
    coverImage:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg",
    userEmail: "sanjida@cloudcare.bd",
    salary: "BDT 40,000 - 60,000",
    vacancy: "4",
    postedDate: "2025-11-10T14:30:00+06:00",
  },
  {
    id: 5,
    title: "Full-Stack WordPress Developer",
    postedBy: "Karim Ahmed",
    category: "Web Development",
    summary:
      "Develop custom themes, plugins, and optimize performance for high-traffic WordPress sites.",
    coverImage:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/11/service9.jpg",
    userEmail: "karim@wpstudio.bd",
    salary: "BDT 70,000 - 100,000",
    vacancy: "2",
    postedDate: "2025-11-06T13:15:00+06:00",
  },
  {
    id: 6,
    title: "Motion Graphics Artist",
    postedBy: "Nabila Islam",
    category: "Graphics Designing",
    summary:
      "Produce animated explainer videos, social media ads, and branding assets using After Effects.",
    coverImage:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13.jpg",
    userEmail: "nabila@animake.bd",
    salary: "BDT 55,000 - 80,000",
    vacancy: "1",
    postedDate: "2025-11-06T13:15:00+06:00",
  },
];

const LatestJobs = () => {
  const { theme } = useTheme();

  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme === "dark" ? "" : "text-[#244034]"
            } mb-2`}
          >
            Latest Jobs
          </h2>

          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {latestJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <JobCard job={job}></JobCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
            <Link to={'/allJobs'} className='my-btn text-black'>See All Jobs</Link>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
