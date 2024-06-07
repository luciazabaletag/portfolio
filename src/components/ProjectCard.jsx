
const ProjectCard = ({title, description, img, img1, img2, img3, img4, img5, srcImgP, project, code}) => {
    return (
        <div className='projects__cards__container'>

                <div className='projects__cards projects__cards-first'>

                    <div className='projects__cards__img__container'>
                        <img className='projects__cards__img' src={srcImgP} alt='imagen proyecto' />
                    </div>
                    <div className='projects__cards__content'>
                        <h2 className='projects__cards__title'>{title}</h2>
                        <p className='projects__cards__description'>{description}</p>

                        <div className='projects__cards__tools'>
                            <p className='projects__cards__toolsp'>Hecho con:</p>
                            <div className='projects__cards__logos'>
                                {img}
                                {img1}
                                {img2}
                                {img3}
                                {img4}
                                {img5}
                            </div>
                        </div>

                        <div className='projects__cards__buttons'>
                            <a href={project} target="_blank" rel="noreferrer"><button className='projects__cards__button' type="button">Ver proyecto</button></a>
                            <a href={code} target="_blank" rel="noreferrer"><button className='projects__cards__buttonCo' type="button">Código</button></a>
                        </div>
                    </div>
                </div>

            </div>
      )
}
export default ProjectCard
