import { useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
