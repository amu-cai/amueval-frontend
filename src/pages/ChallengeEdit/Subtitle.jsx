export default function Subtitle({ children }) {
  return (
    <div
      style={{
        fontWeight: "400",
        fontFamily: `"Inter", sans-serif`,
        lineHeight: "22px",
        letterSpacing: "-3%",
        fontSize: "16px",
        margin: "0px 0px 10px 8px",
        color: "rgba(94, 94, 94, 1)",
      }}
    >
      {children}
    </div>
  );
}
