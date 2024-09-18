const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

// Adicionar nova tarefa
addItemBtn.onclick = function() {
    const taskText = itemInput.value;

    if (taskText !== '') {
        const li = document.createElement('li'); // Criar tarefa
        const checkbox = document.createElement('input'); // Caixa de seleção
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        
        // Botão para remover
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        li.appendChild(removeBtn);
        
        itemList.appendChild(li); // Adiciona tarefa à lista
        itemInput.value = ''; // Limpa o campo de texto

        // Função de remover tarefa
        removeBtn.onclick = function() {
            itemList.removeChild(li);
        };
    }
};

// Mostrar todas as tarefas
document.getElementById('showAllBtn').onclick = function() {
    const tasks = itemList.getElementsByTagName('li');
    for (let task of tasks) {
        task.style.display = 'list-item'; // Mostra tudo
    }
};

// Mostrar concluídas
document.getElementById('showCompletedBtn').onclick = function() {
    const tasks = itemList.getElementsByTagName('li');
    for (let task of tasks) {
        const checkbox = task.getElementsByTagName('input')[0];
        task.style.display = checkbox.checked ? 'list-item' : 'none';
    }
};

// Mostrar não concluídas
document.getElementById('showNotCompletedBtn').onclick = function() {
    const tasks = itemList.getElementsByTagName('li');
    for (let task of tasks) {
        const checkbox = task.getElementsByTagName('input')[0];
        task.style.display = checkbox.checked ? 'none' : 'list-item';
    }
};
