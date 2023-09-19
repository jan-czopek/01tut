function Footer({ length }) {
  const today = new Date();
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <span className="text-light">
          Copyright &copy; {today.getFullYear()}
          {"        ---     " + length}
        </span>
        <span className="text-light"></span>
      </div>
    </footer>
  );
}

export default Footer;
