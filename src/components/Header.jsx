import Navbar from "./Navbar"


const Header = () => {
  return (
    <header id="header" className="header">
      <img className="header__circlesleft" src="src/assets/img/puntos.svg" alt="img puntos" />
          
              <Navbar />
      <div className="container">

          <div className="info">
              <div>
                <p className="info__text">¡Hola!,</p>
                <p className="info__text">Soy Lucia Zabaleta</p>
                <p className="info__text">Front-End Developer</p>
                <button className="info__btn" type="button"><span>Contáctame</span></button>
              </div>

              <div>
                <img className="info__img" alt="chica inicio" src="src/assets/img/img1.webp" />
              </div>

              <div className="info__icons">
                <a className="info__icons__a" href="#" title="Github"><img className="info__icons__img" src="src/assets/img/github.svg" alt="github icon" /></a>
                <a className="info__icons__a" href="#" title="LinkedIn"><img className="info__icons__img" src="src/assets/img/linkedin.svg" alt="linkedin icon" /></a>
                <a className="info__icons__a" href="#" title="Email"><img className="info__icons__img" src="src/assets/img/email.svg" alt="email icon" /></a>
              </div>

          </div>
      </div>
        <img className="header__imgrecta" src="src/assets/img/rectangulo.svg" alt="img rectangulo"/>
        
    </header>
  )
}

export default Header