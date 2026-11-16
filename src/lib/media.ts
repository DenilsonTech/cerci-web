const base = import.meta.env.VITE_MEDIA_URL;

export const media = (path: string) => `${base}/${encodeURI(path)}`;