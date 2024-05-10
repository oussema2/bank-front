import React from "react";

function ValidationSecond() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "24px",
        width: "100%",
        marginTop: "50px",
      }}
    >
      <p style={{ fontSize: "24px", fontWeight: "normal" }}>
        Saisissez votre code de sécurité reçu par SMS
      </p>
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>Code de sécurite</p>
      <input
        style={{
          width: "250px",
          backgroundColor: "white",
          border: "none",
          height: "40px",
          borderRadius: "10px",
          padding: "5px",
          boxShadow:
            " rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
        type="text"
        placeholder="code"
      />

      <button
        style={{
          marginTop: "50px",
          width: "100%",
          padding: 10,
          borderRadius: "18px",
          border: "none",
          backgroundColor: "blue",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Continuer
      </button>
    </div>
  );
}

export default ValidationSecond;
