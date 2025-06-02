// dia de la semana

let diaSemana = "1";
let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"] // jaja esta la adivine 


function identificar(number){
    if (diaSemana > 7 || diaSemana < 0){
        console.log(`valor fuera de rango ${diaSemana}`)
    }
    else if (diaSemana < 7 || diaSemana >0){
        (number == 1)? console.log(dias[0]) : null;
        (number == 2)? console.log(dias[1]) : null;
        (number == 3)? console.log(dias[2]) : null;
        (number == 4)? console.log(dias[3]) : null;
        (number == 5)? console.log(dias[4]) : null;
        (number == 6)? console.log(dias[5]) : null;
        (number == 7)? console.log(dias[6]) : null;
    }
    else{
        console.log(`valor no valido ${diaSemana}`)
    }
}

identificar(diaSemana)