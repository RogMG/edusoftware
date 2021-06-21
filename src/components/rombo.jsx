import React, { useEffect, useState } from "react"

const Rombo = (props) =>{

    const [num1, setnum1] = useState(Math.floor(Math.random() * 10) + 1);
    const [num2, setnum2] = useState(Math.floor(Math.random() * 10) + 1);
    const [num3, setnum3] = useState(Math.floor(Math.random() * 10) + 1);
    const [response1, setresponse1] = useState("");
    const [response2, setresponse2] = useState("");
    const [score, setscore] = useState(0);
    const [answer1, setanswer1] = useState("Veamos!");
    const [isCorrect1, setisCorrect1] = useState(false);
    
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
  

    function resetCounter1() {
        setanswer1("Veamos!");
        setscore(0);
                setSeconds(0);

    }

    function isEnter1(event) {
        if (event.key === 'Enter') {
            const number1 = num1;
            const result = number1 * 4;
            if (result === parseInt(response1)) {
                setscore(score + 1);
                setnum1(Math.floor(Math.random() * 10) + 1);
                setnum2(Math.floor(Math.random() * 10) + 1);
                setnum3(Math.floor(Math.random() * 10) + 1);
                setresponse1("");
                setanswer1("Buen trabajo!");
                setisCorrect1(true);
                setSeconds(0);

            } else {
                setscore(score - 1);
                setanswer1("Error, piensa un poco más!");
                setisCorrect1(false);
            }
        }
    }
    function isEnter2(event) {
        if (event.key === 'Enter') {
            const number2 = num2;
            const number3 = num3;
            const result = (number2*number3)/2;
            if (parseInt(result) === parseInt(response2)) {
                setscore(score + 1);
                setnum1(Math.floor(Math.random() * 10) + 1);
                setnum2(Math.floor(Math.random() * 10) + 1);
                setnum3(Math.floor(Math.random() * 10) + 1);
                setresponse2("");
                setanswer1("Buen trabajo!");
                setisCorrect1(true);
                setSeconds(0);

            } else {
                setscore(score - 1);
                setanswer1("Error, piensa un poco más!");
                setisCorrect1(false);
            }
        }
    }

    function actualizarRespuesta1(event) {
        setresponse1(event.target.value);
    }
    function actualizarRespuesta2(event) {
        setresponse2(event.target.value);
    }



    
    if (score === 5) {
        return (
            <div className="mt-5 container text-center shadow p-3 mb-5 bg-body rounded">
                <p className="align-middle fs-1 text-success" >BIEN HECHO!!!</p>
                <button onClick={resetCounter1} className="btn btn-info">Intentalo de nuevo!</button>
            </div>
        );
    } else if (score <= -1) {
        return (
            <div className="mt-5 container text-center shadow p-3 mb-5 bg-body rounded">
                <p className="align-middle fs-1 text-danger" >Perdiste :(</p>
                <button onClick={resetCounter1} className="btn btn-info">Intentalo de nuevo!</button>
            </div>
        );
    }
   
    else {
        return (
            <div className="mt-5 container text-center shadow p-3 mb-5 bg-body rounded background-image-post-inside h4">
                                <h5>{seconds}</h5>

                <div className = "shadow-lg p-3 mb-5 bg-body rounded">
                <div> <img src="https://media.baamboozle.com/uploads/images/165054/1612530100_14797" alt="square" width = "80" height = "80" /> </div>
                <div className="mt-3 mb-3" > ¿Cúal es el perimetro y Area de un Rombo si uno de sus lados mide {num1} y las diagonales miden {num2} y {num3}</div>
                </div>
                <input placeholder = "INTRODUCE EL PERIMETRO" onKeyPress={isEnter1} onChange={actualizarRespuesta1} value={response1} className="mt-3 mb-3 form-control" />
                <input placeholder = "INTRODUCE EL AREA" onKeyPress={isEnter2} onChange={actualizarRespuesta2} value={response2} className="mt-3 mb-3 form-control" />
                <div className="mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" >Tu puntaje: {score} 
                <p className={isCorrect1 ? "text-primary" : "text-danger"}>  ¿Esta Correcto? {answer1}</p>
                </div>
            </div>
        );
    }




}

export default Rombo;