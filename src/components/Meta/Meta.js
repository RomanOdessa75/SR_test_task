import { Helmet } from "react-helmet";

const Meta = () => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content="Carpathian's Secrets" />
      <meta property="og:site_name" content="Carpathian's Secrets" />
      <meta
        property="og:description"
        content="Welcome to CARPATHIAN'S SECRETS! Our website is dedicated to all adventure seekers and nature lovers who want to explore the breathtaking beauty of mountains."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://softryzen-test.vercel.app/carpatians-secrets.png"
      />
      <meta property="og:image:type" content="image/jpeg" />

      <meta property="og:image:alt" content="Carpathian's Secrets website" />
      <meta property="og:url" content="https://softryzen-test.vercel.app/" />
      <meta property="og:image:width" content="1200px" />
      <meta property="og:image:height" content="630px" />
      <meta property="og:locala" content="en_US" />
      <meta
        name="twitter:image"
        content="https://softryzen-test.vercel.app/carpatians-secrets.png"
      />
      <meta name="twitter:image:type" content="image/jpeg" />
      <meta name="twitter:image:width" content="1200px" />
      <meta name="twitter:image:height" content="630px" />
    </Helmet>
  );
};

export default Meta;
