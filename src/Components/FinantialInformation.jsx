import React, { useState } from "react";

function FinantialInformation() {
  const [formData, setFormData] = useState({ selfi: null });
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "16px",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "16px",
            flex: 1,
          }}
        >
          <p>Votre numer cin est :</p>
          <input
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "white",
              border: "none",
              outline: "none",
              boxShadow:
                " rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "16px",
            flex: 1,
          }}
        >
          <p>Votre numer cin est :</p>
          <input
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "white",
              border: "none",
              outline: "none",
              boxShadow:
                " rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            width: "250px",
            backgroundColor: "blue",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 15px",
            borderRadius: "24px",
          }}
        >
          <p style={{ color: "white", fontSize: "18px", fontWeight: "800" }}>
            Prendre un Selfie
          </p>
          <input
            onChange={(e) =>
              setFormData({ ...formData, selfi: e.target.files[0] })
            }
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              opacity: 0,
              zIndex: 999,
            }}
            type="file"
            accept="image/*"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "16px",
        }}
      >
        {formData.selfi ? (
          <img
            src={URL.createObjectURL(formData.selfi)}
            style={{ width: "500px", height: "450px", objectFit: "cover" }}
            alt="zfdsqd"
          />
        ) : null}
      </div>
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

export default FinantialInformation;
