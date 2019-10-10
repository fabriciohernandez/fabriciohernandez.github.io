
var lunes = document.querySelector('#lunes');
var martes = document.querySelector('#martes');
var miercoles = document.querySelector('#miercoles');
var jueves = document.querySelector('#jueves');
var viernes = document.querySelector('#viernes');

lunes.addEventListener('click',function(){
    
    console.log('Le diste click a lunes');
    var dia = document.querySelector('#dia');
    dia.textContent = 'Lunes inicio de semana';
    //Seteando informacion de la carta 1
    var titulo1 = document.querySelector('#title1');
    titulo1.textContent = 'Avance de proyecto';
    var info1 = document.querySelector('#info-1');
    info1.textContent = 'El dia lunes tuve que dar un anvance a un proyecto que se esta llevando junto con otros companeros, el cual consiste en la creacion de una applicacion de escritorio que permita registrar empleados (a groso modo).';

    //seteando informacion de la carta 2
    var titulo2 = document.querySelector('#title2');
    titulo2.textContent = 'Estudiar';
    var info2 = document.querySelector('#info-2');
    info2.textContent = 'Inicio de semana inicio de clases, dentro de un par de dias tengo que presentar un examen y la verdad no me siento muy preparado...';

    //seteando imagen de social media
})

martes.addEventListener('click',function(){
    console.log('Le diste click a martes');
})
miercoles.addEventListener('click',function(){
    console.log('Le diste click a miercoles');
})
jueves.addEventListener('click',function(){
    console.log('Le diste click a jueves');
})
viernes.addEventListener('click',function(){
    console.log('Le diste click a viernes');
})