import React from "react";
import Navbar2 from "../navbar2/Navbar2";
import AdminBlockMain from "./AdminBlockMain";
import AdminBlockSide from "./AdminBlockSide";

const AdminDashboard = () => {
  return (
    <>
      <Navbar2 />
      <AdminBlockSide />
      <AdminBlockMain />
    </>
  );
};

export default AdminDashboard;
