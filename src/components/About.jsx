import { useEffect } from 'react'
import AboutContent from './AboutContent'

const About = () => {

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
       
        threshold: 0.1
      }
      );
      
      const image = document.querySelectorAll('.about__image');
      image.forEach( img => { observer.observe(img) });
      
      }, [])
  return (

        <main id='aboutme' className='about'>
            
            <div className='about__content container'>
                <h1 className='about__title title'>Sobre mi</h1>
                <div className='about__container'>
                    <div className='about__images'>
                        <img className='about__image' src='src/assets/img/img2.webp' alt='chica sobre mi' />
                        <img className='about__icon' src='src/assets/img/puntoshori.svg' alt='circulos sobre mi' />
                    </div>
                    <div className='about__text'>
                        <AboutContent />
                    </div>
                </div>

            </div>
        
        </main>
  )
}

export default About