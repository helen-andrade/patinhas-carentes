import LogoImg from "../../../public/logo.png";
import LogoMenuImg from "../../../public/logo-menu.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={LogoMenuImg} alt="" width="45" className="d-inline-block align-text-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-primary" aria-current="page" href="#">Encontre uma ONG</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">Sou uma ONG</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="row flex-grow-1">
        <div className="col-md-2"></div>
        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
          <img src={LogoImg} />
          <h1 className="text-secondary mb-4 mt-5">Adote amor, encontre companheirismo.</h1>
          <p className="text-center text-info col-md-10 mb-5">
            Fazemos a ligação perfeita entre corações humanos e patinhas carentes.
            Encontre o companheiro peludo que é a combinação perfeita para você.
            Se você faz parte de uma ONG, ajude a dar uma nova chance aos seus animais divulgando-os aqui.
            Juntos, podemos transformar vidas!
          </p>

          <button type="button" className="btn btn-primary">Encontre uma ONG</button>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row">
        <div className="col-md-12 d-flex">
          <p className="px-2 text-primary">© 2024 Patinhas Carentes</p>
          <Link to="/about-us" className="px-4 text-primary text-decoration-underline">Sobre nós</Link>
        </div>
      </div>
    </div>
  )
}
