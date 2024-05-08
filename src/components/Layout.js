import Navbar from "./NavigationBar"
import Footer from './Footer'


 const Layout =({children})=>{

   return(
    <>
             <Navbar />
                {children}
            <Footer/>
    </>
    )
 }
 
 export default Layout