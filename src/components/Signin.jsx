import { useState } from "react";
function Signin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div
        style={{
          backgroundColor: "#EEEEEE",
          marginTop: "60px",
          height: "100%",
          width: "100%",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "350px",
            height: "450px",
            borderRadius: "25px",
            backgroundColor: "#C73659",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "40px",
              color: "#EEEEEE",
              fontWeight: "600",
            }}
          >
            LOGIN
          </div>
          <div>
            <input
              style={{
                borderRadius: "3px",
                border: "none",
                fontSize: "20px",
                padding: "8px",
              }}
              placeholder="Username"
              type="text"
            />
          </div>
          <div>
            <input
              style={{
                borderRadius: "3px",
                border: "none",
                fontSize: "20px",
                padding: "8px",
              }}
              placeholder="Password"
              type="password"
            />
          </div>
          <button>Login</button>
          <label
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#EEEEEE",
            }}
          >
            New User! <a href="register">Register Now</a>
          </label>
        </div>
      </div>
    </>
  );
}
export default Signin;
