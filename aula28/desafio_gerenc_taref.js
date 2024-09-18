const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');
const showAllBtn = document.getElementById('showAllBtn');
const showCompletedBtn = document.getElementById('showCompletedBtn');
const showNotCompletedBtn = document.getElementById('showNotCompletedBtn');

let tasks = [];

// Adiciona uma nova tarefa
function addItem() {
    const itemText = itemInput.value;
    if (itemText) {
        tasks.push({ text: itemText, completed: false });
        itemInput.value = '';
        renderTasks();
    }
}

// Marca a tarefa como concluída
function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Renderiza a lista de tarefas
function renderTasks() {
    itemList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const li = document.createElement('li');
        
        const textNode = document.createTextNode(task.text);
        li.appendChild(textNode);

        // Botão Editar
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.onclick = function() {
            const newText = prompt('Edita a tarefa:', task.text);
            if (newText) {
                task.text = newText;
                renderTasks();
            }
        };
        li.appendChild(editBtn);

        // Botão Remover
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = function() {
            tasks.splice(i, 1);
            renderTasks();
        };
        li.appendChild(removeBtn);

        // Botão Concluir
        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Desmarcar' : 'Concluir';
        completeBtn.onclick = function() {
            toggleCompleted(i);
        };
        li.appendChild(completeBtn);

        // Adiciona estilo para tarefas concluídas
        if (task.completed) {
            li.style.textDecoration = 'line-through';
        }

        itemList.appendChild(li);
    }
}

// Adiciona eventos aos botões
addItemBtn.onclick = addItem;

showAllBtn.onclick = function() {
    renderTasks();
};

showCompletedBtn.onclick = function() {
    itemList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            const li = document.createElement('li');
            li.textContent = tasks[i].text;
            li.style.textDecoration = 'line-through';
            itemList.appendChild(li);
        }
    }
};

showNotCompletedBtn.onclick = function() {
    itemList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].completed) {
            const li = document.createElement('li');
            li.textContent = tasks[i].text;
            itemList.appendChild(li);
        }
    }
};

// Permite adicionar tarefa pressionando "Enter"
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
