//REVISAR ORTOGRAFIA

//----------------DECLARACION DE VARIABLES Y OBTENCION DE SU REFERENCIA------------------
var lunes = document.querySelector('#lunes');
var martes = document.querySelector('#martes');
var miercoles = document.querySelector('#miercoles');
var jueves = document.querySelector('#jueves');
var viernes = document.querySelector('#viernes');

var lunesCard = document.querySelectorAll('#lunesCard');
var martesCard = document.querySelectorAll('#martesCard');
var miercolesCard = document.querySelectorAll('#miercolesCard');
var juevesCard = document.querySelectorAll('#juevesCard');
var viernesCard = document.querySelectorAll('#viernesCard');
//----------------DECLARACION DE VARIABLES Y OBTENCION DE SU REFERENCIA------------------

function ocultar(elemento){
    for (var i=0;i<elemento.length;i++){
        elemento[i].style.display='none';
    }
}


function mostrar(elemento){
    for (var i=0;i<elemento.length;i++){
        elemento[i].style.display='flex';
    }
}

//------OCULTANDO TODOS LOS ELEMENTOS--------
ocultar(lunesCard);
ocultar(martesCard);
ocultar(miercolesCard);
ocultar(juevesCard);
ocultar(viernesCard);
//------OCULTANDO TODOS LOS ELEMENTOS--------



lunes.addEventListener('click',function(){
    mostrar(lunesCard);
    ocultar(martesCard);
    ocultar(miercolesCard);
    ocultar(juevesCard);
    ocultar(viernesCard);
    
    console.log('Le diste click a lunes');
    var dia = document.querySelector('#dia');
    dia.textContent = 'Lunes inicio de semana';

})

martes.addEventListener('click',function(){
    ocultar(lunesCard);
    mostrar(martesCard);
    ocultar(miercolesCard);
    ocultar(juevesCard);
    ocultar(viernesCard);

    console.log('Le diste click a martes');
    var dia = document.querySelector('#dia');
    dia.textContent = 'Martes despues del inicio de semana';

})
miercoles.addEventListener('click',function(){
    ocultar(lunesCard);
    ocultar(martesCard);
    mostrar(miercolesCard);
    ocultar(juevesCard);
    ocultar(viernesCard);

    console.log('Le diste click a miercoles');
    var dia = document.querySelector('#dia');
    dia.textContent = '¡Miercoles Vamos por la mitad!';

})
jueves.addEventListener('click',function(){
    ocultar(lunesCard);
    ocultar(martesCard);
    ocultar(miercolesCard);
    mostrar(juevesCard);
    ocultar(viernesCard);

    console.log('Le diste click a jueves');
    var dia = document.querySelector('#dia');
    dia.textContent = 'Jueves de amigos';
})
viernes.addEventListener('click',function(){
    ocultar(lunesCard);
    ocultar(martesCard);
    ocultar(miercolesCard);
    ocultar(juevesCard);
    mostrar(viernesCard);
    console.log('Le diste click a viernes');

    var dia = document.querySelector('#dia');
    dia.textContent = '¡Al fin Viernes!';

})