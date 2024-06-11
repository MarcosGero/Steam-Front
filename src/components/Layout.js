import {useLocation} from 'react-router-dom'
import Navbar from "./NavigationBar"
import Footer from './Footer'


 const Layout =({children})=>{

   const location = useLocation();

   // Condiciona si la ruta actual es '/noticias'
   const showFooter = location.pathname != '/noticias';

   return(
    <>
      <Navbar />
         {children}
         {showFooter && <Footer/>}
    </>
    )
 }
 
 export default Layout