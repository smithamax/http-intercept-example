import { createContext, useContext, useState } from "react";
import { useApi } from "../hooks/use-api";

export const debugContext = createContext<any>(null);

export function DebugConsole(props: any) {
  const { body, setBody, sendMod, setDebug, debug, fetch } = useApi();

  return (
    <div>
      <debugContext.Provider value={fetch}>
        {props.children}
      </debugContext.Provider>

      <button onClick={() => setDebug((o) => !o)}>toggle</button>

      {debug && (
        <div>
          <textarea onChange={(e) => setBody(e.target.value)}>{body}</textarea>
          <button onClick={() => sendMod()}>send</button>
        </div>
      )}
    </div>
  );
}
