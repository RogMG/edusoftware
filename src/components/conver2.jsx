import React, { useState,useEffect } from 'react';

const Conver2 = (props) => {

    const [num2, setnum2] = useState(Math.floor(Math.random() * 1000));
    const [response2, setresponse2] = useState ("");
    const [score, setscore] = useState(0);
    const [answer2, setanswer2] = useState("Veamos!");
    const [isCorrect2, setisCorrect2] = useState(false);
    
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
        setanswer2("Veamos!");
        setscore(0);      
        setSeconds(0);
          
    }

    function isEnter2(event) {
        if(event.key === 'Enter'){
                const number1 = num2;
                const result = number1/1000;
                if(result === parseFloat(response2)){
                    setscore(score + 1);
                    setnum2(Math.floor(Math.random() * 1000));
                    setresponse2("");
                    setanswer2("Buen trabajo!");
                    setisCorrect2(true);
                    setSeconds(0);

            }else{
                setscore(score - 1);
                setanswer2("Error, piensa un poco más!");
                setisCorrect2(false);
            } 
            }
      }

      function actualizarRespuesta2(event){
        setresponse2(event.target.value);
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

      <div className = "mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" > ¿Cúal es el resultado de {num2} metros en Kilometros?</div>
      <input onKeyPress = {isEnter2} onChange = {actualizarRespuesta2} value = {response2} className = "mt-3 mb-3 form-control"/>
      <div className = "mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" >Tu puntaje: {score} 
      <p className = {isCorrect2 ? "text-primary" : "text-danger"}>  ¿Esta Correcto? {answer2}</p> 
      </div>  



    </div>
  );
  }


}

export default Conver2;