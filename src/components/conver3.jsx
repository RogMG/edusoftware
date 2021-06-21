import React, { useState,useEffect } from 'react';

const Conver3 = (props) => {
    const [num3, setnum3] = useState(Math.floor(Math.random() * 1000));
    const [response3, setresponse3] = useState ("");
    const [score, setscore] = useState(0);
    const [answer3, setanswer3] = useState("Veamos!");
    const [isCorrect3, setisCorrect3] = useState(false);

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
        setanswer3("Veamos!");
        setscore(0);      
        setSeconds(0);
          
      }


      function isEnter3(event) {
        if(event.key === 'Enter'){
                const number1 = num3;
                const result = number1/1000;
                if(result === parseFloat(response3)){
                    setscore(score + 1);
                    setnum3(Math.floor(Math.random() * 1000));
                    setresponse3("");
                    setanswer3("Buen trabajo!");
                    setisCorrect3(true);
                    setSeconds(0);

            }else{
                setscore(score - 1);
                setanswer3("Error, piensa un poco más!");
                setisCorrect3(false);
            } 
            }
      }

        function actualizarRespuesta3(event){
              setresponse3(event.target.value);
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

      <div className = "mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" > ¿Cúal es el resultado de {num3} mililitros en Litros?</div>
      <input onKeyPress = {isEnter3} onChange = {actualizarRespuesta3} value = {response3} className = "mt-3 mb-3 form-control"/>
      <div className = "mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" >Tu puntaje: {score}
      <p className = {isCorrect3 ? "text-primary" : "text-danger"}>  ¿Esta Correcto? {answer3}</p> 
       </div>  
 

    </div>
  );
  }


}

export default Conver3;