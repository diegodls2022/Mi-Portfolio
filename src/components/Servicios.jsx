import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import image from '../assets/diego-2.png'

const servicios = [
  {
    name: 'Desarrollador Full Stack',
    description: 
    'Front-End: Html5, Css3, Sass, javascript, TailwindCSS, MaterialUI, Bootstrap, React JS. Back-end: PHP, SQL, Node JS, Laravel.',
    link: 'Leer Más',
  },
  {
    name: 'Soporte Tecnico Nivel I y II',
    description: 
    'instalacion y Configuracion de Software y hardware, Manejo de Herramientas de tickets, Active Directory, Office 365, Azure, Google Ads, VPN, Nagios, VMWare, configuracion de Redes',
    link: 'Leer Más',
  },
  {
    name: 'Administrativo Contable y Logistica',
    description: 
    'Manejo del Sistema Tango Gestion, ABM de Facturacion, Remito, Nota de Credito, IIBB. Logistica: Embalaje, Carga y Descarga, Manejo de Stock y Presupuesto',
    link: 'Leer Más',
  },
  {
    name: 'Base de Datos',
    description: 
    'Access, MySQL, SQL, Postgres, PLSQL.',
    link: 'Leer Más',
  },
]

const Servicios = () => {
  return (
    <section className='section' id='servicio'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
            {/* text */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}   
              className='flex-1 lg:bg-gray mix-blend-lighten mb-12 lg:mb-0'
            >
                <img className='flex justify-center items-center h-[60vh] mx-auto' src={image} alt="imagen perfil" />
              <h2 className='text-white font-bold mb-6'>Lo que hago</h2>
              <h3 className='text-white max-w-[455px] mb-16'>
                Soy un Desarrollador Front-end y Back-end Freelancer con unos 3 años de 
                experiencias.  
              </h3>
            </motion.div>
            {/* servicios */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}  
              className='flex-1'>
              {/* servicios listado */}
                <div>
                    {servicios.map((service, index) => {
                      const { name, description, link } = service;
                      return ( 
                      <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                          <div className='max-w-[476px]'>
                              <h4 className='text-[20px] tracking-wider font-bold mb-6'>{name}</h4>
                              <p className='font-secondary leading-tight'>{description}</p>
                          </div>
                          <div className='flex flex-col flex-1 items-end'>
                              <a href="#" className='bg-indigo-800 hover:bg-red-600 transition-colors 
                              cursor-pointer p-3 uppercase rounded-full w-9 h-9 mb-[42px]
                              flex justify-center items-center'>
                                  <BsArrowUpRight /> 
                              </a>
                              <a href="#" className='text-gray text-sm'>{link}</a>
                          </div>
                      </div>
                      );
                    })}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Servicios