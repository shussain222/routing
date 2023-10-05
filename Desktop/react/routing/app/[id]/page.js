"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );

    console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>Name : {users.name}</div>
      <div>UserName : {users.username}</div>
      <div>Email : {users.email}</div>
    </>
  );
};

export default page;
