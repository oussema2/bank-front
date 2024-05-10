import React, { useState } from "react";

function PIdentity() {
  const [formData, setFormData] = useState({
    cin: "",
    recto: null,
    verso: null,
  });
  console.log(formData);
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
      <p>Plus d'information</p>
      <p>Veuiller chopisir le type de piece identité</p>
      <select style={{ width: "200px", padding: "14px 8px" }}>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
        <option>Op 1 </option>
      </select>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
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
            Choisir CIN Recto
          </p>
          <input
            onChange={(e) =>
              setFormData({ ...formData, recto: e.target.files[0] })
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
        {formData.recto ? (
          <img
            alt="tes"
            style={{ width: "250px", height: "100px" }}
            src={URL.createObjectURL(formData.recto)}
          />
        ) : null}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
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
            Choisir CIN Verso
          </p>
          <input
            onChange={(e) =>
              setFormData({ ...formData, verso: e.target.files[0] })
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
        {formData.verso ? (
          <img
            alt="tes"
            style={{ width: "250px", height: "100px" }}
            src={URL.createObjectURL(formData.verso)}
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

export default PIdentity;
