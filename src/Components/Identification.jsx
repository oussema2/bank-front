import React from "react";

function Identification() {
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
          <input type="radio" name="gender" value="male" /> Male
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
          <input type="radio" name="gender" value="male" /> Female
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
        Nom Prenom
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
          <input
            required
            type="text"
            name="nom"
            value=""
            placeholder="Nom"
            style={{
              width: "95%",
              border: "none",
              outline: "none",
              height: "40px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          />
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
          <input
            required
            type="text"
            name="prenom"
            value=""
            placeholder="Prenom"
            style={{
              width: "95%",
              border: "none",
              outline: "none",
              height: "40px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          />
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
        Numéro de téléphone mobile & Email
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
          <input
            required
            type="tel"
            name="phone"
            value=""
            placeholder="+216 "
            style={{
              width: "95%",
              border: "none",
              outline: "none",
              height: "40px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          />
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
          <input
            required
            type="email"
            name="email"
            value=""
            placeholder="Email"
            style={{
              width: "95%",
              border: "none",
              outline: "none",
              height: "40px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          />
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
        Pays de naissance & date de naissance
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
          <input
            required
            type="text"
            name="pays"
            value=""
            placeholder="Eg : tunis "
            style={{
              width: "95%",
              border: "none",
              outline: "none",
              height: "40px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          />
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
          <input
            required
            type="date"
            name="date"
            value=""
            style={{
              width: "95%",
              border: "none",
              outline: "none",
              height: "40px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          />
        </div>
      </div>
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

export default Identification;
