import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import AxiosInstance from "../auth/AxiosInstance";
import Styles from "./_users.module.css";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import {HiOutlineUsers} from 'react-icons/hi'


const Users = () => {
  let [users, setUsers] = useState([]);

  let token = window.localStorage.getItem("token");
  useEffect(() => {
    let fdata = async () => {
      try {
        let { data } = await AxiosInstance.get("/auth/all-users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(data.data);
      } catch (error) {
        console.log(error.code);
      }
    };
    fdata();
  }, []);

//   function createData(name, email, role, createdAt) {
//     return { name, email, role, createdAt };
//   }

  return (
    <section className={Styles.tableSection}>
      <article className={Styles.tableArticle}>
        <h2>
          <HiOutlineUsers />
          Users Details
        </h2>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 450 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ color: "rgb(88, 88, 88)" }}>
                  <b>NAME</b>
                </TableCell>
                <TableCell align="center" style={{ color: "rgb(88, 88, 88)" }}>
                  <b>EMAIL ID</b>
                </TableCell>
                <TableCell align="center" style={{ color: "rgb(88, 88, 88)" }}>
                  <b>ROLE</b>
                </TableCell>
                <TableCell align="center" style={{ color: "rgb(88, 88, 88)" }}>
                  <b>JOINED ON</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((val, ind) => {
                return (
                  <TableRow
                    key={ind}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {val.name}
                    </TableCell>
                    <TableCell align="center">{val.email}</TableCell>
                    <TableCell
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {val.role}
                    </TableCell>
                    <TableCell align="center">
                      {
                        <Moment format="DD/MMM/YYYY" withTitle>
                          {val.createdAt}
                        </Moment>
                      }
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </article>
    </section>
  );
};

export default Users;
