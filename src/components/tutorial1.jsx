import React from 'react';
const Tutorial1 = () =>{

    return(
        <div className = "my-4 ontainer shadow p-3 mb-5 bg-body rounded py-4 px-3">
            <h2 className= "text-info">¡HOLA! Bienvenido al desafio de calculo mental</h2>
            <h3 className="text-center">SUMAS</h3>
            <p>Para recapitular, Recordemos que para realizar una suma tenemos que tomar el primer numero, y aumentarlo en la misma cantidad que el segundo</p>
            <p>De tal manera que la operacion 5+6 = 11, porqué si contamos 6 numeros a partir de 5, obtenemos el numero 11</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Addition01.svg" alt="" />
            <p>En esta imagen tenemos de lado derecho 2 manzanas y de lado izquierdo 3 manzanas, estas manzanas sumadas da un resultado de 5</p>
            <h3 className="text-center">RESTAS</h3>
            <p>Para realizar una resta hacemos este proceso en reversa, el numero 6-5 = 1 porque si contamos hacia atras 5 numeros a partir del 6 obtenemos que es igual a 1</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Subtraction01.svg/1200px-Subtraction01.svg.png" width = "300" heigth = "260" alt="" />
            <p>En este ejemplo tenemos 5 Duraznos, pero si nosotros restamos 2 entonces como resultado tenemos 3</p>
            <h3 className="text-center">MULTIPLICACIÓN</h3>
            <p>Para realizar una multiplicacion obtenemos que 4x5 = 20 porque solo tenemos que aumentar un numero en la segunda cantidad</p>
            <p>Entonces, si tenemos 4 y sumamos el numero 4 por si mismo 5 veces obtenemos <b>4 + 4 + 4 + 4 + 4 = 20</b> que tambien puede ser visto como <b>4 + 4 = 8 + 4 = 12 + 4 = 16 + 4 = 20</b></p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Multiply_4_bags_3_marbles.svg/226px-Multiply_4_bags_3_marbles.svg.png"  width = "270" heigth = "300" alt="" />
            <p>Por ejemplo, si tenemos una bolsa con 3 pelotas, y multiplicamos esta cantidad por 4 obtenemos que tenemos un total de 12, tambien lo puedes entender como 4 bolsas con 3 pelotas cada una que es 4 x 3 = 12</p>
        </div>
    );
}

export default Tutorial1;