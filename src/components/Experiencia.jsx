import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import admdeclientes from '../assets/admdeclientes.png'
import Veterinaria from '../assets/AppVeterinaria.png'
import clima from '../assets/buscadorclima.png'
import gastos from '../assets/planificadorgastos.png'
 
const Experiencia = () => {
  return (
    <section className='section' id='experiencia'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
            <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}   
                className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                {/* text */}
                  <div className='text-white text-3xl leading-tight font-bold'>
                      <h2>Mis Trabajo de <br />
                        Desarrollo de aplicación web.
                      </h2>
                      <p className='mt-4 max-w-sm text-gray-300 mb-16'>
                        Estos son algunos de mis proyectos realizado. 
                      </p>
                  </div>
                {/* imagen */} 
                  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                      {/* overkay */}
                      <div className='group-hover:bg-black/70 w-full h-full absolute 
                        z-40 transition-all duration-300'></div>
                      {/* img */}
                      <img className='group-hover:scale-125 transition-all duration-500' src={admdeclientes} alt="imagen experiencia" />
                        {/* pretitulo */}
                      <div className=' text-white absolute -bottom-full left-12 
                        group-hover:bottom-24 transition-all duration-500 z-50'>
                          <span className='bg-gradient-to-r'>ReactJS & Router-Dom</span>
                      </div>
                        {/* titulo */}
                      <div className=' text-white absolute -bottom-full left-12 
                        group-hover:bottom-14 transition-all duration-700 z-50'>
                          <span className='text-3xl text-white'>CRM - Cliente</span>
                      </div>
                  </div> 
            </motion.div>
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}  
              className='flex-1 flex flex-col gap-y-10'>
                {/* image */}
                
                  {/* image */}
                  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                      {/* overkay */}
                      <div className='group-hover:bg-black/70 w-full h-full absolute 
                        z-40 transition-all duration-300'></div>
                      {/* img */}
                      <img className='group-hover:scale-125 transition-all duration-500' src={Veterinaria} alt="imagen experiencia" />
                        {/* pretitulo */}
                      <div className=' text-white absolute -bottom-full left-12 
                        group-hover:bottom-24 transition-all duration-500 z-50'>
                          <span className='bg-gradient-to-r'>ReactJS</span>
                      </div>
                        {/* titulo */}
                      <div className=' text-white absolute -bottom-full left-12 
                        group-hover:bottom-14 transition-all duration-700 z-50'>
                          <span className='text-3xl text-white'>App - Veterinaria</span>
                      </div>
                  </div> 
                  {/* image */}
                  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                      {/* overkay */}
                      <div className='group-hover:bg-black/70 w-full h-full absolute 
                        z-40 transition-all duration-300'></div>
                      {/* img */}
                      <img className='group-hover:scale-125 transition-all duration-500' src={gastos} alt="imagen experiencia" />
                        {/* pretitulo */}
                      <div className=' text-white absolute -bottom-full left-12 
                        group-hover:bottom-24 transition-all duration-500 z-50'>
                          <span className='bg-gradient-to-r'>ReactJS & Context</span>
                      </div>
                        {/* titulo */}
                      <div className=' text-white absolute -bottom-full left-12 
                        group-hover:bottom-14 transition-all duration-700 z-50'>
                          <span className='text-3xl text-white'>App - Presupuesto</span>
                      </div>
                  </div> 
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experiencia