import Link from "next/link";
import navbarStyles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <Link href="/">
        <a className={navbarStyles.title}>MovieFair</a>
      </Link>
      <ul className={navbarStyles.links}>
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/actors">Actors</Link>
        </li>
      </ul>
    </nav>
  );
};
