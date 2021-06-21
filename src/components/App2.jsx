import React, { useState, useEffect } from 'react';


const App2 = (props) => {
            const [num1] = useState(10);
            const [num2, setnum2] = useState(Math.floor(Math.random() * 10)+1);
            const [num3, setnum3] = useState(Math.floor(Math.random() * 10)+1);
            const [response, setresponse] = useState("");
            const [score, setscore] = useState(0);
            const [answer, setanswer] = useState("Veamos!");
            const [isCorrect, setisCorrect] = useState(false);
            const [operation] = useState(['+', '-']);
            const [selectOpt, setselectOpt] = useState(Math.floor(Math.random() * (2 - 0) + 0));

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
          

        
    function actualizarRespuesta(event) {
        setresponse(event.target.value);
    }

    function resetCounter() {
        setscore(0);
        setSeconds(0);
    }
    
      function isEnter(event) {
        if(event.key === 'Enter'){
                const number1 = num2;
                const number2 = num3;
                const opt = operation[selectOpt];
                if(opt === '+'){
                  const result = number1+number2;
                  if(result === parseInt(response)){
                        setscore(score + 1);
                        setnum2(Math.floor(Math.random() * 10)+1);
                        setnum3(Math.floor(Math.random() * 10)+1);
                        setresponse("");
                        setanswer("Buen trabajo!");
                        setisCorrect(true);    
                        setselectOpt(Math.floor(Math.random() * (2 - 0) + 0));
                        setSeconds(0);

                }else{
                    setscore(score - 1);
                    setanswer("Error, piensa un poco más!");
                    setisCorrect(false);
                }
                }else if (opt === '-'){
                  const result = number1 >= number2 ? number1 - number2 : number2 - number1;
                  if(result === parseInt(response)){
                    setscore(score + 1);
                    setnum2(Math.floor(Math.random() * 10)+1);
                    setnum3(Math.floor(Math.random() * 10)+1);     
                                       setresponse("");
                        setanswer("Buen trabajo!");
                        setisCorrect(true);
                        setselectOpt(Math.floor(Math.random() * (2 - 0) + 0));
                        setSeconds(0);

                }else{
                    setscore(score - 1);
                    setanswer("Error, piensa un poco más!");
                    setisCorrect(false);
                }
                }
                 
            }
      }
  

  
      if(score === 5){
          return(
            <div  className = "mt-5 container text-center shadow p-3 mb-5 bg-body rounded">
                <p className = "align-middle fs-1 text-success" >BIEN HECHO!!!</p>
                <button onClick = {resetCounter} className = "btn btn-info">Intentalo de nuevo!</button>
            </div>
          );
      }else  if(score <= -1){
          return(
            <div  className = "mt-5 container text-center shadow p-3 mb-5 bg-body rounded">
                <p className = "align-middle fs-1 text-danger" >Perdiste :(</p>
                <button onClick = {resetCounter} className = "btn btn-info">Intentalo de nuevo!</button>
            </div>
          );
      }else{
    return(
      <div  className = "mt-5 container text-center shadow p-3 mb-5 bg-body rounded background-image-post-inside">
        <h5>{seconds}</h5>
       <div className = "shadow-lg p-3 mb-5 bg-body rounded h3">
       <div className = "mt-3 mb-3" > ¿Cúal es el resultado de </div> 
        <div>  {num1 >= num2 ? num2 : num3} &emsp; {num1 >= num2 ? num3 : num2} </div> 
        <div> --- {operation[selectOpt]} ---</div>
        <div>  {num1}&emsp;{num1}</div>
        </div> 
        <input placeholder = "INTRODUCE TU RESPUESTA AQUÍ" onKeyPress = {isEnter} onChange = {actualizarRespuesta} value = {response} className = "mt-3 mb-3 form-control"/>
        <div className = " mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded h3 " >
        <div className = "mt-3 mb-3" >Tu puntaje: {score} </div>  
        <p className = {isCorrect ? "text-primary" : "text-danger"}>  ¿Esta Correcto? {answer}</p>      
        </div>
      </div>
    );
    }


  }

  export default App2;

  

  

