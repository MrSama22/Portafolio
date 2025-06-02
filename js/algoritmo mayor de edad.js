//algoritmo mayot de edad

const EDAD_ADULTO = 18;
console.log(typeof EDAD_ADULTO)

let edadPersona = 18;

if (edadPersona >= EDAD_ADULTO){
    console.log(`usted es un adulto con ${edadPersona} años`)
}
else if (edadPersona <  EDAD_ADULTO && edadPersona > 0){
    console.log(`la edad :${edadPersona}: no es mayor de edad`)
}
else{
    console.log("edad no valida")
}