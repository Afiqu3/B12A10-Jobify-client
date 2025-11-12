import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import useTheme from "../../hooks/useTheme";
import JobCard from "../LatestJobs/JobCard";
import { RingLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyAddedJobs = () => {
  const { theme } = useTheme();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/myJobs?email=${user.email}`).then((data) => {
      setJobs(data.data);
    });
    setLoading(false);
  }, [axiosSecure, user.email]);

  return (
    <section className="my-40">
      <title>My Added Jobs</title>
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
            My Added Jobs
          </h2>

          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>

        {/* loading true */}
        {loading && (
          <div className="flex justify-center items-center">
            <RingLoader size={50}></RingLoader>
          </div>
        )}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job._id}
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
      </div>
    </section>
  );
};

export default MyAddedJobs;
