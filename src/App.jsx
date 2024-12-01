import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Transport from './components/Transport/Transport'
import Service from './components/Service/Service'
import Choosing from './components/Choosing/Choosing'
import Price from './components/Price/Price'
import Feedback from './components/Feedback/Feedback'
import Help from './components/Help/Help'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/FooterBottom/FooterBottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <Home />
        <Transport />
        <Service />
        <Choosing />
        <Price />
        <Feedback />
        <Help />
        <News />
        <Footer />
        <FooterBottom />
    </div>
  )
}

export default App
