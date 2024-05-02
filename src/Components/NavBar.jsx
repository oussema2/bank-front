import React from "react";

function NavBar() {
  return (
    <div
      style={{
        width: "100%",
        background: "#002148",
        padding: "20px 70px 20px 70px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="/">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://stbdigital.stb.com.tn/stbeverywhere/assets/logo_stb.png"
            alt="icon"
            style={{ width: "50px", height: "50px" }}
          />
          <p style={{ color: "white", fontWeight: "800", fontSize: "18px" }}>
            STB Everywhere
          </p>
        </div>
      </a>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <a
          href="/signin"
          style={{
            fontSize: "16px",
            padding: "16px 28px 16px 28px",
            borderRadius: "25px",
            backgroundColor: "#2768f5",
            textDecoration: "none",
            color: "white",
          }}
        >
          Espace Client
        </a>
        <a
          style={{
            fontSize: "16px",
            padding: "16px 20px 16px 20px",
            borderRadius: "25px",
            backgroundColor: "#2768f5",
            textDecoration: "none",
            color: "white",
          }}
          href="/register"
        >
          Devenir client
        </a>
      </div>
    </div>
  );
}

export default NavBar;
