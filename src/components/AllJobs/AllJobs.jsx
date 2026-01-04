import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import useTheme from '../../hooks/useTheme';
import useAxios from '../../hooks/useAxios';
import JobCard from '../LatestJobs/JobCard';
import { PacmanLoader } from 'react-spinners';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';

const AllJobs = () => {
  const { theme } = useTheme();
  const axiosInstance = useAxios();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Filter and Search States
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('desc');
  const [category, setCategory] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const limit = 9;

  // Categories for filter
  const categories = [
    'All Categories',
    'Web Development',
    'Digital Marketing',
    'Graphics Designing',
    'Technical Support',
  ];

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const params = {
        page: currentPage,
        limit: limit,
        sort: sortType,
      };

      if (search) params.search = search;
      if (category && category !== 'All Categories') params.category = category;
      if (salaryMin) params.salaryMin = salaryMin;
      if (salaryMax) params.salaryMax = salaryMax;
      // console.log(params.salaryMin, salaryMax);

      const response = await axiosInstance.get('/jobs', { params });
      setJobs(response.data.jobs);
      setTotalPages(response.data.totalPages);
      setTotalJobs(response.data.totalJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  }, [
    axiosInstance,
    category,
    currentPage,
    salaryMax,
    salaryMin,
    search,
    sortType,
  ]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchJobs();
  };

  const handleClearFilters = () => {
    setSearch('');
    setCategory('');
    setSalaryMin('');
    setSalaryMax('');
    setSortType('desc');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-[#244034] text-white hover:bg-[#1a2f26]'
        } transition`}
      >
        Previous
      </button>
    );

    // First page
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-[#D2F34C] transition"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="dots1" className="px-2">
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg transition ${
            currentPage === i
              ? 'bg-[#D2F34C] text-[#244034] font-semibold'
              : 'bg-gray-200 hover:bg-[#D2F34C]/50'
          }`}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="dots2" className="px-2">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-[#D2F34C] transition"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-[#244034] text-white hover:bg-[#1a2f26]'
        } transition`}
      >
        Next
      </button>
    );

    return pages;
  };

  return (
    <section className="my-40">
      <title>All Jobs</title>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col justify-center items-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? '' : 'text-[#244034]'
            } mb-2`}
          >
            All Jobs
          </h2>
          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
          <p
            className={`mt-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Found {totalJobs} jobs
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                placeholder="Search jobs by title..."
                className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-black'
                }`}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-[#D2F34C] hover:bg-[#c5e642] text-[#244034] font-semibold rounded-lg transition"
              >
                Search
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-3 rounded-lg transition flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-[#244034]'
                }`}
              >
                <FaFilter /> Filters
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-6 rounded-lg mb-6 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-[#244034]'
                    }`}
                  >
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-black'
                    }`}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Min Salary Filter */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-[#244034]'
                    }`}
                  >
                    Min Salary
                  </label>
                  <input
                    type="text"
                    value={salaryMin}
                    onChange={(e) => setSalaryMin(e.target.value)}
                    placeholder="e.g. 50000"
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-black'
                    }`}
                  />
                </div>

                {/* Max Salary Filter */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-[#244034]'
                    }`}
                  >
                    Max Salary
                  </label>
                  <input
                    type="text"
                    value={salaryMax}
                    onChange={(e) => setSalaryMax(e.target.value)}
                    placeholder="e.g. 100000"
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-black'
                    }`}
                  />
                </div>

                {/* Sort Filter */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-[#244034]'
                    }`}
                  >
                    Sort By
                  </label>
                  <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border-2 focus:border-[#D2F34C] focus:outline-none transition ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-black'
                    }`}
                  >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                    <option value="salary-high">Salary: High to Low</option>
                    <option value="salary-low">Salary: Low to High</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleSearch}
                  className="px-6 py-2 bg-[#D2F34C] hover:bg-[#c5e642] text-[#244034] font-semibold rounded-lg transition"
                >
                  Apply Filters
                </button>
                <button
                  onClick={handleClearFilters}
                  className={`px-6 py-2 rounded-lg transition flex items-center gap-2 ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-300 hover:bg-gray-400 text-[#244034]'
                  }`}
                >
                  <FaTimes /> Clear All
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <PacmanLoader size={50} color="#D2F34C" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-20">
            <p
              className={`text-xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              No jobs found. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <>
            {/* Jobs Grid */}
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
                    ease: 'easeOut',
                  }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center items-center gap-2 mt-12 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {renderPagination()}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default AllJobs;
