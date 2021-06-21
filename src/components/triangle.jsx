import React,  { useEffect, useState } from "react"

const Triangle = (props) =>{


    const [selectOpt, setselectOpt] = useState(Math.floor(Math.random() * (3 - 0) + 0));    
    const [triangleType] = useState(["iso", "esc", "equi"]);

    const [num1, setnum1] = useState(Math.floor(Math.random() * 10) + 1);
    const [num2, setnum2] = useState(Math.floor(Math.random() * 10) + 1);
    const [num3, setnum3] = useState(Math.floor(Math.random() * 10) + 1);
    const [num4, setnum4] = useState(Math.floor(Math.random() * 10) + 1);
    const [num5, setnum5] = useState(Math.floor(Math.random() * 10) + 1);
    const [num6, setnum6] = useState(Math.floor(Math.random() * 10) + 1);
    const [num7, setnum7] = useState(Math.floor(Math.random() * 10) + 1);
    const [num8, setnum8] = useState(Math.floor(Math.random() * 10) + 1);
    const [num9, setnum9] = useState(Math.floor(Math.random() * 10) + 1);
    const [response1, setresponse1] = useState("");
    const [response2, setresponse2] = useState("");
    const [response3, setresponse3] = useState("");
    const [response4, setresponse4] = useState("");
    const [response5, setresponse5] = useState("");
    const [response6, setresponse6] = useState("");
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
            const number2 = num2;
            const result = (2*number1)+number2;
            if (result === parseInt(response1)) {
                setscore(score + 1);
                setnum1(Math.floor(Math.random() * 10) + 1);
                setnum2(Math.floor(Math.random() * 10) + 1);
                setnum3(Math.floor(Math.random() * 10) + 1);
                setresponse1("");
                setanswer1("Buen trabajo!");
                setisCorrect1(true);
                setselectOpt(Math.floor(Math.random() * (3 - 0) + 0));
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
            const number1 = num2;
            const number2 = num3;
            const result = (number1*number2)/2;
            if (parseInt(result) === parseInt(response2)) {
                setscore(score + 1);
                setnum1(Math.floor(Math.random() * 10) + 1);
                setnum2(Math.floor(Math.random() * 10) + 1);
                setnum3(Math.floor(Math.random() * 10) + 1);
                setresponse2("");
                setanswer1("Buen trabajo!");
                setisCorrect1(true);
                setselectOpt(Math.floor(Math.random() * (3 - 0) + 0));
                setSeconds(0);

            } else {
                setscore(score - 1);
                setanswer1("Error, piensa un poco más!");
                setisCorrect1(false);
            }
        }
    }
    function isEnter3(event) {
        if (event.key === 'Enter') {
            const number1 = num4;
            const number2 = num5;
            const number3 = num6;
            const result = number1+number2+number3;
            if (result === parseInt(response3)) {
                setscore(score + 1);
                setnum4(Math.floor(Math.random() * 10) + 1);
                setnum5(Math.floor(Math.random() * 10) + 1);
                setnum6(Math.floor(Math.random() * 10) + 1);
                setnum7(Math.floor(Math.random() * 10) + 1);
                setresponse1("");
                setanswer1("Buen trabajo!");
                setisCorrect1(true);
                setselectOpt(Math.floor(Math.random() * (3 - 0) + 0));
                setSeconds(0);

            } else {
                setscore(score - 1);
                setanswer1("Error, piensa un poco más!");
                setisCorrect1(false);
            }
        }
    }
    function isEnter4(event) {
        if (event.key === 'Enter') {
            const number1 = num6;
            const number2 = num7;
            const result = (number1*number2)/2;
            if (parseInt(result) === parseInt(response4)) {
                setscore(score + 1);
                setnum4(Math.floor(Math.random() * 10) + 1);
                setnum5(Math.floor(Math.random() * 10) + 1);
                setnum6(Math.floor(Math.random() * 10) + 1);
                setnum7(Math.floor(Math.random() * 10) + 1);
                setresponse2("");
                setanswer1("Buen trabajo!");
                setisCorrect1(true);
                setselectOpt(Math.floor(Math.random() * (3 - 0) + 0));
                setSeconds(0);

            } else {
                setscore(score - 1);
                setanswer1("Error, piensa un poco más!");
                setisCorrect1(false);
            }
        }
    }
    function isEnter5(event) {
        if (event.key === 'Enter') {
            const number1 = num8;
            const result = number1*3;
            if (result === parseInt(response5)) {
                setscore(score + 1);
                setnum8(Math.floor(Math.random() * 10) + 1);
                setnum9(Math.floor(Math.random() * 10) + 1);
                setresponse1("");
                setanswer1("Buen trabajo!");
                setisCorrect1(true);
                setselectOpt(Math.floor(Math.random() * (3 - 0) + 0));
                setSeconds(0);

            } else {
                setscore(score - 1);
                setanswer1("Error, piensa un poco más!");
                setisCorrect1(false);
            }
        }
    }
    function isEnter6(event) {
        if (event.key === 'Enter') {
            const number1 = num8;
            const number2 = num9;
            const result = (number1*number2)/2;
            if (parseInt(result) === parseInt(response6)) {
                setscore(score + 1);
                setresponse2("");
                setnum8(Math.floor(Math.random() * 10) + 1);
                setnum9(Math.floor(Math.random() * 10) + 1);
                setanswer1("Buen trabajo!");
                setisCorrect1(true);
                setselectOpt(Math.floor(Math.random() * (3 - 0) + 0));
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
    function actualizarRespuesta3(event) {
        setresponse3(event.target.value);
    }
    function actualizarRespuesta4(event) {
        setresponse4(event.target.value);
    }
    function actualizarRespuesta5(event) {
        setresponse5(event.target.value);
    }
    function actualizarRespuesta6(event) {
        setresponse6(event.target.value);
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
   
    else if (triangleType[selectOpt] === "iso"){
        return (
            
            <div className="mt-5 container text-center shadow p-3 mb-5 bg-body rounded background-image-post-inside h4">   
            <h5>{seconds}</h5>
                <div className = "shadow-lg p-3 mb-5 bg-body rounded">
                <img src="" alt="" />
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Red_triangle_with_thick_white_border.svg/1200px-Red_triangle_with_thick_white_border.svg.png" width = "80" height = "80" alt="triangle" /></div> 
                <div className="mt-3 mb-3" > ¿Cúal es el perimetro y Area de un triangulo Isoceles si sus lados miden {num1}, la base mide {num2}, y tiene una altura de {num3} </div>
                </div>
                <input placeholder = "INTRODUCE EL PERIMETRO" onKeyPress={isEnter1} onChange={actualizarRespuesta1} value={response1} className="mt-3 mb-3 form-control" />
                <input placeholder = "INTRODUCE EL AREA" onKeyPress={isEnter2} onChange={actualizarRespuesta2} value={response2} className="mt-3 mb-3 form-control" />
                <div className="mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" >Tu puntaje: {score} 
                <p className={isCorrect1 ? "text-primary" : "text-danger"}>  ¿Esta Correcto? {answer1}</p>
                </div>
            </div>
        );
    }   else if (triangleType[selectOpt] === "esc"){
        return (
            
            <div className="mt-5 container text-center shadow p-3 mb-5 bg-body rounded background-image-post-inside h4">   
            <h5>{seconds}</h5>
                <div className = "shadow-lg p-3 mb-5 bg-body rounded">
                <img src="" alt="" />
                <div><img src="https://cdn1.byjus.com/wp-content/uploads/2020/03/Scalene-Triangle-2.png" width = "80" height = "80" alt="triangle" /></div> 
                <div className="mt-3 mb-3" > ¿Cúal es el perimetro y Area de un triangulo Escaleno si sus lados miden {num4}, {num5}, la base mide {num6} y la altura {num7} </div>
                </div>
                <input placeholder = "INTRODUCE EL PERIMETRO" onKeyPress={isEnter3} onChange={actualizarRespuesta3} value={response3} className="mt-3 mb-3 form-control" />
                <input placeholder = "INTRODUCE EL AREA" onKeyPress={isEnter4} onChange={actualizarRespuesta4} value={response4} className="mt-3 mb-3 form-control" />
                <div className="mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" >Tu puntaje: {score} 
                <p className={isCorrect1 ? "text-primary" : "text-danger"}>  ¿Esta Correcto? {answer1}</p>
                </div>
            </div>
        );
    }   else if (triangleType[selectOpt] === "equi"){
        return (
            
            <div className="mt-5 container text-center shadow p-3 mb-5 bg-body rounded background-image-post-inside h4">   
            <h5>{seconds}</h5>
                <div className = "shadow-lg p-3 mb-5 bg-body rounded">
                <img src="" alt="" />
                <div><img src="https://cdn1.byjus.com/wp-content/uploads/2020/02/equilateral-triangle.png" width = "80" height = "80" alt="triangle" /></div> 
                <div className="mt-3 mb-3" > ¿Cúal es el perimetro y Area de un triangulo Equilatero si su lado miden {num8} y su altura es de {num9} </div>
                </div>
                <input placeholder = "INTRODUCE EL PERIMETRO" onKeyPress={isEnter5} onChange={actualizarRespuesta5} value={response5} className="mt-3 mb-3 form-control" />
                <input placeholder = "INTRODUCE EL AREA" onKeyPress={isEnter6} onChange={actualizarRespuesta6} value={response6} className="mt-3 mb-3 form-control" />
                <div className="mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" >Tu puntaje: {score} 
                <p className={isCorrect1 ? "text-primary" : "text-danger"}>  ¿Esta Correcto? {answer1}</p>
                </div>
            </div>
        );
    }



}

export default Triangle;