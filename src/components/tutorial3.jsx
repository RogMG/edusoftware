import React from 'react';

const Tutorial3 = () =>{
    return(
        <div className = "my-4 ontainer shadow p-3 mb-5 bg-body rounded py-4 px-3">
            <h2 className= "text-info">¡HOLA! Bienvenido al desafio de CONVERSION DE UNIDADES</h2>
            <h3 className="text-center">CENTIMETROS A METROS</h3>
            <p>Para realizar este proceso de conversion tenemos que dividir nuestros centrimetros entre 100 <b>por ejemplo 350 cm / 100 es igual a 3.50 METROS</b></p>
            <h3 className="text-center">METROS A KILOMETROS</h3>
            <p>Para realizar esta conversion lo que tenemos que hacer es dividir nuestros metros entre 1000, <b>por ejemplo 3500 m / 1000 es igual a 3.5 KILOMETROS</b></p>
            <h3 className="text-center">MILILITROS A LITROS</h3>
            <p>Para realizar este proceso lo que debemos hacer es dividir nuestros Mililitros entre 1000, <b>por ejemplo si tenemos 356 Mililitros / 1000 obtenemos .356 LITROS</b></p>
            <h3 className="text-center">LITROS A MILILITROS</h3>
            <p>Para realizar este proces tenemos que multiplicar nuestros Litros x 1000, <b>por ejemplo, si tenemos 24 litros x 1000 obtenemos que tenemos 24000 MILILITROS</b></p>
           </div>
    );
}

export default Tutorial3;