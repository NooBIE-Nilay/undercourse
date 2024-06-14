import notFound from "../assets/notfound.png";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p
          style={{
            fontFamily: "Inconsolata, monospace",
            fontSize: "20px",
            fontWeight: "900",
            color: "#C73659",
            marginTop: "100px",
            marginLeft: "60px",
          }}
        >
          404 NOT FOUND
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px",
            columnGap: "40px",
          }}
        >
          <img
            src={notFound}
            alt="Not Found.png"
            style={{ maxWidth: "600px" }}
          ></img>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontWeight: "700",
                maxWidth: "400px",
                fontSize: "20px",
              }}
            >
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <button
              style={{ padding: "10px 18px", fontSize: "18px" }}
              onClick={() => navigate("/")}
            >
              Return To Homepage
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
            fontFamily: "sans-serif",
            fontSize: "18px",
            color: "#c73659",
            padding: "10px",
            fontWeight: 600,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          Made with
          <span style={{ fontSize: "25px", margin: "0 20px" }}>&#128187;</span>&
          <span style={{ fontSize: "50px", margin: "0 20px" }}> &#9000; </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "sans-serif",
            fontSize: "18px",
            color: "#c73659",
            padding: "10px ",
            fontWeight: 600,
            textAlign: "center",
            marginTop: "-20px",
          }}
        >
          undercourse.nilaycodes.in
        </div>
      </div>
    </>
  );
}
export default NotFound;
