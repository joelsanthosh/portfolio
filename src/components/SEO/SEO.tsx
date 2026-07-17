import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Joel Santhosh Raja - Lead Software Engineer & Frontend Developer. Building high-performance, beautiful React and Node.js applications.",
  keywords = "React Developer, Frontend Engineer, TypeScript, Vite, Portfolio, Joel Santhosh Raja",
  image = "/logo.png",
  url = "https://joelsanthosh.github.io",
  type = "website",
}) => {
  const fullTitle = `${title} | Joel Santhosh Raja`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
