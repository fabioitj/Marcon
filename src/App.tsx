import './App.scss'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Inicio from './components/inicio'
import NossoServico from './components/nosso_servico'
import Contato from './components/contato'
import { useEffect, useState,  } from "react";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { motion } from 'framer-motion'

function App() {
  const [blurPixels, setBlurPixels] = useState(5);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showForwardButton, setShowForwardButton] = useState(true);

  const pixelsFunction = () => {
    const pixels = Math.ceil(window.pageYOffset / 100);
      if(pixels < 5)
        setBlurPixels(5);
      else if(pixels > 20)
        setBlurPixels(20);
      else
        setBlurPixels(pixels);
  }

  // const rightFunction = () => {
  //   if(window.pageYOffset > 150) {
  //     const y = Math.ceil((window.pageYOffset-150)/5);
  //     setRight(y);
  //   }
  //   else {
  //     setRight(0);
  //   }
  // }

  const showBackButtonFunction = () => {
    let nosso_servico_y_position = document.getElementById("nosso-servico")?.offsetTop;
    nosso_servico_y_position = (nosso_servico_y_position ? nosso_servico_y_position - 1 : 0);
    const show = window.pageYOffset > nosso_servico_y_position;
    setShowBackButton(show);
  }

  const showForwardButtonFunction = () => {
    const show = window.pageYOffset == 0;
    setShowForwardButton(show);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      pixelsFunction();
      // rightFunction();
      showBackButtonFunction();
      showForwardButtonFunction();
      console.log(window.pageYOffset);
    });
  }, []);  

  return (
    <motion.section className='main' id='main'>
      <Navbar/>

      <Inicio/>
      {/* <Inicio right={right}/> */}
      <NossoServico/>
      <Contato/>

      <Footer/>
      <motion.a href='#inicio' className="main__back-button" initial={{ right: '2rem', bottom: '2rem' }} animate={showBackButton ? { bottom: '2rem'} : { bottom: '-5rem'}} transition={{ type: "spring", stiffness: 300 }}><ArrowUpward/></motion.a>
      <motion.a href='#nosso-servico' className="main__forward-button" initial={{ left: '50%', transform: 'translateX(-50%)', bottom: '2rem'}} animate={showForwardButton ? { bottom: '2rem'} : { bottom: '-5rem'}} transition={{ type: "spring", stiffness: 300 }}><ArrowDownward/></motion.a>
      <motion.div className='main__blurred-image' style={{filter: `blur(${blurPixels}px)`}}></motion.div>
    </motion.section>
  )
}

export default App
