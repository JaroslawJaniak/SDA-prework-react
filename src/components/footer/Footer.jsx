import styles from "./footer.module.css";

const Footer = ({ copyrightInfo, author }) => {
  return (
    <footer className={styles.footer}>
      {copyrightInfo} {author}
    </footer>
  );
};

export default Footer;
