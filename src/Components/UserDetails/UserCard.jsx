import React, { useState } from "react";
import { motion } from "framer-motion";

const UserCard = ({ user }) => {
  const [showCompany, setShowCompany] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true }}

      className="bg-white hover:bg-slate-100 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition duration-300 p-6 text-sm text-gray-700 leading-relaxed space-y-2">

      {/* User Details */}

      <h2 className="text-xl font-semibold text-blue-900 mb-1">
        {user.name}
      </h2>
      <p className="text-gray-500 text-md mb-2">@{user.username}</p>

      <p className="text-gray-600 text-md">
        <span className="font-semibold ">Email:</span> {user.email}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold text-gray-700">Website:</span>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.website}
        </a>
      </p>

      {/* Company Details */}
      <div className="mt-3">
        <p
          onClick={() => setShowCompany(!showCompany)}
          className="font-semibold text-gray-800 underline underline-offset-4 cursor-pointer hover:text-blue-600 transition"
        >
          Company
        </p>
        {showCompany && (
          <div className="ml-3 mt-2 space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-700">Name:</span>{" "}
              {user.company.name}
            </p>
            <p>
              <span className="font-medium text-gray-700">Catchphrase:</span>{" "}
              {user.company.catchPhrase}
            </p>
            <p>
              <span className="font-medium text-gray-700">Business:</span>{" "}
              {user.company.bs}
            </p>
          </div>
        )}
      </div>

      {/* Address */}
      <div className="mt-3">
        <p
          onClick={() => setShowAddress(!showAddress)}
          className="font-semibold text-gray-800 underline underline-offset-4 cursor-pointer hover:text-blue-600 transition"
        >
          Address
        </p>
        {showAddress && (
          <div className="ml-3 mt-2 space-y-1 text-gray-600">
            <p>{user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UserCard;



