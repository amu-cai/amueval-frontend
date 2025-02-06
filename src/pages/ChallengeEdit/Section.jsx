import React from "react";

function TitleHeader({ title }) {
  return (
    <div
      style={{
        paddingLeft: "8px",
        paddingBottom: "14px",
        borderBottom: "1px solid rgba(94, 94, 94, 1)",
      }}
    >
      <h2
        style={{
          fontFamily: "coolvetica-condensed-regular, sans-serif",
          fontSize: "28px",
          lineHeight: "33.6px",
          letterSpacing: "2%",
          fontWeight: "400",
          margin: "0",
          color: "black",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function Section({ title, children }) {
  return (
    <div
      style={{
        alignSelf: "start",
        margin: "0",
        width: "100%",
      }}
    >
      <TitleHeader title={title} />
      <div style={{ paddingTop: "20px" }}>{children}</div>
    </div>
  );
}
