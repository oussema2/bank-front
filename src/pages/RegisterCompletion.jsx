import React, { useState } from "react";
import ComplementaryInfo from "../Components/ComplementaryInfo";
import FinantialInformation from "../Components/FinantialInformation";
import OtherInformation from "../Components/OtherInformation";
import PIdentity from "../Components/Pidentity";
import AgencyChoice from "../Components/AgencyChoice";
import DocumentsSignature from "../Components/DocumentsSignature";
import CreatePassword from "../Components/CreatePassword";
import ValidationSecond from "../Components/Validation-sec";
const STEPS = {
  0: { component: <ValidationSecond />, title: "Validation" },
  1: { component: <ComplementaryInfo />, title: "Information Complementaire" },
  2: { component: <FinantialInformation />, title: "Information financiére" },
  3: { component: <OtherInformation />, title: "Autre Informations" },
  4: { component: <PIdentity />, title: "Piéce identiter" },
  5: { component: <AgencyChoice />, title: "Chois D'agence" },
  6: { component: <DocumentsSignature />, title: "Signature des documents" },
  7: { component: <CreatePassword />, title: "Je créé mon mot de passe" },
};
function RegisterCompletion() {
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
        {Object.keys(STEPS).map((k) => {
          console.log(steps, k);
          return (
            <button
              onClick={() => setsteps(k + "")}
              style={{
                backgroundColor: steps + "" === k ? "white" : "transparent",
                color: steps + "" === k ? "blue" : "white",
                borderRadius: "18px",
                padding: "10px 0px 10px 0px",
                textTransform: "uppercase",
                border: "1px solid white",
                maxWidth: "180px",
                minWidth: "280px",
              }}
            >
              {STEPS[k].title}
            </button>
          );
        })}
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
            backgroundColor: "#ebe8e1",
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

export default RegisterCompletion;
