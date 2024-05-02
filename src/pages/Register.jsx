import React, { useState } from "react";
import Identification from "../Components/Identification";
import MoreInfo from "../Components/MoreInfo";
import Validation from "../Components/Validation";

const STEPS = {
  0: { component: <Identification />, title: "Identification" },
  1: { component: <MoreInfo />, title: "Mieu vou connaitre" },
  2: { component: <Validation /> },
};

function Register() {
  const [steps, setsteps] = useState(0);
  const Component = STEPS[steps].component;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        backgroundColor: "#003d86",
        width: "100%",
        padding: "100px 150px 100px 150px ",
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
          height: "100%",
        }}
      >
        <button
          onClick={() => setsteps(0)}
          style={{
            backgroundColor: steps === 0 ? "white" : "transparent",
            color: steps === 0 ? "blue" : "white",
            borderRadius: "18px",
            padding: "10px 0px 10px 0px",
            textTransform: "uppercase",
            border: "1px solid white",
            maxWidth: "180px",
            minWidth: "180px",
          }}
        >
          IDENTIFICATI0N
        </button>
        <button
          onClick={() => setsteps(1)}
          style={{
            backgroundColor: steps === 1 ? "white" : "transparent",
            color: steps === 1 ? "blue" : "white",
            borderRadius: "18px",
            padding: "10px 0px 10px 0px",
            textTransform: "uppercase",
            border: "1px solid white",
            maxWidth: "180px",
            minWidth: "180px",
          }}
        >
          Mieux vous connaître{" "}
        </button>
        <button
          onClick={() => setsteps(2)}
          style={{
            backgroundColor: steps === 2 ? "white" : "transparent",
            color: steps === 2 ? "blue" : "white",
            borderRadius: "18px",
            padding: "10px 0px 10px 0px",
            textTransform: "uppercase",
            border: "1px solid white",
            maxWidth: "180px",
            minWidth: "180px",
          }}
        >
          Validation
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          flex: 3,
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "3rem",
            backgroundColor: "white",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
            minHeight: "500px",
          }}
        >
          {STEPS[steps].title ? (
            <p
              style={{
                width: "100%",
                textAlign: "center",
                fontWeight: "800",
                fontSize: "28px",
                color: "white",
                backgroundColor: "#003176",
                borderRadius: "18px",
                padding: "10px",
              }}
            >
              {STEPS[steps].title}
            </p>
          ) : null}
          {/* <Identification /> */}
          {Component}
        </div>
      </div>
    </div>
  );
}

export default Register;
