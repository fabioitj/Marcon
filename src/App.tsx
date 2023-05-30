import './App.scss'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Inicio from './components/inicio'
import NossoServico from './components/nosso_servico'
import Contato from './components/contato'
import { useEffect, useState } from "react";

function App() {
  const [blurPixels, setBlurPixels] = useState(3);
  const [right, setRight] = useState(0);

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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      pixelsFunction();
      // rightFunction();
      console.log(window.pageYOffset);
    });
  }, []);  


  return (
    <section className='main'>
      <Navbar/>

      <Inicio/>
      {/* <Inicio right={right}/> */}
      <NossoServico/>
      <Contato/>

      <Footer/>

      <div className='main__blurred-image' style={{filter: `blur(${blurPixels}px)`}}></div>
    </section>
  )
}

export default App
