import React, { useState } from "react";

let n = 0;

export function useApi() {
  const [debug, setDebug] = useState(false);
  const [request, setRequest] = useState<{ input: string; opts: any }>();
  const [body, setBody] = useState<string>();

  console.log("init", n++);
  function newFetch(input: string, opts: any) {
    console.log(n);
    if (!debug) {
      return fetch(input, opts);
    }
    setRequest({ input, opts });
    setBody(opts.body);
  }

  function sendMod() {
    if (!request) return;
    const { input, opts } = request;
    return fetch(input, { ...opts, body });
  }

  return { fetch: newFetch, sendMod, body, setBody, debug, setDebug };
}
