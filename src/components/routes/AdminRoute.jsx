import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import AxiosInstance from "./../auth/AxiosInstance";
import { toast } from 'react-toastify';

const AdminRoute = ({ children }) => {
  let [role, setRole] = useState("");
  let token = window.localStorage.getItem("token");
  if (token) {
    let fetchData = async () => {
      try {
        let { data } = await AxiosInstance.get("auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let { role } = data.data;
        console.log(role);
        setRole(role);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(role);
    if (
      role !== "user" ||
      (role !== null && (role == "admin" || role === "publisher"))
    ) {
      return <>{children}</>;
    } else {
      toast.warn("You are not authorized");
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/signin" />;
  }
};

export default AdminRoute;
