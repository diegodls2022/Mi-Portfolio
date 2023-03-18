import React from 'react'
import image from '../assets/20170325_103722.png'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
              {/* text */}
                <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.h1 
                      variants={fadeIn('up', 0.3)} 
                      initial="hidden" 
                      whileInView={'show'} 
                      viewport={{once: false, amount: 0.7}} 
                      className='text-[55px] font-bold loading-[0.8] lg:text-[110px]'
                    >
                      Diego <span>De Los Santos</span>
                    </motion.h1>
                    <motion.div  
                      variants={fadeIn('up', 0.4)} 
                      initial="hidden" 
                      whileInView={'show'} 
                      viewport={{once: false, amount: 0.7}}  
                      className='mb-6 text-[36px] lg-text-[60px] font-secondary 
                      font-semibold uppercase leading-[1]'>
                        <span className='text-white mr-4'>Soy</span>
                        <TypeAnimation 
                          sequence={[
                              'Desarrollador Full Stack',
                                2000,
                              'Soporte Tecnico Nivel I y II',
                                2000,
                          ]} 
                          speed={50}
                          className='text-accent'
                          wrapper='span'
                          repeat={Infinity}
                        />
                    </motion.div>
                          <motion.p  
                            variants={fadeIn('up', 0.5)} 
                            initial="hidden" 
                            whileInView={'show'} 
                            viewport={{once: false, amount: 0.7}}  
                            className='mb-8 max-w-lg mx-auto lg:mx-0'>Soy un Profesional altamente capacitado en el rubro de Soporte Técnico TI
                            y Desarrollo con amplia experiencia laboral en el área.
                            Me motiva crecer profesionalmente y continuar desarrollándome en nuevas habilidades.
                          </motion.p>
                    <motion.div  
                        variants={fadeIn('up', 0.6)} 
                        initial="hidden" 
                        whileInView={'show'} 
                        viewport={{once: false, amount: 0.7}}  
                        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg-mx-0'>
                          <a href="/Cv - Diego De Los Santos.pdf" download={true} className='bg-indigo-500 hover:bg-red-600 transition-colors 
                          text-white cursor-pointer p-3 uppercase font-bold rounded-full'>Descargar Cv</a>
                    </motion.div>
                          {/* socials */}
                        <motion.div  
                            variants={fadeIn('up', 0.7)} 
                            initial="hidden" 
                            whileInView={'show'} 
                            viewport={{once: false, amount: 0.7}}  
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg-mx-0'>
                            <a href="https://www.linkedin.com/in/diego-de-los-santos-44988b119/">
                              <FaLinkedin />
                            </a>
                            <a href="https://github.com/diegodls2022">
                              <FaGithub />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100090648523312">
                              <FaFacebook />
                            </a>
                        </motion.div>
                </div>
              {/* imagen */}
                <motion.div  
                    variants={fadeIn('down', 0.5)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                    <img src={image} alt="imagen perfil" />
                </motion.div>
          </div>
      </div>
    </section>
  )
}

export default Banner