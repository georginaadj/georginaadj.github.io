let app = document.getElementById('typewriter' );

let typewriter = new typewriter( app,{
    loop: true, // bucle de eventos
    delay:75, //tiempo que toma el caracter para aparecer en el DOM
});

typewriter
.pauseFor(2500) // Agrega eventos de pausa a la cola por milisegundo
.typeString('Desarrollo sitios web y escribo articulos sobre programa')
.pauseFord(200)
.deleteChars(10) // Borra los caracteresde la cola de la cadena 
.start(); // Inicia el bucle de eventos