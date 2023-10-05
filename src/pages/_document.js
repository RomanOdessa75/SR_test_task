import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Carpathian's Secrets" />
          <meta
            property="og:description"
            content="Welcome to CARPATHIAN'S SECRETS! Our website is dedicated to all adventure seekers and nature lovers who want to explore the breathtaking beauty of mountains."
          />
          <meta
            property="og:image"
            content="https://metatags.io/images/meta-tags.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Carpathian's Secrets" />
          <meta
            property="twitter:description"
            content="Welcome to CARPATHIAN'S SECRETS! Our website is dedicated to all adventure seekers and nature lovers who want to explore the breathtaking beauty of mountains."
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/images/meta-tags.png"
          />
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
