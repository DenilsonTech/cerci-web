import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "../index.css";

/**
 * The page is drawn by JavaScript, so when the browser tries to jump to the
 * #anchor in the URL (e.g. /servicos/#fisioterapia) the section does not exist
 * yet and it stays at the top. Once the section is on the page, jump to it.
 */
function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;

  let frames = 0;
  const attempt = () => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "instant" });
    else if (++frames < 120) requestAnimationFrame(attempt);
  };
  requestAnimationFrame(attempt);
}

/** Renders a page into the #root of its HTML file. */
export function mount(page: ReactNode) {
  createRoot(document.getElementById("root")!).render(<StrictMode>{page}</StrictMode>);
  scrollToHash();
}
