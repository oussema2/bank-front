import React from "react";

function ComplementaryInfo() {
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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "5px",
        }}
      >
        <p style={{ fontSize: "16px", fontWeight: "600" }}>Motif</p>
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
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "5px",
        }}
      >
        <p style={{ fontSize: "16px", fontWeight: "600" }}>
          Etes-vous Tunisien
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "15px",
            }}
          >
            <input type="radio" /> Résident en tunisie
          </div>
          <div style={{ flex: 1 }}>
            <input type="radio" /> Résident en tunisie
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "16px",
            gap: "10px",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "15px",
            }}
          >
            <p>Pays</p>
            <select style={{ width: "100%", height: "40px" }}>
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
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "15px",
            }}
          >
            <p>Governorat</p>
            <select style={{ width: "100%", height: "40px" }}>
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
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "15px",
            }}
          >
            <p>Ville</p>
            <select style={{ width: "100%", height: "40px" }}>
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
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "15px",
            }}
          >
            <p>Code Postal</p>
            <select style={{ width: "100%", height: "40px" }}>
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
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flex: 1,
            gap: "10px",
          }}
        >
          <p>Numero</p>
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
            flex: 4,
            gap: "10px",
          }}
        >
          <p>Rue / Résidente / Autres</p>
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

export default ComplementaryInfo;
