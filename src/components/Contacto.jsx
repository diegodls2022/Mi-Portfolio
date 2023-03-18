import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contacto = () => {
  return (
    <section className='py-16 lg:section' id='contacto'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row'>
              {/* text */}
                <motion.div 
                  className='flex-1 flex justify-start items-center'
                  variants={fadeIn('right', 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.3}} 
                >
                    <div>
                        <h4 className='text-xl uppercase text-white font-medium mb-2 
                        -tracking-wide'>Ponerse en Contacto</h4>
                        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                          Trabajemos <br /> juntos!
                        </h2>
                    </div>
                </motion.div>
              {/* form */}
                <motion.form 
                  action='https://getform.io/f/985d779d-d79e-499c-a523-18239050c573'
                  method='POST'
                  className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
                  variants={fadeIn('left', 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.3}}   
                >
                <input 
                    className='bg-transparent border-b py-3 outline-none w-full
                     placeholder:text-white focus:border-amber-400 transition-all' 
                    type="text" 
                    name='name'
                    placeholder='Ingresa tu Nombre'  
                  />
                <input 
                    className='bg-transparent border-b py-3 outline-none w-full
                     placeholder:text-white focus:border-amber-400 transition-all' 
                    type="text" 
                    name='apellido'
                    placeholder='Ingresa tu Apellido'  
                  />
                  <input 
                    className='bg-transparent border-b py-3 outline-none w-full
                     placeholder:text-white focus:border-amber-400 transition-all' 
                    type="email" 
                    name='email'
                    placeholder='Ingresa tu Email'  
                  />
                  <textarea 
                    className='bg-transparent border-b py-3 outline-none w-full
                     placeholder:text-white focus:border-gray-400 transition-all resize-none mb-12' 
                    placeholder='Escribe tu mensaje'  
                  ></textarea>
                  <button
                    type='submit' 
                    className='bg-indigo-500 hover:bg-red-600 transition-colors 
                          text-white cursor-pointer p-3 uppercase font-bold rounded-full'>Enviar Mensaje</button>
                </motion.form>
            </div>
        </div>
    </section>
  )
}

export default Contacto