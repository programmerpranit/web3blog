// import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Navbar1 from '../components/Navbar1';

function MyApp({ Component, pageProps }) {

  return <>
  {/* <Navbar  /> */}
  <Navbar1  />
  <Component  />
  </>
}

export default MyApp
