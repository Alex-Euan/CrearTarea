const boton = document.getElementById('agregar'),
      inpuTarea = document.getElementById('tareas'),
      padre = document.getElementById('lista');

function tareaCreada() {
    const tarea = inpuTarea.value,
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
     inpuTarea.value = "";
}

function validarTarea() {
   if (inpuTarea.value === "") {
      inpuTarea.setAttribute('placeholder', "Escribe una tarea");
      inpuTarea.className = 'tareas';
   }
}

function eliminartarea() {
/*    for (const i = 0; i = .length; index++) {

   } */
}

boton.addEventListener('click', tareaCreada);

inpuTarea.addEventListener('click', validarTarea);


