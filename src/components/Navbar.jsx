import { useState, useEffect } from "react"
import useScreenSize from "../hooks/useScreen";

const Navbar = () => {

  const [ nav, setNav] = useState(true);
  const [estado, setEstado] = useState('');
  const [ icon, setIcon] = useState(true);
  const [sticky, setSticky] = useState(false);

  const { width } = useScreenSize();

  useEffect(() => {
    width > 1024 ? setEstado('navigation') : setEstado('oculto');   
  }, [width])
  
  
  const handleClick = () => {
    setNav(!nav);
    setIcon(!icon)
    nav && width < 1024 ? setEstado('nav') : setEstado('inactivo');
  }


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
 
  return ( 

      <div className='navbar'>
        
          <button 
            onClick={handleClick}  
            className={ icon ? 'list navbar__button' : 'close navbar__button' }
            aria-label={icon ? 'Abrir menú' : 'Cerrar menú'}
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="navbar__svg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="navbar__svg__close" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
          </button>

          
          <nav className={`${estado} ${ sticky ? 'sticky' : ''}`}>
              <ul className="ul">
                <li className="li"><a className="a" href="#header">Inicio</a></li>
                <li className="li"><a className="a" href="#aboutme">Sobre mi</a></li>
                <li className="li"><a className="a" href="#servicesid">Servicios</a></li>
                <li className="li"><a className="a" href="#projectsid">Proyectos</a></li>
                <li className="li"><a className="a" href="#contactid">Contacto</a></li>
              </ul>
          </nav>
             
      </div>

  )
  }

export default Navbar