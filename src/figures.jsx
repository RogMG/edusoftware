import {useState} from 'react'
import Rectangle from './components/rectangle'
import Square from './components/square'
import Triangle from './components/triangle'
import Rombo from './components/rombo'
import Circulo from './components/circle'

const Figures = (props) =>{

    const [hide1, sethide1] = useState(false);
    const [hide2, sethide2] = useState(false);
    const [hide3, sethide3] = useState(false);
    const [hide4, sethide4] = useState(false);
    const [hide5, sethide5] = useState(false);
    const [difficult] = useState(props.diff);
    function circle(){
        sethide1(true);
        sethide2(false);
        sethide3(false);
        sethide4(false);
        sethide5(false);
    }
    function rectangle(){
        sethide2(true);
sethide1(false);
sethide3(false);
sethide4(false);
sethide5(false);
    }
    function square(){
        sethide3(true);
        sethide2(false);
        sethide1(false);
        sethide4(false);
        sethide5(false);
    }
    function rombo(){
        sethide4(true);
sethide2(false);
sethide3(false);
sethide1(false);
sethide5(false);
    }
    function triangle(){
        sethide5(true);
sethide2(false);
sethide3(false);
sethide4(false);
sethide1(false);
    }


    return(
        <div className = "my-3 ">
            <button onClick = {circle}  className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Circulo   </p></button>
            <button onClick = {rectangle} className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Rectangulo</p></button>
            <button onClick = {square} className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Cuadrado  </p></button>
            <button onClick = {rombo} className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Rombo     </p></button>
            <button onClick = {triangle} className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Triangulo </p></button>
            
            { hide1 ? <Circulo diff = {difficult} /> : null }
            { hide2 ? <Rectangle diff = {difficult}  /> : null}
            { hide3 ? <Square diff = {difficult}  /> : null}
            { hide4 ? <Rombo diff = {difficult}  /> : null}
            { hide5 ? <Triangle diff = {difficult}  /> : null}
            
        </div>
        )
}

export default Figures;