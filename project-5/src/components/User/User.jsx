import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const { userid } = useParams();
    return (
        <>
            <h1 className="bg-gray-700 p-4 text-white text-3xl">My params: {userid} </h1>
        </>
    )
};

export default User;