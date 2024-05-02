import React from "react";

function Validation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <img
        alt="email-pic"
        src={`${process.env.PUBLIC_URL}/email-pic.png`}
        style={{ width: "450px", height: "250px" }}
      />
      <p style={{ width: "100%", textAlign: "center", fontSize: "24px" }}>
        Cliquer sur Continuer
      </p>
      <p style={{ width: "100%", textAlign: "center", fontSize: "24px" }}>
        Un lien vous sera envoyé sur votre boite "-mail
      </p>
      <button
        style={{
          width: "150px",
          backgroundColor: "blue",
          borderRadius: "10px",
          color: "white",
          fontSize: "16px",
          padding: "10px 0 10px 0",
          marginTop: "10px",
          outline: "none",
          border: "none",
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default Validation;
