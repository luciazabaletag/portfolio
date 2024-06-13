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
                srcImgP="/img/admin.webp"
                img={<ImagesLogosCard src={"/logos/nextjs.svg"} alt='logo nextjs'/>}
                img1={<ImagesLogosCard src={"/logos/tailwindcss.svg"} alt='logo tailwind css'/>}
                img2={<ImagesLogosCard src={"/logos/typescript.svg"} alt='logo typescript'/>}
                img3={<ImagesLogosCard src={"/logos/mongodb.svg"} alt='logo mongodb'/>}
                project="https://admin-task-zeta.vercel.app/"
                code="https://github.com/luciazabaletag/admin-task"
            />

            <ProjectCard 
                title="Fina Design" 
                description="Fina Design es un Ecommerce de Muebles y Accesorios para el hogar. En la tienda podrás seleccionar los
                productos que deseas adquirir y agregarlos al carro de compras.
                Web desarrollada con React js, Tailwind CSS, Formik, Yup, React Router Dom."
                srcImgP="/img/finadesign.webp"
                img={<ImagesLogosCard src={"/logos/reactjs.svg"} alt='logo reactjs'/>}
                img1={<ImagesLogosCard src={"/logos/tailwindcss.svg"} alt='logo tailwind css'/>}
                project="https://finadesign.netlify.app/"
                code="https://github.com/luciazabaletag/fina-design"
            />
            
            <ProjectCard 
                title="Weather App" 
                description="Weather App es una aplicación que te permite, a través de una API, consultar el clima de distintas partes del mundo.
                App desarrollada con React js y Tailwind CSS."
                srcImgP="/img/weatherapp.webp"
                img={<ImagesLogosCard src={"/logos/reactjs.svg"} alt='logo reactjs'/>}
                img1={<ImagesLogosCard src={"/logos/tailwindcss.svg"} alt='logo tailwind css'/>}
                project="https://lzweatherapp.netlify.app/"
                code="https://github.com/luciazabaletag/weather-app"
            />
            
        </div>
    </section>
  )
}

export default Projects