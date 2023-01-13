import React from 'react';
import { Outlet } from "react-router-dom";
import Styles from "./_admin.module.css";

const AdminBlockMain = () => {
  return (
    <div className={Styles.adminBlockMainBlock}>
      <Outlet/>
  </div>
  )
}

export default AdminBlockMain