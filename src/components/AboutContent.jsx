import { useEffect, useState } from "react";
import useScreen from '../hooks/useScreen'

let buttonWidth = 0;
let tabWidth = 0;
const tabHeaders = ["Sobre mi", "Habilidades", "Experiencia"];


const AboutContent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
const { width } = useScreen();

useEffect(() => {
  const setting = () => {
    width >= 768 ? `${buttonWidth = 140} ${tabWidth = 500}` : `${buttonWidth = 99} ${tabWidth = 300}`
   
  }
  setting();
}, [width])

    return (
    <div className="widget">
      <div className="widget__about">
        {tabHeaders.map((tab, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            key={tab}
            className={`widget__buttom ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {tab}
          </button>
        ))}
        <div
          className="widget__underline"
          style={{
            translate: `${activeIndex ? activeIndex * buttonWidth : 0}px 0`,
          }}
        ></div>
      </div>
      <div className="widget__content">
        <div
          className="widget__content__inner"
          style={{
            translate: `-${activeIndex ? activeIndex * tabWidth : 0}px 0`,
          }}
        >
          <div className="widget__content__div">
            <p className="widget__content__text">
            ¡Hola! Soy Lucía, una apasionada desarrolladora Front-end. Me destaco en el diseño, desarrollo y mantenimiento de aplicaciones y sitios web responsivos que ofrecen una experiencia de usuario fluida. Mi experiencia radica en la creación de interfaces dinámicas y atractivas mediante la escritura de código limpio y optimizado, utilizando el uso de herramientas y técnicas de desarrollo de vanguardia.
            </p>
          </div>
          <div className="widget__content__div">
            <p className="widget__content__text">
            Poseo grandes habilidades en HTML, CSS, JavaScript, TypeScript, React js, Next js, Tailwind CSS, Bootstrap y SASS. Además de un amplio conocimiento en Express js, Node js, React Redux, Mongodb, Git, Jest, React Testing Library y Cypress.
            </p>
                <div className='widget__logos'>
                        <img className='widget__logos__img' src='/logos/html.svg' alt='logo html' />
                        <img className='widget__logos__img' src='/logos/css.svg' alt='logo css' />
                        <img className='widget__logos__img' src='/logos/javascript.svg' alt='logo html' />
                        <img className='widget__logos__img' src='/logos/typescriptc.svg' alt='logo typescript' />
                        <img className='widget__logos__img' src='/logos/reactjs.svg' alt='logo react' />
                        <img className='widget__logos__img' src='/logos/nextjsl.svg' alt='logo nextjs' />
                        <img className='widget__logos__img' src='/logos/tailwindcss.svg' alt='logo tailwind css' />
                        <img className='widget__logos__img' src='/logos/bootstrap.svg' alt='logo bootstrap' />
                        <img className='widget__logos__img' src='/logos/sass.svg' alt='logo sass' />
                        <img className='widget__logos__img' src='/logos/git.svg' alt='logo git' />
                        <img className='widget__logos__img' src='/logos/photoshop.svg' alt='logo photoshop' />
                        <img className='widget__logos__img' src='/logos/illustrator.svg' alt='logo illustrator' />
                </div>
          </div>
          <div className="widget__content__div">
            <p className="widget__content__text">
                LLevo más de 2 años de experiencia en el mundo de la tecnología, actualmente trabajando como Freelancer. Me gusta trabajar en equipo, colaborando con diseñadores, desarrolladores y otros profesionales, porque creo que es fundamental para lograr obtener buenos resultados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;