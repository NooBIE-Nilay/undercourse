import landing from "../assets/landing.jpg";

function Landing() {
  return (
    <div style={{ height: "1000px" }}>
      <div>
        <img
          style={{
            position: "static",
            width: "100% ",
            top: "60px",
            bottom: "0px",
          }}
          src={landing}
        ></img>
        <div
          style={{
            position: "fixed",
            top: "150px",
            maxWidth: "750px",
            fontFamily: "monospace",
            color: "#c73659",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{ fontWeight: 700, fontSize: "32px", marginBottom: "10px" }}
          >
            Unleash Your Developer Potential: Master Full Stack Development
            Today!
          </h2>
          <h3 style={{ fontWeight: 600, fontSize: "24px", marginTop: "10px" }}>
            Learn in-demand skills to build the web applications of tomorrow.
          </h3>
          <div style={{ margin: "-5px" }}>
            <button> Login</button>
            <button> Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
