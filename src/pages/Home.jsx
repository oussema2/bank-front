import React from "react";
import NavBar from "../Components/NavBar";

function Home() {
  return (
    <div style={{ width: "100%", backgroundColor: "red" }}>
      <NavBar />
      <img
        src="	https://stbdigital.stb.com.tn/stbeverywhere/assets/bg.jpg"
        alt="home-pic"
        style={{ width: "100%", minHeight: "700px" }}
      />
    </div>
  );
}

export default Home;
