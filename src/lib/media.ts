const base = import.meta.env.VITE_MEDIA_URL;

export const media = (path: string) => `${base}/${encodeURI(path)}`;

export const mediaFallback = (path: string) =>
  `/img/${path.split("/").map(encodeURIComponent).join("/")}`;