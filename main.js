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

lunes.addEventListener('click',function(){

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
    ocultar(miercolesCard);
    ocultar(juevesCard);
    ocultar(viernesCard);

    console.log('Le diste click a martes');
    var dia = document.querySelector('#dia');
    dia.textContent = 'Martes despues del inicio de semana';
 

    //seteando informacion de la carta 2
    var titulo2 = document.querySelector('#title2');
    titulo2.textContent = '';
    var info2 = document.querySelector('#info-2');
    info2.textContent = 'Seguir avanzando con el projecto, ahora con mis companeros terminamos de disenar el modelo de la base de datos.';

    //seteando imagen de social media
})
miercoles.addEventListener('click',function(){
    console.log('Le diste click a miercoles');
    var dia = document.querySelector('#dia');
    dia.textContent = 'Miercoles Vamos por la mitad!';
    //Seteando informacion de la carta 1
    var titulo1 = document.querySelector('#title1');
    titulo1.textContent = 'Cena Familiar';
    var info1 = document.querySelector('#info-1');
    info1.textContent = 'Este dia a pesar de su respectivo estres, termina de maravilla en casa junto con la familia.';

    //seteando informacion de la carta 2
    var titulo2 = document.querySelector('#title2');
    titulo2.textContent = 'Que siga el trabajo';
    var info2 = document.querySelector('#info-2');
    info2.textContent = 'El avance de este dia fue que terminamos de hacer el prototipo de la aplicacion de escritorio.';

})
jueves.addEventListener('click',function(){
    console.log('Le diste click a jueves');

    var dia = document.querySelector('#dia');
    dia.textContent = 'Jueves de amigos';
    //Seteando informacion de la carta 1
    var titulo1 = document.querySelector('#title1');
    titulo1.textContent = 'Projecto vamos avanzando';
    var info1 = document.querySelector('#info-1');
    info1.textContent = 'A pesar de ser un projecto bastante grande seguimos avanzando, este dia terminamos el diseno del login. :)';

    //seteando informacion de la carta 2
    var titulo2 = document.querySelector('#title2');
    titulo2.textContent = 'Estudiar';
    var info2 = document.querySelector('#info-2');
    info2.textContent = 'El dia del examen se acerca y todavia no me siento listo...';

})
viernes.addEventListener('click',function(){
    console.log('Le diste click a viernes');

    var dia = document.querySelector('#dia');
    dia.textContent = 'Al fin Viernes!';
    //Seteando informacion de la carta 1
    var titulo1 = document.querySelector('#title1');
    titulo1.textContent = 'Cumpleanos de mi madre';
    var info1 = document.querySelector('#info-1');
    info1.textContent = 'Hoy 11 de ocubre nace mi madre, asi que sera un dia de celebracion.';

    //seteando informacion de la carta 2
    var titulo2 = document.querySelector('#title2');
    titulo2.textContent = 'Dia del examen! :o';
    var info2 = document.querySelector('#info-2');
    info2.textContent = 'Dia del examen, tengo miedo pero he estudiado.';

})