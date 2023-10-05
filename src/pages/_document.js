import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta property="og:title" content="Carpathian's Secrets" />
          <meta property="og:site_name" content="Carpathian's Secrets" />
          <meta
            property="og:description"
            content="Welcome to CARPATHIAN'S SECRETS! Our website is dedicated to all adventure seekers and nature lovers who want to explore the breathtaking beauty of mountains."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://softryzen-test.vercel.app/Carpatians-secrets.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />

          <meta
            property="og:image:alt"
            content="Carpathian's Secrets website"
          />
          <meta
            property="og:url"
            content="https://softryzen-test.vercel.app/"
          />
          <meta property="og:image:width" content="1200px" />
          <meta property="og:image:height" content="630px" />
          <meta property="og:locala" content="en_US" />
          <meta
            name="twitter:image"
            content="https://softryzen-test.vercel.app/Carpatians-secrets.jpg"
          />
          <meta name="twitter:image:type" content="image/jpeg" />
          <meta name="twitter:image:width" content="1200px" />
          <meta name="twitter:image:height" content="630px" /> */}
		

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="Carpathian's Secrets" />
<meta property="og:description" content="Welcome to CARPATHIAN'S SECRETS! Our website is dedicated to all adventure seekers and nature lovers who want to explore the breathtaking beauty of mountains." />
<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="Carpathian's Secrets" />
<meta property="twitter:description" content="Welcome to CARPATHIAN'S SECRETS! Our website is dedicated to all adventure seekers and nature lovers who want to explore the breathtaking beauty of mountains." />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

<!-- Meta Tags Generated with https://metatags.io -->
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
