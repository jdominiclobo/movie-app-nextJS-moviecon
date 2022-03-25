import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieCon</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>The Movie App</h1>
    </div>
  );
}
