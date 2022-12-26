import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Looney</title>
        <meta name="description" content="Looney" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <h1>Hello, World!</h1>
      </main>
    </>
  );
};

export default Home;
