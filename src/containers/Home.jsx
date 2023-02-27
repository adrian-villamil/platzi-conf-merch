import React from "react";
import { Helmet } from "react-helmet";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FelipeA59757082" />
        <meta name="twitter:creator" content="@FelipeA59757082" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/D4E03AQGYZG11Itd9Iw/profile-displayphoto-shrink_800_800/0/1664666239064?e=1683158400&v=beta&t=VSxK1QwuzuDrWxFgO2SeQI6tkxr1euKLGPH3uZTF8Bs"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/D4E03AQGYZG11Itd9Iw/profile-displayphoto-shrink_800_800/0/1664666239064?e=1683158400&v=beta&t=VSxK1QwuzuDrWxFgO2SeQI6tkxr1euKLGPH3uZTF8Bs"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products />
    </>
  );
};

export default Home;