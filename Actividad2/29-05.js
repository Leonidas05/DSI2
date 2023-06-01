function addtask(){
    const input = document.getElementById('input1');
    const text1 = input.value;
    if (text1.length){
        const izq = document.getElementById('izq');

        const nuevoDiv = document.createElement("div");
        nuevoDiv.setAttribute("class", "pro");

        nuevoDiv.innerHTML = 
        `<label class="label"><input type="checkbox" class="cbox" onchange="tick(event)">${text1}</label>
        <button class="eliminar" onclick="eliminar(event)">Eliminar</button>
        <button class="editar">Editar</button>`;

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

function eliminar(event){
    const DeleteItem = event.target.parentNode;
    const izq = document.getElementById('izq');
    izq.removeChild(DeleteItem);
}

function Clear(){
    const dere = document.getElementById('down');
    dere.innerHTML= '';
}

function Color(){
    var text = document.getElementById('empty');
    text.style.color = "Red";
    text.style.cursor = "pointer";
}
function UnColor(){
    var text = document.getElementById('empty');
    text.style.color = "";
    text.style.cursor = "";
}