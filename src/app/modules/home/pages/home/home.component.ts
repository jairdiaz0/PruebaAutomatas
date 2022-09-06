import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.checkAll()
  }
  checkAll(){
    // Error asignamos un valor a una propiedad
    //1 = 1
    // Error no declaramos la variable a asignar
    //a = 10;
    // Error no se pude cambiar una constante
    //const a = 10;
    //a = 20;
    //No podemos asignar un valor de otro tipo en una variable
    //let a:number=false;
    //No podemos mandar un parametro de otro tipo de dato
    // function prueba(dato:string){
    //   console.log(dato);
    // }
    // prueba(true);
    //No podemos hacer operaciones con elementos de diferente tipo no compatible.
    //let a = true + 1;

    //Nos retorna un undefined si accedemos a un elemento que no existe.
    // let a = [1,2];
    // let b = a[3];
    // console.log(b);

    //No podemos usar desestructuración si el elmento no contiene la propiedad
    // const data = {
    //   'indice': 0,
    //   'token':1
    // }
    // const {indice, token, pruebaError} = data;
    
    // Error no se puede asignar un void a una variable.
    //let a = console.log('Hola');
    // Error valores no compatibles
    //let a = true+1
    // Error no declara dentro de if
    // if(a = b){

    // }
    // while(a = b){

    // }
    //Error en objetos se ocupa : para declarar
    //const data = {'Hola' = 1};

    //No mismo nombre funcion y variable
    // function a (){
      
    // }
    // let a = 'Hola';
    
    //No se puede usar la variable en la misma declaración
    //const a = a < b    

    //En arreglos si es posible usar diferentes tipos de valores aún si el anterior fue de otro tipo
    // let a = ['Hola', 1]
    // a[1] = 'Hola2'
  }
}