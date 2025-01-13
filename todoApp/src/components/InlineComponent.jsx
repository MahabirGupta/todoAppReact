import { blue } from "@material-ui/core/colors";
const header = { color: "blue", fontSize: "140px" };
export default function InlineComponent() {
  return (
    <div>
      {/* the inner {} is to define an object */}
      <h1 style={header}>Inline Component</h1>
    </div>
  );
}
