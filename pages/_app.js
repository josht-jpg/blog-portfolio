import Head from "next/head";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/globals.scss";
import "../styles/fadeIn.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
