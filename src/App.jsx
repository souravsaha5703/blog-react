import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import { Outlet } from "react-router-dom"

function App() {
  
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
