import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_navbar2.module.css";
import AxiosInstance from "./../auth/AxiosInstance";
import {MdAdminPanelSettings} from "react-icons/md"
import { RiLoginCircleLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";

const SignInUp = () => {
  let token = window.localStorage.getItem("token");
  let logout = async () => {
    let { data } = await AxiosInstance.get("/auth/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    window.localStorage.removeItem("token");
    window.location.assign("/");
  };

  let AuthUser = () => {
    return (
      <>
        <div>
          <Link to="/admin-dashboard" className={Styles.bootcampBtn}>
            <MdAdminPanelSettings /> Admin Dashboard
          </Link>
        </div>
        <div>
          <button onClick={logout} className={Styles.logout}>
            <RiLogoutCircleLine /> Logout
          </button>
        </div>
      </>
    );
  };

  let GuestUser = () => {
    return (
      <section id={Styles.signBlock}>
        <div>
          <Link to="/signin" className={Styles.signin}>
            <RiLoginCircleLine />
            Sign In
          </Link>
        </div>

        <div>
          <Link to="/signup" className={Styles.signup}>
            <SiGnuprivacyguard /> Sign Up
          </Link>
        </div>
      </section>
    );
  };
  return (
    <section className={Styles.btns}>
      <>{token ? <AuthUser /> : <GuestUser />}</>
    </section>
  );
};

export default SignInUp;
//!------------------------------------------------------------------------

// import React from "react";
// import { Link } from "react-router-dom";
// import Styles from "./_navbar2.module.css";
// import AxiosInstance from "./../auth/AxiosInstance";

// const SignInUp = () => {
//   let token = window.localStorage.getItem("token");
//   let logout = async () => {
//     let { data } = await AxiosInstance.get("/auth/logout", {

//       headers: {
//         Authorization: `Bearer ${token}`,
//       },

//     });
//     console.log(data);
//     window.localStorage.removeItem("token");
//     window.location.assign("/");
//   };
//    let DashBoardButton = () => {
//      var x = document.querySelector(".dashBoardButton");
//      console.log(x);
//      x.style.display = "none";
//    };
//   let AuthUser = () => {

//     return (

//       <>
//         <div className="dashBoardButton" onClick={DashBoardButton}>
//           <Link to="/admin-dashboard" className={Styles.bootcampBtn}>
//             Admin Dashboard
//           </Link>
//         </div>
//         <div>
//           <button onClick={logout} className={Styles.logout}>
//             Logout
//           </button>
//         </div>
//       </>
//     );
//   };

//   let GuestUser = () => {
//     return (
//       <>
//         <div>
//           <Link to="/signin" className={Styles.signin}>
//             Sign In
//           </Link>
//         </div>

//         <div>
//           <Link to="/signup" className={Styles.signup}>
//             Sign Up
//           </Link>
//         </div>
//       </>
//     );
//   };
//   return (
//     <section className={Styles.btns}>
//       <>{token ? <AuthUser /> : <GuestUser />}</>
//     </section>
//   );
// };

// export default SignInUp;
