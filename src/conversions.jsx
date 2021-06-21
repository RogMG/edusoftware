import {useState} from 'react'
import Conver1 from './components/conver1'
import Conver2 from './components/conver2'
import Conver3 from './components/conver3'
import Conver4 from './components/conver4'


const Conversions = (props) =>{

    const [hide1, sethide1] = useState(false);
    const [hide2, sethide2] = useState(false);
    const [hide3, sethide3] = useState(false);
    const [hide4, sethide4] = useState(false);
    const [difficult] = useState(props.diff);
    function circle(){
        sethide1(true);
        sethide2(false);
        sethide3(false);
        sethide4(false);
        
    }
    function rectangle(){
        sethide2(true);
sethide1(false);
sethide3(false);
sethide4(false);

    }
    function square(){
        sethide3(true);
        sethide2(false);
        sethide1(false);
        sethide4(false);
        
    }
    function rombo(){
        sethide4(true);
sethide2(false);
sethide3(false);
sethide1(false);

    }


    return(
        <div className = "my-3 ">
            <button onClick = {circle}  className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Centimetros a Metros   </p></button>
            <button onClick = {rectangle} className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Metros a Kilometros</p></button>
            <button onClick = {square} className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Mililitros a Litros  </p></button>
            <button onClick = {rombo} className = "btn btn-success me-1 ms-1 my-3" ><p className="h4"> Litros a Mililitros     </p></button>
            
            { hide1 ? <Conver1 diff = {difficult}  /> : null }
            { hide2 ? <Conver2 diff = {difficult}  /> : null}
            { hide3 ? <Conver3 diff = {difficult}  /> : null}
            { hide4 ? <Conver4 diff = {difficult}  /> : null}
            
        </div>
        )
}

export default Conversions;