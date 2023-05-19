import React from 'react'
// coountup
import CountUp  from 'react-countup' 
// intersection observer
import { useInView } from 'react-intersection-observer'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
import diego1 from '../assets/diego-1.jpg'

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
          className='flex bg-about bg-no-repeat h-[640px] mix-blend-lighten'>
            <img className='flex justify-center items-center h-[60vh] mx-auto rounded-lg' src={diego1} alt="" />
           </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}  
            className='flex-1'>
              <h2 className='text-4xl font-bold inline border-b-4 border-red-500 to-red-800'>Sobre Mí</h2>
              <h3 className='mt-4'>Soy una Persona que me gusta desarrollarme y seguir aprendiendo en nuevas
              tecnologias. Me interesa mucho la rama de la programación asi como tambien la de Soporte Tecnico.
              tengo muy buenas relaciones personales y me gusta inverstigar algo hasta encontrarle la solución.
              </h3>
              <p className='mt-4'>Tengo mas de 10 años de experiencia en atención al cliente, Logistica, 
                Administración, Desarrollo y Soporte Técnico TI.
              </p>
              {/* state */}
              <div className='flex gap-x-6 lg:gap-x-10 mt-2'>
                <div>
                  <div className='text-[40px] from-red-500 to-red-800 font-bold text-white mb-2'>
                      { inView ?    
                    <CountUp start={0} end={10} duration={3} /> : 
                    null }
                    {''} años
                  </div>
                  <div className='font-bold text-black text-sm tracking-[2px]'>
                    Soporte Tecnico Nivel I y II <br />
                  </div>
                </div>

                <div>
                  <div className='text-[40px] from-red-500 to-red-800 font-bold text-white mb-2'>
                      { inView ?    
                    <CountUp start={0} end={4} duration={4} /> : 
                    null }
                    {''} años
                  </div>
                  <div className='font-bold text-black text-sm tracking-[2px]'>
                    Desarrollo Web y Aplicaciones <br />
                  </div>
                </div>

                <div>
                  <div className='text-[40px] from-red-500 to-red-800 font-bold text-white mb-2'>
                      { inView ?    
                    <CountUp start={0} end={3} duration={4} /> : 
                    null }
                    {''} años
                  </div>
                  <div className='font-bold text-black text-sm tracking-[2px]'>
                    Administración y Logistica <br />
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