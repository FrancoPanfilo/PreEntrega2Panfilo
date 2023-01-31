function Footer() {
  return (
    <footer className="text-center text-lg-start pie" id="Contacto">
      <div className="container d-flex justify-content-center py-5">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2"
          style="background-color: #54456b;"
        >
          <a href="https://github.com/FrancoPanfilo">
            <i className="bi bi-github"></i>
          </a>
        </button>
      </div>
      <div
        className="text-center text-white p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
