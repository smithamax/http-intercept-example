import { useContext } from "react";
import { debugContext } from "../components/DebugConsole";

export default function Home() {
  const thefetch = useContext(debugContext);

  return (
    <div>
      <button
        onClick={() => thefetch("/api/hello", { method: "POST", body: "boom" })}
      >
        Boom
      </button>
    </div>
  );
}
