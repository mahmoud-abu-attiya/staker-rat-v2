import Navbar from './Navbar'
import Footer from './Footer'
import Overlay from './Overlay'
import { useSelector } from 'react-redux';

export default function Layout({ children }) {
   const openmenu = useSelector((state) => state.openMenu.value);
   return (
      <>
         <Navbar />
         {openmenu && <Overlay />}
         <main>{children}</main>
         <Footer />
      </>
   )
}