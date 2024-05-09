import Navbar from "./NavigationBar"
import Footer from './Footer'


 const Layout =({children})=>{ // Aqui es donde se arma toda la logica para que toda pagina dentro de Steam tenga un encabezado y un pie de pagina

   return(
    <>
             <Navbar />
                {children}
            <Footer/>
    </>
    )
 }
 
 export default Layout