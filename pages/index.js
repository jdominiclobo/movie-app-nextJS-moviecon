import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Fair</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
    </div>
  );
}
