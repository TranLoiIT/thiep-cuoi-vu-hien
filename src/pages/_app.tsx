import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/_app.scss";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
