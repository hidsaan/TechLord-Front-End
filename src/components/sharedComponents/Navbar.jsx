import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const [isloggedin, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token !== null) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const handleLogout = async () => {
    if (isloggedin) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/");
    }
  };

  return (
    <div className="navbar">
      <nav>
        <div className="header">
          <h1>
            {isloggedin ? (
              <Link to="./Dashboard">TechLord</Link>
            ) : (
              <Link to="./">TechLord</Link>
            )}
          </h1>
        </div>
        <div className="navlist">
          <ul>
            <li>
              {isloggedin ? (
                <Link to="./Dashboard">Home</Link>
              ) : (
                <Link to="./">Home</Link>
              )}
            </li>
            <li>
              <Link to="./Shop">Shop</Link>
            </li>
            {isloggedin && (
              <li>
                <Link to="./Sell">Sell</Link>
              </li>
            )}
            <li>
              <Link to="./About">About</Link>
            </li>
            <li>
              <Link to="./News">Explore News</Link>
            </li>
          </ul>
        </div>

        {!isloggedin && (
          <div className="loginbtndiv">
            <button
              onClick={() => {
                navigate("./Login");
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("./Register");
              }}
            >
              Sign Up
            </button>
          </div>
        )}
        {isloggedin && (
          <div className="loggedinstuff">
            <Link to={"./Cart"}>
              <FaCartPlus />
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
