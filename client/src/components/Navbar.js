import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";

const NavBar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);

  const getRightNav = () => {
    if (user) {
      return (
        <>
          <div
            onClick={() => handleLogout(history)}
            style={{ color: "#5D2E8C" }}
          >
            Logout
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link to="/register">register</Link>
          <span style={{ marginRight: "10px" }}></span>
          <Link to="/login">login</Link>
        </>
      );
    }
  };

  return (
    <div style={styles.navbar}>
      <div>
        <span style={{ marginRight: "10px" }}></span>
        {user && <Link to="/home">Home</Link>}
      </div>
      <div>{getRightNav()}</div>
    </div>
  );
};

const styles = {
  navbar: {
    width: "100%",
    background: "#FF6666",
    textColor: "#5D2E8C",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default NavBar;
