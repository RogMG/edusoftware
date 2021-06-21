import React from 'react';
import triangulo from '../triangulo.jpg'
import area from '../area.jpg'
const Tutorial4 = () =>{
    return(
        <div className = "my-4 ontainer shadow p-3 mb-5 bg-body rounded py-4 px-3">
        <h2 className= "text-info">¡HOLA! Bienvenido al desafio de Calculo de Area y Perimetro</h2>
      
            <h2 className="text-center">CUADRADO</h2>
            <h5 className="text-center">PERIMETRO</h5>
            <img src="https://t1.up.ltmcdn.com/es/images/4/4/5/como_calcular_el_area_y_perimetro_de_un_cuadrado_con_ejemplo_2544_2_600.jpg" width = "300" heigth = "260"  alt="" />
            <p>Para determinar el perimetro de un circulo solo hay que conocer uno de sus lados y este lado multiplicarlo por 4 o simplemente sumar cuatro veces ese lado.</p>
            <h5 className="text-center">AREA</h5>
            <img src="https://www.pequeocio.com/wp-content/uploads/2020/01/area-cuadrado.jpg" width = "300" heigth = "260"  alt="" />
            <p>Para determinar el area de un cuadrado hay que multiplcar la base por la altura, esto es si sabemos que un lado mide 5 entonces hacemos la multiplicacion de 5 x 5 = 25, entonces el area de este cuadrado es de 25 </p>
          
            <h2 className="text-center">RECTANGULO</h2>
            <img src="https://www.problemasyecuaciones.com/geometria2D/area/poligono/rectangulo/formulas.png" width = "200" heigth = "260"  alt="" />
            <h5 className="text-center">PERIMETRO</h5>
            <p> Para poder calcular el perimetro de un rectangulo solo hace falta sumar sus 2 alturas mas sus 2 bases, por lo que <b>Si tenemos una base de 3 y una altura de 6 el perimetro es igual a 18 ((3+3) + (6+6) = 18)</b> </p>
            <h5 className="text-center">AREA</h5>
            <p>El area es igua a la base por la altura, por lo que <b>si la base es de 5 y la altura es de 10 entonces el area es igual a 50 (5 x 10  = 50)</b></p>

            <h2 className="text-center">CIRCULO</h2>
            <img src="https://yosoytuprofe.20minutos.es/wp-content/uploads/2020/02/PIT%C3%81GORAS-6-1024x1024.jpg" width = "400" heigth = "260"  alt="" />
            <h5 className="text-center">PERIMETRO</h5>
            <p>Para calccular el perimetro de un circulo debemos multiplicar 2 x PI x RADIO <b> por lo que si tenemos que el radio de un circulo mide 5 tenemos que 2 x PI x 5 = 31.4 </b> </p>
            <h5 className="text-center">AREA</h5>
            <p>El area de un circulo esta determinado por la formula PI x RADIO²  <b>si el radio es 5 entonces tenemos PI x 5² que es igual a 78.5</b></p>



            <h2 className="text-center">ROMBOIDE</h2>
            <img src="https://yosoytuprofe.20minutos.es/wp-content/uploads/2020/04/%C3%81rea-y-per%C3%ADmetro-rombo-1024x1024.jpg" width = "400" heigth = "260"  alt="" />
            <h5 className="text-center">PERIMETRO</h5>
            <p>El perimetro de un romboide es igual a la suma de sus lados, por lo que si uno mide 10, los demas tambien, <b>por lo que tenemos que el perimetro de un romboide donde uno de sus lados es igual a 12 el perimetro entonces es igual a 48 (12+12+12+12 = 48)</b></p>
            <h5 className="text-center">AREA</h5>
            <p>El Area de un romboide es igual a la multiplicaciones de sus diagonales dividido entre 2, <b>por lo que si las diagonales miden 16 y 12, tenemos que multiplicar estos valores, que nos dan como resultado 192, luego 192 dividio entre 2 es igua a 96, y 96 es el area de este rombo</b></p>
          
            <h2 className="text-center">TRIANGULOS</h2>
            <h5 className="text-center">PERIMETRO ESCALENO</h5>
            <img src="https://www.neurochispas.com/wp-content/uploads/2021/03/formula-del-perimetro-del-triangulo-escaleno.png" width = "300" heigth = "260" alt="" />
            <p>El perimetro de un triangulo es la suma directa de sus 3 lados, <b>por lo que si tenemos que sus lados miden, 5 ,7 y 6 respectivamente su perimetro es igual a 18 </b></p>
            <h5 className="text-center">PERIMETRO ISOCELES</h5>
            <img src="https://www.neurochispas.com/wp-content/uploads/2021/03/formula-del-perimetro-de-un-triangulo-isosceles.png" width = "300" heigth = "260" alt="" />
            <p>El perimetro de un triangulo esta dado por la suma de sus 2 lados más la suma de la base<b>por lo que si tenemos que un lado mide 5 y la base es igual a 8 entonces el perimetro es igual a 18</b></p>
            <h5 className="text-center">PERIMETRO EQUILATERO</h5>
            <img src="https://www.neurochispas.com/wp-content/uploads/2021/03/formula-del-perimetro-de-un-triangulo-equilatero.png" width = "300" heigth = "260" alt="" />
            <p>El perimetro de un triangulo equilatero esta dado por <b>la multiplicacion de cualquiera de sus lados x 3, si uno de sus lados mide 9 entonces el perimetro es igual a 27</b></p>


            <img src = {triangulo} width = "300" heigth = "260"  alt="" />
            <h5 className="text-center">AREA ESCALENO, EQUILATERO e ISOCELES</h5>
            <img src={area}  width = "300" heigth = "260"  alt="" />
            <p>El area de un triangulo y cualquier otro mientras no sea equilatero es igua a la Base x Altura dividio entre 2, <b>por lo que si la base es 7 y la altura 4  esto es igual 28 y divido entre 2 es igual a 14, entonces el area es igual a 14 </b></p>
        


          
    </div>
    );
}

export default Tutorial4;