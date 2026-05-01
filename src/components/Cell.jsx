import { COLORS } from "../logic/constants";
export default function Cell({
  state, // tells cell type
  label,
}) {
  let bg = COLORS.unknown;

  if (state === "safe") bg = COLORS.safeCell;
  if (state === "danger") bg = COLORS.dangerCell;
  if (state === "visited") bg = COLORS.visited;
  if (state === "agent") bg = COLORS.agentCell;
  return (
    <div
      style={{
        width: 60,
        height: 60,
        background: bg,
        border: "1px solid #000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
      }}
    >
      {label}
    </div>
  );
}