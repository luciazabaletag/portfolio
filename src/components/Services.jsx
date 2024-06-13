import { useEffect } from "react";

const Services = () => {

useEffect(() => {
  const observer = new IntersectionObserver(entries => { entries.forEach( entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    }else {
        entry.target.classList.remove('show');
    }
});
},
{
  root: null,
  threshold: 0.1
}
);

const cards = document.querySelectorAll('.services__card');
cards.forEach( card => { observer.observe(card) });

}, [])


  return (
    <section id="servicesid" className='services'>
        <img className='services__wavetop' src='/img/waveorangetop.svg' alt='wave arriba'/>
            <div className='services__container'>
                <div className=' container'>

                <div className='services__text'>
                    <h1 className='services__title title'>Servicios</h1>
                    <h3 className='services__description description'>Si necesitas una aplicación web responsiva, optimizada y atractiva, puedes ponerte en contacto conmigo.</h3>
                </div>

                <div className='services__grid'>
                    <div className='services__card'>
                        <img className='services__card__image' src='/img/disenio.svg' alt='diseño web'/>
                        <p className='services__card__title'>Diseño web</p>
                        <p className='services__card__description'>Creo diseños únicos, visualmente atractivos y fáciles de navegar, para crear una experiencia estéticamente agradable para el usuario.</p>
                    </div>

                    <div className='services__card'>
                        <img className='services__card__image' src='/img/desarrollo.svg' alt='desarrollo app'/>
                        <p className='services__card__title'>Desarrollo App</p>
                        <p className='services__card__description'>Contruyo una aplicacion web, con una funcionalidad potente e innovadora, utilizando las últimas tecnologías, desarrollando interfaces de alto rendimiento.  </p>
                    </div>

                    <div className='services__card'>
                        <img className='services__card__image' src='/img/pantalla.svg' alt='optimizacion web' />
                        <p className='services__card__title'>Optimización</p>
                        <p className='services__card__description'>Me aseguro de que su sitio web ofrezca una gran experiencia de usuario, sea cual sea el tamaño de la pantalla en la que se muestre, además de optimizar su front-end para ofrecer tiempos de carga más rápidos.</p>
                    </div>
                </div>
            </div>
        </div>
        <img className='services__wavebottom' src='/img/waveorangebottom.svg' alt='wave abajo'/>
    </section>
  )
}

export default Services