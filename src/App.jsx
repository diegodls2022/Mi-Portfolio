import Navegacion from "./components/Navegacion"
import Banner from "./components/Banner"
import Header from "./components/Header"
import SobreMi from "./components/SobreMi"
import Servicios from "./components/Servicios"
import Experiencia from "./components/Experiencia"
import Contacto from "./components/Contacto"

function App() {
 
  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-800">
        <Navegacion />
        <Header />
        <Banner />
        <SobreMi />
        <Servicios />
        <Experiencia />
        <Contacto />
        {/*<div className="h-[4000px]"></div>*/}
    </div>
  )
}

export default App
