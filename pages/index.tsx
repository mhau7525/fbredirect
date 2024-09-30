import { useEffect } from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  useEffect(() => {
    const obtenerPais = async () => {
      const response = await fetch('https://ipinfo.io/json?token=YOUR_TOKEN', { mode: 'cors' });
      const data = await response.json();
      const country = data.country;

      const redirecciones: { [key: string]: string } = {
        'IR': 'https://www.youtube.com/',
        'US': 'https://www.youtube.com/',
        'SE': 'https://www.facebook.com/',
      };

      if (redirecciones[country]) {
        window.location.href = redirecciones[country];
      }
    };

    obtenerPais();
  }, []);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="live" />
        <meta name="keywords" content="" />
        <meta name="generator" content="WordPress 5.3.2" />
        <title>🔥online vide🔥</title>
        <link rel="canonical" href="./₮৲৳௹฿៛₠.html" />
        <meta name="theme-color" content="#563d7c" />
        <meta property="og:url" content="./₮৲৳௹฿៛₠.html" />
        <meta name="robots" content="NOINDEX,NOFOLLOW,NOARCHIVE,NOODP,NOSNIPPET" />
      </Head>
      <body>
        {/* Các nội dung khác nếu cần */}
      </body>
    </>
  );
};

export default Home;
