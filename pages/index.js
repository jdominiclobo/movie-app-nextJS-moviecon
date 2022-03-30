import Head from "next/head";
import Search from "../components/SearchComponent/Search";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieCon</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <Search />
    </div>
  );
}
