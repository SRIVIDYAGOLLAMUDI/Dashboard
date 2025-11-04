import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import SearchBar from "../Components/FilterData/SearchBar";
import UserCard from "../Components/UserDetails/UserCard";
import { UserRound } from "lucide-react";

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-600 text-lg animate-pulse">Loading users...</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto">

            <div className="text-center mb-8">


                <motion.h1
                    initial={{ opacity: 0, scale: 1.3 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold text-blue-900 mb-2 flex justify-center items-center gap-2 will-change-transform"
                >
                    <UserRound className="w-8 h-8 text-blue-800" />
                    User Dashboard
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-500 text-sm sm:text-base py-2">
                    A beautiful interface combining logic and design for seamless data visualization
                </motion.p>
            </div>

            {/* Searching */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* User Cards */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 px-3 sm:px-6">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
                ) : (
                    <p className="text-center text-gray-600 col-span-full">
                        No users found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default UserPage;
