import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";
import Loading from "./components/Loading";

function Root() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded = false;
    const onPageLoad = () => {
      loaded = true;
      // slightly longer delay so the watch animation is noticeable
      setTimeout(() => setReady(true), 800);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // fallback in case the load event doesn't fire quickly (dev / SPA)
      const fallback = setTimeout(() => {
        if (!loaded) setReady(true);
      }, 1500);

      return () => {
        window.removeEventListener("load", onPageLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <>
      <Loading visible={!ready} />
      {ready && <App />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);
