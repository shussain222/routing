"use client";
import Header from "@/Componants/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const notify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const [users, setUsers] = useState([]);
  const [num, setNum] = useState(10);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header num={num} />
      <button className="px-4 py-2 m-3 rounded bg-green-600 text-white font-bold">
        Get Data
      </button>
      <div>
        <button
          className="px-2 py-1 m-3 rounded bg-blue-600 text-white font-bold"
          onClick={notify}
        >
          Notify
        </button>
        <ToastContainer />
      </div>
      <div className="p-8 bg-slate-200 m-3">
        <ul>
          {users.map((e) => {
            return (
              <li>
                {e.username} ---- <a href={`/${e.id}`}>Explore</a>
              </li>
            );
          })}
        </ul>
      </div>
      page
    </>
  );
};

export default page;
