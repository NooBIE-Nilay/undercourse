import { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AppBar() {
  const navigate = useNavigate();
  const curHour = new Date().getHours();
  let message =
    "Good " +
    (curHour >= 0 && curHour < 12
      ? "Morning"
      : curHour == 12
      ? " Noon"
      : curHour > 12 && curHour < 17
      ? "Afternoon"
      : "Evening");
  const [avatarUrl, setAvatarUrl] = useState(
    "https://avatar.iran.liara.run/public/48"
  );
  const [username, setUsername] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setAvatarUrl(res.data.avatarUrl);
        setUsername(res.data.username);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        top: "0px",
        height: "60px",
        right: "0px",
        left: "0px",
        paddingLeft: "10px",
        position: "fixed",
        justifyContent: "space-between",
        backgroundColor: "#c73659",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          alt="logo"
          src={logo}
          style={{
            maxHeight: "40px",
            maxWidth: "40px",
          }}
        ></img>
        <h1
          style={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            fontSize: "24px",
            margin: "15px",
          }}
        >
          UNDERCOURSE
        </h1>
      </div>

      {!username && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button onClick={() => navigate("/register")}>Signup</button>
        </div>
      )}
      {username && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontWeight: 500,
              color: "white",
              fontSize: "16px",
              margin: "12px",
            }}
          >
            {message}, {username}
          </div>
          <img
            src={avatarUrl}
            alt="avatar"
            style={{
              maxWidth: "38px",
              maxHeight: "38px",
              borderRadius: "25px",
              marginRight: "7px",
            }}
          ></img>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setUsername(undefined);
              setAvatarUrl(undefined);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
export default AppBar;
