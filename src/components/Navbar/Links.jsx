import React, { useContext } from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";
// import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Links = ({ nav }) => {
//   const {user} = useContext(AuthContext);
  return (
    <motion.li
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <NavLink
        to={nav.path}
        target="_parent"
        className={({ isActive }) =>
          `relative inline-block text-white hover:text-[#D2F34C] font-semibold ${
            isActive
              ? 'bg-linear-to-r from-[#632ee3] to-[#892CDC] bg-clip-text text-transparent border-b-2 border-[#D2F34C]'
              : ''
          }`
        }
      >
        <span>{nav.name}</span>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-[#9f62f2]"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </NavLink>
    </motion.li>
  );
};

export default Links;