function Signup() {
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
            REGISTER
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
          <div>
            <input
              style={{
                borderRadius: "3px",
                border: "none",
                fontSize: "20px",
                padding: "8px",
              }}
              placeholder="Repeat Password"
              type="password"
            />
          </div>
          <button>Signup</button>
          <label
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#EEEEEE",
            }}
          >
            Already Signup Up! <a href="login">Login Now</a>
          </label>
        </div>
      </div>
    </>
  );
}
export default Signup;
