import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { PacmanLoader } from "react-spinners";
import { motion } from "motion/react";
import { MdCancel } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";
import Swal from "sweetalert2";

const MyAcceptedJobs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/acceptedJobs?email=${user.email}`).then((res) => {
      setJobs(res.data);
      setLoading(false);
    });
  }, [axiosSecure, user.email]);

  const handleRemove = async (id, action) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure you want to ${action}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#244034",
        cancelButtonColor: "#d33",
        confirmButtonText: action,
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/acceptedJobs/${id}`);
        if (res.data.deletedCount > 0) {
          setJobs((prev) => prev.filter((job) => job._id !== id));

          Swal.fire({
            title: `Job ${action} successfully!`,
            icon: "success",
            confirmButtonColor: "#244034",
          });
        }
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Failed to update the job. Please try again.",
        icon: "error",
        confirmButtonColor: "#244034",
      });
    }
  };

  return (
    <section className="my-40 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
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
          My Accepted Jobs
        </h2>

        <div className="h-0.5 bg-[#D2F34C] w-30"></div>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <PacmanLoader size={50} />
        </div>
      ) : jobs.length === 0 ? (
        <div className="flex justify-center items-center p-20 bg-gray-400">
          <h1 className="text-2xl text-[#244034]">No Accepted Job</h1>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f9f9f9] shadow-sm overflow-hidden p-2 hover:drop-shadow-md hover:-translate-y-0.5"
            >
              <img
                src={job.coverImage}
                alt={job.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-[#244034] font-semibold text-lg mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{job.category}</p>
                <p className="text-gray-700 mb-4">
                  Salary: <span className="font-semibold">{job.salary}</span>
                </p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleRemove(job._id, "DONE")}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                  >
                    <BsCheckCircle /> DONE
                  </button>
                  <button
                    onClick={() => handleRemove(job._id, "CANCEL")}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                  >
                    <MdCancel /> CANCEL
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyAcceptedJobs;
