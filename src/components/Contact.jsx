
const Contact = () => {
  return (
    <footer id='contactid' className='contact'>
        <h1 className='contact__title title'>Contacto</h1>
        <h3 className='contact__description description'>Puedes ponerte en contacto conmigo cuando lo requieras. Responderé de la manera más rápida posible.</h3>

        <div className='contact__container container'>
            <div className='contact__content'>
                <div className='contact__img'>
                    <img className='contact__ilus' src='src/assets/img/iluscontacto.svg' alt='imagen contacto'/>
                </div>
                <div className='contact__info'>
                    <div className='contact__info__des'>
                        <img className='contact__info__img' src='src/assets/img/emailnara.svg' alt='imagen mail'/>
                        <p className='contact__info__p'>luciazabaletag@gmail.com</p>
                    </div>
                    <div className='contact__info__des'>
                        <img className='contact__info__img' src='src/assets/img/iconolinkedinnara.svg' alt='imagen linkedin'/>
                        <p className='contact__info__p'>luciazabaletagirod</p>
                    </div>
                    <div className='contact__info__des'>
                        <img className='contact__info__img' src='src/assets/img/githubnara.svg' alt='imagen github'/>
                        <p className='contact__info__p'>luciazabaletag</p>
                    </div>
                    
                </div>

            </div>
        </div>
        <p className='contact__copyright'>2024 - Todos los derechos reservados.</p>
        
    </footer>
  )
}

export default Contact