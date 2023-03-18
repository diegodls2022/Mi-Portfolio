import React from 'react'
// coountup
import CountUp  from 'react-countup' 
// intersection observer
import { useInView } from 'react-intersection-observer'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
import diego1 from '../assets/diego1.png'

const SobreMi = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='sobremi' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* imagen */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
           mix-blend-lighten bg-top'>
            <img className='flex justify-center items-center h-[60vh] mx-auto' src={diego1} alt="" />
           </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}  
            className='flex-1'>
              <h2 className='text-4xl font-bold inline border-b-4 border-red-500 to-red-800'>Sobre Mí</h2>
              <h3 className='mt-4'>Soy un Desarrollador Front-end y Back-end Freelancer con unos 3 años de 
                experiencias.
              </h3>
              <p className='mb-6'>Tengo mas de 8 años de experiencia en atención al cliente y 
                Soporte Técnico TI  (instalación y configuración de aplicaciones tanto de Software 
                cómo Hardware, configuración de redes informaticas, Active Directory, 
                Herramientas de Monitoreo como (Nagios), Implementacion de Script mediante sentencias en SQL, 
                automatizacion de tareas en Java, Manejo de Macros en Excel ).  
                Soy Desarrollador Front-End y Back-End con tecnologias PHP y MYSQL, Java, SQL, Git, GitHub, 
                Microsoft Office, HTML5, CSS3, SASS, GULP, Javascript, TailwindCSS, Laravel, ReactJS, 
                Bootstrap, Material UI.
                También tengo un buen manejo y entendimiento del idioma Inglés.
                Estoy en búsqueda de una oportunidad para crecer como desarrollador y aprender mucho más sobre 
                lo referido al área IT.
              </p>
              {/* state */}
              <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div>
                  <div className='text-[40px] from-red-500 to-red-800 font-bold text-white mb-2'>
                      { inView ?    
                    <CountUp start={0} end={10} duration={3} /> : 
                    null }
                    k+
                  </div>
                  <div className='font-bold text-black text-sm tracking-[2px]'>
                    Años de <br />
                    Experiencias
                  </div>
                </div>

                <div>
                  <div className='text-[40px] from-red-500 to-red-800 font-bold text-white mb-2'>
                      { inView ?    
                    <CountUp start={0} end={8} duration={3} /> : 
                    null }
                    k+
                  </div>
                  <div className='font-bold text-black text-sm tracking-[2px]'>
                    Soporte Tecnico <br />
                    Nivel I y II
                  </div>
                </div>

                <div>
                  <div className='text-[40px] from-red-500 to-red-800 font-bold text-white mb-2'>
                      { inView ?    
                    <CountUp start={0} end={5} duration={3} /> : 
                    null }
                    k+
                  </div>
                  <div className='font-bold text-black text-sm tracking-[2px]'>
                    Desarrollo Front-end y <br />
                    Back-end
                  </div>
                </div>
              </div>
                  
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi