import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import useTheme from "../../hooks/useTheme";
import { RingLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyJobCard from "./MyJobCard";
import Swal from "sweetalert2";

const MyAddedJobs = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const jobModalRef = useRef(null);
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleModal = (job) => {
    setJob(job);
    jobModalRef.current.showModal();
  };

  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/myJobs?email=${user.email}`).then((data) => {
      setJobs(data.data);
      setLoading(false);
    });
  }, [axiosSecure, user.email]);

  const handleJobSubmit = (e) => {
    e.preventDefault();
    console.log(submit)
  }

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This job will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/jobs/${id}`);
        if (res.data.deletedCount > 0) {
          setJobs((prev) => prev.filter((job) => job._id !== id));
          Swal.fire("Deleted!", "Your job has been deleted.", "success");
        }
      } catch (err) {
        Swal.fire("Error", "Failed to delete the job.", "error");
      }
    }
  };

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
          <div className="flex justify-center items-center py-20">
            <RingLoader size={50}></RingLoader>
          </div>
        )}

        {
          jobs.length === 0 && !loading && <div className="flex justify-center items-center p-20 bg-gray-400">
            <h1 className="text-2xl text-[#244034]">No Job Added Yet</h1>
          </div>
        }

        {jobs.length > 0 && (
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
                <MyJobCard job={job} handleDelete={handleDelete} handleModal={handleModal}></MyJobCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* Update modal */}
        <dialog
            ref={jobModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box bg-[#244034]">
              <h3 className="font-bold text-lg text-white">Update Your Job</h3>
              <p className="py-4 text-white">Edit job details quickly and accurately</p>
              <form onSubmit={handleJobSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`input focus:border-transparent ${
                theme === "dark" ? "text-white" : "text-black"
              } w-full`}
                    readOnly
                    defaultValue={user?.displayName}
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className={`input focus:border-transparent ${
                theme === "dark" ? "text-white" : "text-black"
              } w-full`}
                    name="email"
                    readOnly
                    defaultValue={user?.email}
                  />
                   {/* Title */}
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className={`input focus:border-transparent ${
                theme === "dark" ? "text-white" : "text-black"
              } w-full`}
              defaultValue={job.title}
            />
            {/* category */}
            <label className="label">Category</label>
            <select
              name="category"
              defaultValue="Select a category"
              className={`select focus:border-transparent ${
                theme === "dark" ? "text-white" : "text-black"
              } w-full`}
            >
              <option disabled={true}>Select a Category</option>
              <option value={"Web Development"}>Web Development</option>
              <option value={"Digital Marketing"}>Digital Marketing</option>
              <option value={"Graphics Designing"}>Graphics Designing</option>
              <option value={"Technical Support"}>Technical Support</option>
            </select>
            {/* summary */}
            <label className="label">Summary</label>
            <textarea
              name="summary"
              className={`textarea w-full focus:border-transparent ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
              placeholder="Give a summary"
            ></textarea>
            {/* cover image */}
            <label className="label">Cover Image</label>
            <input
              type="url"
              name="photo"
              className={`input focus:border-transparent ${
                theme === "dark" ? "text-white" : "text-black"
              } w-full`}
              placeholder="Photo URL"
            />
            {/* salary */}
            <label className="label">Salary</label>
            <input
              type="text"
              name="salary"
              className={`input focus:border-transparent ${
                theme === "dark" ? "text-white" : "text-black"
              } w-full`}
              placeholder="salary"
            />
            {/* vacancy */}
            <label className="label">Vacancy</label>
            <input
              type="text"
              name="vacancy"
              className={`input focus:border-transparent ${
                theme === "dark" ? "text-white" : "text-black"
              } w-full`}
              placeholder="vacancy"
            />
                  <button className="btn btn-neutral mt-4">
                    Place your bid
                  </button>
                </fieldset>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
      </div>
    </section>
  );
};

export default MyAddedJobs;
