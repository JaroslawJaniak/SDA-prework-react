import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <header className={`${styles.headerContainer} ${styles.stickyHeader}`}>
      <h2>Redux - Hooks - ReactApp Vite - Prework</h2>
      <nav>
        <Link to="/" className={styles.headerLink}>
          VitePage
        </Link>
        <Link to="/component1" className={styles.headerLink}>
          Component1
        </Link>
        <Link to="/component2" className={styles.headerLink}>
          Component2
        </Link>
        <Link to="/component3" className={styles.headerLink}>
          Component3
        </Link>
      </nav>
    </header>
  );
};

export default Header;
