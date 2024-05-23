import "./style.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer container">
      <p className="footer__caption txt-center">
        Theodor Dumitriu © {currentYear}
      </p>
    </footer>
  );
}
