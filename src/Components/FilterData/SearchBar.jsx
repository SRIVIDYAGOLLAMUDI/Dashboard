import React from "react";
import { motion } from "framer-motion";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }} 
            className="flex justify-center mb-6 px-3">
            
            <input
                id="user-search"
                name="search"
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-lg px-5 py-3 text-sm rounded-xl border border-gray-300 text-gray-700 bg-white shadow-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 outline-none placeholder:text-gray-400"
            />

        </motion.div>
    );
};

export default SearchBar;
