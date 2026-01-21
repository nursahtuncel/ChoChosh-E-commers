import React from "react";
import "../css/header.css";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
const Header = () => {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const changeTheme = () => {
    const body = document.getElementById("root");
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      body.style.backgroundColor = "#121212";
      body.style.color = "white";
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    }
  };

  return (
    <div

      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="flex-row">
        <p onClick={()=>navigate("/")} className="logoText">ChoChosh</p>
      </div>
      <div>
        {" "}
        <input
          className="input"
          placeholder="Birşeyler ara.."
          type="text"
        />{" "}
      </div>

      <div className="flex-row">
        {/* <FaMoon className='icon ' /> */}
        {theme === "light" ? (
          <FaMoon onClick={changeTheme} className="icon " />
        ) : (
          <CiLight onClick={changeTheme} className="icon " />
        )}
            <Badge badgeContent={4} color="error">
  <FaBasketShopping className="icon" />

    </Badge>
     
      </div>
    </div>
  );
};

export default Header;
