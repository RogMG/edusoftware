import React, { useState,useEffect } from 'react';

const Conver4 = (props) => {

    const [num4, setnum4] = useState(Math.floor(Math.random() * 100));
    const [response4, setresponse4] = useState ("");
    const [score, setscore] = useState(0);
    const [answer4, setanswer4] = useState("Veamos!");
    const [isCorrect4, setisCorrect4] = useState(false);

    const[diff] = useState(props.diff);

        const[seconds,setSeconds] = useState(0);
    
        useEffect( () => {
            const interval = setInterval(() => {
              setSeconds(seconds => seconds + 1);
            }, 1000);
            return () => clearInterval(interval);
          }, []);
        
        if(seconds === parseInt(diff) & score !== 5){
            setscore(score-1);
            setSeconds(0);
        }

        function resetCounter1(){
            setanswer4("Veamos!");
            setscore(0);      
            setSeconds(0);
              
          }

          function isEnter4(event) {
            if(event.key === 'Enter'){
                    const number1 = num4;
                    const result = number1*1000;
                    if(result === parseFloat(response4)){
                        setscore(score + 1);
                        setnum4(Math.floor(Math.random() * 100));
                        setresponse4("");
                        setanswer4("Buen trabajo!");
                        setisCorrect4(true);
                        setSeconds(0);
    
                }else{
                    setscore(score - 1);
                    setanswer4("Error, piensa un poco más!");
                    setisCorrect4(false);
                } 
                }
          }

          function actualizarRespuesta4(event){
            setresponse4(event.target.value);
    }  



    if(score === 5){
        return(
          <div  className = "mt-5 container text-center shadow p-3 mb-5 bg-body rounded">
              <p className = "align-middle fs-1 text-success" >BIEN HECHO!!!</p>
              <button onClick = {resetCounter1} className = "btn btn-info">Intentalo de nuevo!</button>
          </div>
        );
    }else  if(score <= -1){
        return(
          <div  className = "mt-5 container text-center shadow p-3 mb-5 bg-body rounded">
              <p className = "align-middle fs-1 text-danger" >Perdiste :(</p>
              <button onClick = {resetCounter1} className = "btn btn-info">Intentalo de nuevo!</button>
          </div>
        );
    }
    
         
    else{
  return(
    <div  className = "mt-5 h4 container text-center shadow p-3 mb-5 bg-body rounded background-image-post-inside">
     <h5>{seconds}</h5>

      <div className = "mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" > ¿Cúal es el resultado de {num4} litros en Militros?</div>
      <input onKeyPress = {isEnter4} onChange = {actualizarRespuesta4} value = {response4} className = "mt-3 mb-3 form-control"/>
      <div className = "mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" >Tu puntaje: {score}
      <p className = {isCorrect4 ? "text-primary" : "text-danger"}>  ¿Esta Correcto? {answer4}</p>  
       </div>  

    </div>
  );
  }


}

export default Conver4;