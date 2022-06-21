const boton = document.getElementById('agregar'),
      inpuTarea = document.getElementById('tareas'),
      lista = document.getElementById('lista');

function tareaCreada() {
     const tarea = inpuTarea.value,
     //CREAMOS EL ELEMENTO
     tareanew = document.createElement('li'),
     //CREAMOS EL ELEMENTO ENLACE
     enlace = document.createElement('a'),
     //CREAMOS UNA VARIABLE CON EL TEXTO DEL INPUT
     contenido = document.createTextNode(tarea);

     if (tarea === "") {
      inpuTarea.setAttribute('placeholder', "Agrega una tarea, por favor.");
      inpuTarea.className = 'error';
      return false;
   }

     //AGREGAMOS EL CONTENIDO DEL INPUT AL ENLACE
     enlace.appendChild(contenido);
     //AGREGAMOS ATRIBUTOS PARA VOLVERLO UN ENLACE AL ELEMENTO A
     enlace.setAttribute('href', '#');
     //AGREGAMOS EL ENLACE AL ELEMENTO LI
     tareanew.appendChild(enlace);
     //AGREGAMOS LA NUEVA TAREA A LA LISTA
     lista.appendChild(tareanew);
     
     //resetea el input para dejarlo en blanco
     inpuTarea.value = ""; 

     //usamos un for para recorrer cada enlace de la lista y le agregamos un evento para que se elimine al darle un click
/*         for (var i  = 0; i <= lista.children.length -1; i++){
        lista.children[i].addEventListener("click", function(){
          this.parentNode.removeChild(this);
        });
     }   */ 
     eliminartarea();
}

function validarTarea() {
   if (inpuTarea.value === "") {
      inpuTarea.setAttribute('placeholder', "Escribe una tarea");
      inpuTarea.className = 'tareas';
   }
}

function eliminartarea() {
   for (var i  = 0; i <= lista.children.length -1; i++){
      lista.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this);
      });
   }  
}
// Le añadimos al btn un evento para que agregue una tarea a la lista
boton.addEventListener('click', tareaCreada);
// validamos si el input no tiene algo escrito
inpuTarea.addEventListener('click', validarTarea);

// Hacemos que elimine un enlace al darle un click de la lista creada desde el inicio
for (const i = 0; i <= lista.children.length -1; i++) {
   lista.children[i].addEventListener("click", eliminartarea);
} 