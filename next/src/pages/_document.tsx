import NextDocument, { Html, Head, Main, NextScript } from "next/document"


const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="portfolio" content="MyApp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;