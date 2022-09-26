let cant_aero = 5
let cant_camas= 5
let cant_rastillo = 2;
let cant_transportadora = 2;
let opcion_producto;
let cant=0;
let continuar;
let opcion_servicio;
let total

function lista(){
    opcion_producto=prompt("1- Aerosoles $102\n2- camas $1340\n3- Rastillo $250\n4- transportadora $4300");
}
function seguir(){
    continuar= prompt("1- Seguir comprando\n2- pasar por caja")
}
function compra(cn){
    switch(cn){
        case "1":
            cant=prompt("ingrese la cantidad de Aerosoles ");
            if(cant>cant_aero){
                alert("no tenemos stock suficiente")
            }else
            cant= cant*102;
            return cant;
            break;
        case "2":
            cant=prompt("ingrese la cantidad de Camas ");
            if(cant>cant_camas){
                alert("no tenemos stock suficiente");
            }else
            cant= cant*1340; 
            return cant;
        case "3":
            cant=prompt("ingrese la cantidad de Rastrillos ");
            if(cant>cant_rastillo){
                alert("no tenemos stock suficiente");
            }else
            cant= cant*250; 
            return cant;
            break;            
        case "4":
            cant=prompt("ingrese la cantidad de Transportadoras ");
            if(cant>cant_transportadora){
                alert("no tenemos stock suficiente");
            }else
            cant= cant*4300; 
            return cant;
            break;          
        default:
        return 0;
        break;
    }     
}

alert("Bienvenido")
do{
    opcion_servicio =prompt("1- comprar\n2- afiliarse\n3- salir")
    if(opcion_servicio==1){
        lista();
        compra(opcion_producto);
        seguir()
    if(continuar==1){
        lista()
        compra(opcion_producto)
        alert("El total a pagar es: "+ cant)
    }else if(continuar==2){
     alert("El total a pagar es: "+ cant)
    }
    opcion_servicio =prompt("1- comprar\n2- afiliarse\n3- salir");
}else if(opcion_servicio==2){
    let nombre =prompt("Ingrese su nombre ");
    let apellido =prompt("Ingrese su apellido ");
    let mascota =prompt("Ingrese el nombre de su mascota ");
    alert("Aguarde un segundo que estamos guardando su Datos...");
    alert(" ok!! " + nombre+" " + apellido +" "+"su mascota "+mascota +" es socia de nuestra veterinaria")
    opcion_servicio =prompt("1- comprar\n2- afiliarse\n3- salir");
}

}while(opcion_servicio!=3)

  
  

 
