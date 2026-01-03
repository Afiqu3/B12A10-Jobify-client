import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "motion/react";
import { RingLoader } from "react-spinners";
import { format, parseISO } from "date-fns";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const JobDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const [job, setJob] = useState(null);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/jobs/${id}`).then((data) => {
      setJob(data.data);
      setLoading(false);
    });
  }, [id, axiosInstance]);

  const handleAccept = async () => {
    try {
      const acceptedJob = {
        jobId: job._id,
        title: job.title,
        company: job.postedBy,
        userEmail: user.email,
        coverImage: job.coverImage,
        salary: job.salary,
        category: job.category,
        acceptedAt: new Date(),
      };

      const res = await axiosSecure.post("/acceptedJobs", acceptedJob);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Job Accepted!",
          text: "This job has been added to your accepted list.",
          icon: "success",
          confirmButtonColor: "#244034",
        });
      } else if (res.data.message === "Already accepted") {
        Swal.fire({
          title: "Already Accepted",
          text: "You have already accepted this job.",
          icon: "info",
          confirmButtonColor: "#244034",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to accept the job. Please try again.",
        icon: "error",
        confirmButtonColor: "#244034",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader size={60} />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl text-[#244034] font-semibold">
          Job not found.
        </h2>
      </div>
    );
  }

  const formattedDate = format(parseISO(job.postedDate), "dd-MM-yyyy");

  return (
    <section className="my-40 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#f9f9f9] rounded-2xl shadow-md overflow-hidden"
      >
        <div className="relative">
          <img
            src={job.coverImage}
            alt={job.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black/60 to-transparent"></div>
          <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {job.title}
          </h1>
        </div>

        <div className="p-6 md:p-8 text-[#244034]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-gray-200 pb-4">
            <div>
              <p className="text-sm text-gray-500">Posted By</p>
              <h3 className="font-semibold">{job.postedBy}</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">Posted On</p>
              <h3 className="font-semibold">{formattedDate}</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <h3 className="font-semibold">{job.category}</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#D2F34C]/10 p-4 rounded-xl border-l-4 border-[#D2F34C]">
              <p className="text-sm text-gray-500">Salary Range</p>
              <h3 className="text-lg font-semibold">{job.salary}</h3>
            </div>
            <div className="bg-[#D2F34C]/10 p-4 rounded-xl border-l-4 border-[#D2F34C]">
              <p className="text-sm text-gray-500">Vacancies</p>
              <h3 className="text-lg font-semibold">{job.vacancy}</h3>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Job Summary</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {job.summary}
            </p>
          </div>

          {user && user?.email !== job.userEmail && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={handleAccept}
                className="my-btn text-lg rounded-lg"
              >
                Accept Job
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default JobDetails;
