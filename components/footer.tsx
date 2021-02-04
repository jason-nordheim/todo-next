export const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        alignContent: "center",
        bottom: 0,
      }}
      className="page-footer"
    >
      &copy; {new Date().getFullYear()}
    </footer>
  );
};
export default Footer;
