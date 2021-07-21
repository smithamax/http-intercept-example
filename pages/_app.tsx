import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DebugConsole } from "../components/DebugConsole";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DebugConsole>
      <Component {...pageProps} />
    </DebugConsole>
  );
}
export default MyApp;
