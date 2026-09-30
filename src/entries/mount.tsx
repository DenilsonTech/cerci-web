import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "../index.css";

/** Renders a page into the #root of its HTML file. */
export function mount(page: ReactNode) {
  createRoot(document.getElementById("root")!).render(<StrictMode>{page}</StrictMode>);
}
