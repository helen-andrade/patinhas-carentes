import LogoImg from "../../../public/logo.png";

export default function LandingPage() {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
        <img src={LogoImg} />
        <h1>Adote amor, encontre companheirismo.</h1>
        <p>Fazemos a ligação perfeita entre corações humanos e patinhas carentes.
          Encontre o companheiro peludo que é a combinação perfeita para você.
          Se você faz parte de uma ONG, ajude a dar uma nova chance aos seus animais divulgando-os aqui.
          Juntos, podemos transformar vidas!
        </p>

        <button type="button" className="btn btn-primary">Encontre uma ONG</button>
      </div>
      <div className="col-md-2"></div>
    </div>
  )
}
