import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_admin.module.css";

import { ImHome } from "react-icons/im";

const AdminBlockSide = () => {
  return (
    <aside className={Styles.adminSidebar}>
      <nav>
        <h2>
          <span className={Styles.content}>Dashboard</span>
        </h2>
      </nav>
      <main>
        <Link to="/admin-dashboard/bootcamp">
          <span className={Styles.content}>Create BootCamp</span>
        </Link>
        <Link to="/admin-dashboard/courses">
          <span className={Styles.content}>Add Courses</span>
        </Link>
        <Link to="/admin-dashboard/users">
          <span className={Styles.content}>Users</span>
        </Link>
        <Link to="/">
          <span className={Styles.content}>
            <ImHome /> Home
          </span>
        </Link>
      </main>
      <footer className={Styles.sideFooter}>
        © 2023 Geeks. All Rights Reserved
      </footer>
    </aside>
  );
};

export default AdminBlockSide;
// !==========================================================
// import React from "react";
// import Styles from "./_admin.module.css";
// import { Link } from "react-router-dom";
// import { CgMenuGridO } from "react-icons/cg";

// const AdminBlockSide = () => {
//   return (
//     <section id={Styles.DashBlock}>
//       <div className={Styles.AdminBlockSideBar}>
//         <aside>
//           <h2>Dashboard</h2>
//         </aside>
//         <aside className={Styles.DashItems}>
//           <ul>
//             <li>
//               <Link to="/admin-dashboard/bootcamp">Create BootCamp</Link>
//             </li>
//             <li>
//               <Link href="" to="/admin-dashboard/courses">
//                 Add Courses
//               </Link>
//             </li>
//             <li>
//               <Link href="" to="/">
//                 Home
//               </Link>
//             </li>
//           </ul>
//         </aside>
//       </div>
//     </section>
//   );
// };

// export default AdminBlockSide;
