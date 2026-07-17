export const getImageurl = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const baseNormalized = base.endsWith("/") ? base : `${base}/`;
  return `${baseNormalized}assets/${path}`;
};
