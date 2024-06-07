import ImagesLogosCard from "./ImagesLogosCard"
import ProjectCard from "./ProjectCard"

const Projects = () => {

  return (
    <section id='projectsid' className='projects'>
        <div className='projects__container container'>
            <h1 className='projects__title title'>Proyectos</h1>

            <ProjectCard 
                title="Admin Task" 
                description="Admin Task es una aplicación que te permite planificar y gestionar las tareas asignadas a un determinado proyecto.
                Podrás crear, editar y eliminar tanto las tareas como los proyectos.
                Además incluye registro y autenticación de usuarios.
                App desarrollada con Next.js, Tailwind CSS, TypeScript, MongoDB, Zod, Zustand, NextAuth.js, React Hook Form."
                srcImgP="src/assets/img/admin.webp"
                img={<ImagesLogosCard src={"src/assets/logos/nextjs.svg"} alt='logo nextjs'/>}
                img1={<ImagesLogosCard src={"src/assets/logos/tailwindcss.svg"} alt='logo tailwind css'/>}
                img2={<ImagesLogosCard src={"src/assets/logos/typescript.svg"} alt='logo typescript'/>}
                img3={<ImagesLogosCard src={"src/assets/logos/mongodb.svg"} alt='logo mongodb'/>}
                project="#"
                code="#"
            />

            <ProjectCard 
                title="Fina Design" 
                description="Fina Design es un Ecommerce de Muebles y Accesorios para el hogar. En la tienda podrás seleccionar los
                productos que deseas adquirir y agregarlos al carro de compras.
                Web desarrollada con React js, Tailwind CSS, Formik, Yup, React Router Dom."
                srcImgP="src/assets/img/finadesign.webp"
                img={<ImagesLogosCard src={"src/assets/logos/reactjs.svg"} alt='logo reactjs'/>}
                img1={<ImagesLogosCard src={"src/assets/logos/tailwindcss.svg"} alt='logo tailwind css'/>}
                project="#"
                code="#"
            />
            
            <ProjectCard 
                title="Weather App" 
                description="Weather App es una aplicación que te permite, a través de una API, consultar el clima de distintas partes del mundo.
                App desarrollada con React js y Tailwind CSS."
                srcImgP="src/assets/img/weatherapp.webp"
                img={<ImagesLogosCard src={"src/assets/logos/reactjs.svg"} alt='logo reactjs'/>}
                img1={<ImagesLogosCard src={"src/assets/logos/tailwindcss.svg"} alt='logo tailwind css'/>}
                project="#"
                code="#"
            />
            
        </div>
    </section>
  )
}

export default Projects