import Navbar from "./Navbar"

const Header = () => {

  const handleCopy = async () => {
    try {
      let content = "luciazabaletag@gmail.com";
      const text = document.getElementById("copy-text")
      text.classList.remove("info__icons__tooltip-copyOff")
      text.classList.add("info__icons__tooltip-copyOn")
      setTimeout(() => {
        text.classList.add("info__icons__tooltip-copyOff")
      }, 3000);
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header id="header" className="header">
      <img className="header__circlesleft" src="/img/puntos.svg" alt="img puntos" />
          
              <Navbar />
      <div className="container">

          <div className="info">
              <div>
                <p className="info__text">¡Hola!,</p>
                <p className="info__text">Soy Lucia Zabaleta</p>
                <p className="info__text">Front-End Developer</p>
                <a className="info__btn" href="#contactid">Contáctame</a>
              </div>

              <div>
                <img className="info__img" alt="imagen inicio" src="/img/img1.webp" />
              </div>

              <div className="info__icons">
                <a className="info__icons__a" href="https://github.com/luciazabaletag" target="_blank" rel="noreferrer" title="Github"><img className="info__icons__img" src="/img/github.svg" alt="github icon" /></a>
                <a className="info__icons__a" href="https://www.linkedin.com/in/luciazabaletagirod" target="_blank" rel="noreferrer" title="LinkedIn"><img className="info__icons__img" src="/img/linkedin.svg" alt="linkedin icon" /></a>
                <a className="info__icons__a info__icons__a-tooltip" onClick={handleCopy}>
                  <img className="info__icons__img" src="/img/email.svg" alt="email icon" />
                  <span id="copy-tooltip" className="info__icons__tooltip">luciazabaletag@gmail.com <span className="info__icons__tooltip-span">Click para copiarlo</span></span>
                  <span id="copy-text" className="info__icons__tooltip-copyOff">¡Email copiado!</span>
                </a>
              </div>

          </div>
      </div>
        <img className="header__imgrecta" src="/img/rectangulo.svg" alt="img rectangulo"/>
        
    </header>
  )
}

export default Header