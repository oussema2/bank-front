import React from "react";
import { countries } from "../conts/Countrys";

function MoreInfo() {
  return (
    <div
      style={{
        marginTop: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ width: "100%", textAlign: "left", marginBottom: "10px" }}>
        Civilité
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <select
            style={{
              height: "40px",
              border: "1px solid gray",
              width: "100%",
              color: "gray",
              outline: "none",
            }}
            name="motif"
            id="motif"
          >
            <option selected>ouverture de compte</option>
            <option>Text1</option>
            <option>Text1</option>
            <option>Text1</option>
            <option>Text1</option>
            <option>Text1</option>
          </select>
          <br />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <br />
        </div>
      </div>
      <p
        style={{
          width: "100%",
          textAlign: "left",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        étes-vous Tunisien:
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <input type="radio" name="gender" value="male" /> Résident en tunisie
          <br />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <input type="radio" name="gender" value="male" /> Non résident en
          tunisie
          <br />
        </div>
      </div>
      <p
        style={{
          width: "100%",
          textAlign: "left",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Veuiller choisir votre adresse
      </p>

      <p
        style={{
          width: "100%",
          textAlign: "left",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Pays
      </p>
      <select
        style={{
          height: "40px",
          border: "1px solid gray",
          width: "100%",
          color: "gray",
          outline: "none",
        }}
        name="motif"
        id="motif"
      >
        {countries.map((el) => (
          <option>{el}</option>
        ))}
      </select>
      <button
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "#5e72e4",
          padding: "10px",
          borderRadius: "15px",
          outline: "none",
          color: "white",
          marginTop: "20px",
        }}
      >
        CONTINUER
      </button>
    </div>
  );
}

export default MoreInfo;
