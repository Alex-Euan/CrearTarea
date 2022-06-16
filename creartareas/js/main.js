const boton = document.getElementById('agregar'),
      inpuTarea = document.getElementById('tareas');

function tareaCreada() {
    const tarea = inpuTarea.value,
     padre = document.getElementById('lista'),
     tareanew = document.createElement('li'),
     enlace = document.createElement('a'),
     contenido = document.createTextNode(tarea);
     enlace.appendChild(contenido);
     enlace.setAttribute('href', '#');
     tareanew.appendChild(enlace);
     

     if (tarea === "") {
        inpuTarea.setAttribute('placeholder', "Agrega una tarea, por favor.");
        inpuTarea.className = 'error';
        return false;
     }
    
     padre.appendChild(tareanew);


}

function validarTarea() {

}



boton.addEventListener('click', tareaCreada);
