import { Navbar } from "./Navbar";
import styles from "../styles/Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
