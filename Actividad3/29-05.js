function addtask(){
    const input = document.getElementById('input1');
    const text1 = input.value;
    if (text1.length){
        const izq = document.getElementById('izq');

        const nuevoDiv = document.createElement("div");
        nuevoDiv.setAttribute("class", "pro");

        nuevoDiv.innerHTML = 
        `<label class="label"><input type="checkbox" class="cbox" onchange="tick(event)">${text1}</label>
        <button class="eliminar" onclick="eliminar(event)" onmouseover="ColorEliminar(event)" onmouseout="UnColorEliminar(event)">Eliminar</button>
        <button class="editar" onclick="editar(event)" onmouseover="ColorEditar(event)" onmouseout="UnColorEditar(event)">Editar</button>`;

        izq.appendChild(nuevoDiv);
        input.value = "";
    }
}

function tick(event){  
    const value = event.target.checked;   
    const izq = document.getElementById('izq');
    const item = event.target.parentNode.parentNode; 
    izq.removeChild(item);

    const down = document.getElementById('down');
    const itemcompletado = document.createElement('label');

    const text2 = item.querySelector("label").textContent;
    itemcompletado.innerHTML = 
    `<input type="checkbox" id="cbox3" checked="true" disabled="true"><del>${text2}<br></del>`;
    down.appendChild(itemcompletado);
}

let isEditing = false;
let originalText = '';

function editar(event) {
    if (isEditing) {
      return;
    }

    const div = event.target.parentNode;
    const label = div.querySelector('.label');
    const textoActual = label.textContent.trim();

    const input = document.createElement('input');
    input.type = 'text';
    input.value = textoActual;
    input.classList.add('editando');
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const nuevoTexto = this.value.trim();

        if (nuevoTexto !== '') {
          label.textContent = '';
          label.appendChild(createCheckbox());
          label.appendChild(document.createTextNode(nuevoTexto));
        }

        div.removeChild(this);
        label.style.display = 'flex';
        div.querySelector('.editar').style.display = 'inline-block';
        div.querySelector('.eliminar').style.display = 'inline-block';
        isEditing = false;
      }
    });

    originalText = textoActual;
    label.style.display = 'none';
    div.querySelector('.editar').style.display = 'none';
    div.querySelector('.eliminar').style.display = 'none';
    div.appendChild(input);
    input.focus();
    isEditing = true;
}

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('cbox');
    checkbox.onchange = function(event) {
      tick(event);
    };
    return checkbox;
}

function eliminar(event){
    const DeleteItem = event.target.parentNode;
    const izq = document.getElementById('izq');
    izq.removeChild(DeleteItem);
}

function Clear(){
    const dere = document.getElementById('down');
    dere.innerHTML= '';
}

function ColorList(){
    var text = document.getElementById('empty');
    text.style.color = "DeepPink";
    text.style.cursor = "pointer";
}
function UnColorList(){
    var text = document.getElementById('empty');
    text.style.color = "";
    text.style.cursor = "";
}
function ColorEliminar(event){
    const button = event.target;
    button.style.backgroundColor = "red";
    button.style.cursor = "pointer";      
}
function UnColorEliminar(event){
    const button = event.target;
    button.style.backgroundColor = "";
    button.style.cursor = "";
}
function ColorEditar(event){
    const button = event.target;
    button.style.backgroundColor = "DarkSlateGray";
    button.style.cursor = "pointer";
}
function UnColorEditar(event){
    const button = event.target;
    button.style.backgroundColor = "";
    button.style.cursor = "";
}
function ColorAgregar(){
    var text = document.getElementById('boton');
    text.style.backgroundColor = "SpringGreen";
    text.style.cursor = "pointer";
}
function UnColorAgregar(){
    var text = document.getElementById('boton');
    text.style.backgroundColor = "";
    text.style.cursor = "";
}