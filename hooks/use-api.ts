import React, { useState } from "react";

export function useApi() {
  const [debug, setDebug] = useState(false);
  const [request, setRequest] = useState<{ input: string; opts: any }>();
  const [body, setBody] = useState<string>();

  function newFetch(input: string, opts: any) {
    if (!debug) {
      return fetch(input, opts);
    }
    setRequest({ input, opts });
    setBody(opts.body);

    // TODO return result promise
  }

  function sendMod() {
    if (!request) return;
    const { input, opts } = request;
    return fetch(input, { ...opts, body });
  }

  return { fetch: newFetch, sendMod, body, setBody, debug, setDebug };
}
