import './Menu.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import App2 from './components/App2'
import Figures from './figures.jsx'
import Conversions from './conversions.jsx'
import Tutorial1 from './components/tutorial1.jsx'
import Tutorial2 from './components/tutorial2.jsx'
import Tutorial3 from './components/tutorial3.jsx'
import Tutorial4 from './components/tutorial4.jsx'

function Menu() {

  const [hide1, sethide1] = useState(false);
  const [hide2, sethide2] = useState(false);
  const [hide3, sethide3] = useState(false);
  const [hide4, sethide4] = useState(false);
  const [hide5, sethide5] = useState(false);
  const [hide6, sethide6] = useState(false);
  const [hide7, sethide7] = useState(false);
  const [hide8, sethide8] = useState(false);

  const [diff, setdiff] = useState();

  function tutorial1(){
    sethide5(true);
    sethide1(false);
    sethide2(false);
    sethide3(false);
    sethide4(false);
  }
  function tutorial2(){
    sethide6(true);
    sethide1(false);
    sethide2(false);
    sethide3(false);
    sethide4(false);
  }
  function tutorial3(){
    sethide7(true);
    sethide1(false);
    sethide2(false);
    sethide3(false);
    sethide4(false);
  }
  function tutorial4(){
    sethide8(true);
    sethide1(false);
    sethide2(false);
    sethide3(false);
    sethide4(false);
  }
  function Calc1() {
    setdiff(true);
    sethide1(true);
    sethide2(false);
    sethide3(false);
    sethide4(false);
  
  }

  function Calc12() {
    setdiff(false);
    sethide1(true);
    sethide2(false);
    sethide3(false);
    sethide4(false);
  
  }
  function Calc2() {
    setdiff(true);
        sethide2(true);
        sethide1(false);
        sethide3(false);
        sethide4(false);                    
    }
  function Calc22() {
    setdiff(false);
        sethide2(true);
        sethide1(false);
        sethide3(false);
        sethide4(false);                    
    }
  function Calc3() {
    setdiff(true);
        sethide3(true);
        sethide1(false);
        sethide2(false);
        sethide4(false);                    
    }
  function Calc32() {
    setdiff(false);
        sethide3(true);
        sethide1(false);
        sethide2(false);
        sethide4(false);                    
    }
   function Calc4() {
     setdiff(true);
      sethide4(true);
      sethide1(false);
      sethide2(false);
      sethide3(false);
                    
    }
   function Calc42() {
     setdiff(false);
      sethide4(true);
      sethide1(false);
      sethide2(false);
      sethide3(false);
                    
    }

   
  
return(

  <div className = "container mt-5 ">
    <p className = "text-center text-warning display-4 mb-5">SOFTWARE EDUCATIVO</p>
      <div className="d-flex justify-content-center "> 
        <div className = "text-center shadow p-3 mb-5 bg-body rounded me-3 ms-3 background-image-post">
          <button className = "align-middle  btn btn-primary mb-5"><p  className = "h2">Escoge una difucultad para comenzar el desafio de calculo mental!</p></button>
          <button onClick = {Calc1} className = "btn btn-primary pe-2 ps-2 me-5"><h3>FACIL</h3></button>
          <button onClick = {Calc12} className = "btn btn-danger pe-2 ps-2 ms-5"><h3>DIFICIL</h3></button>
          <button onClick = {tutorial1} className = "btn btn-info pe-2 ps-2 ms-5"><h3>Tutorial</h3></button>
           {hide1 & diff === false ? <App diff = "5" /> : null} 
           {hide1 & diff === true ? <App diff = "10"/> : null} 
           {hide5 ? <Tutorial1/> : null }
         </div>
          <div className = "text-center shadow p-3 mb-5 bg-body rounded me-3 ms-3 background-image-post">
          <button className = "align-middle  btn btn-success mb-5"><p  className = "h2">Escoge una difucultad para comenzar el desafio de calculo de Fracciones!</p></button>
          <button onClick = {Calc2} className = "btn btn-primary pe-2 ps-2 me-5"><h3>FACIL</h3></button>
          <button onClick = {Calc22} className = "btn btn-danger pe-2 ps-2 ms-5"><h3>DIFICIL</h3></button>
          <button onClick = {tutorial2} className = "btn btn-info pe-2 ps-2 ms-5"><h3>Tutorial</h3></button>

           {hide2 & diff === false ? <App2 diff = "5" /> : null} 
           {hide2 & diff === true ? <App2 diff = "10"/> : null} 
          {hide6 ? <Tutorial2/> : null }

          </div>
      </div>
      <div className="d-flex justify-content-center "> 
        <div className = "text-center shadow p-3 mb-5 bg-body rounded me-3 ms-3 background-image-post">
        <button className = "align-middle  btn btn-warning mb-5"><p  className = "h2">Escoge una difucultad para comenzar el desafio de Conversion de unidades!</p></button>
          <button onClick = {Calc3} className = "btn btn-primary pe-2 ps-2 me-5"><h3>FACIL</h3></button>
          <button onClick = {Calc32} className = "btn btn-danger pe-2 ps-2 ms-5"><h3>DIFICIL</h3></button>
          <button onClick = {tutorial3} className = "btn btn-info pe-2 ps-2 ms-5"><h3>Tutorial</h3></button>

           {hide3 & diff === false ? <Conversions diff = "5" /> : null} 
           {hide3 & diff === true ? <Conversions diff = "10"/> : null} 
           {hide7 ? <Tutorial3/> : null }
      
          </div>
          <div className = "text-center shadow p-3 mb-5 bg-body rounded me-3 ms-3 background-image-post">
          <button className = "align-middle  btn btn-danger mb-5"><p  className = "h2">Escoge una difucultad para comenzar el desafio de Calculo de Area y Perimetro!</p></button>
          <button onClick = {Calc4} className = "btn btn-primary pe-2 ps-2 me-5"><h3>FACIL</h3></button>
          <button onClick = {Calc42} className = "btn btn-danger pe-2 ps-2 ms-5"><h3>DIFICIL</h3></button>
          <button onClick = {tutorial4} className = "btn btn-info pe-2 ps-2 ms-5"><h3>Tutorial</h3></button>

           {hide4 & diff === false ? <Figures diff = "5" /> : null} 
           {hide4 & diff === true ? <Figures diff = "10"/> : null} 
           {hide8 ? <Tutorial4/> : null }

          </div>
      </div>
  </div>
)
}







export default Menu;
