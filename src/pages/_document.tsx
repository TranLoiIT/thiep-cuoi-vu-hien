import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const siteUrl = "https://thiep-cuoi-cuc-loi.netlify.app/";
  return (
    <Html lang="vn">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Reddit+Sans+Condensed:wght@200..900&family=Domine:wght@400..700&family=Great+Vibes&family=Ms+Madi&family=WindSong:wght@400;500&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>THƯ MỜI CƯỚI TRẦN LỢI & THU CÚC</title>
        <meta
          name="description"
          content="Thư mời cưới Trần Lợi & Thu Cúc. Mời mọi người đến chung vui cùng bọn em và gia đình ạ."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Thư mời cưới Trần Lợi & Thu Cúc" />
        <meta
          property="og:description"
          content="Thư mời cưới Trần Lợi & Thu Cúc. Mời mọi người đến chung vui cùng bọn em và gia đình ạ."
        />
        <meta property="og:image" content={`${siteUrl}/images/3.jpg`} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
