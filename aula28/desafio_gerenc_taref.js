const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');
const showAllBtn = document.getElementById('showAllBtn');
const showCompletedBtn = document.getElementById('showCompletedBtn');
const showNotCompletedBtn = document.getElementById('showNotCompletedBtn');

// Função para adicionar um novo item
function addItem() {
    const itemText = itemInput.value;

    if (itemText !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(itemText));

        // Botão de Editar
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.className = 'edit-btn';
        li.appendChild(editBtn);

        // Botão de Remover
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.className = 'remove-btn';
        li.appendChild(removeBtn);

        itemList.appendChild(li);
        itemInput.value = '';

        // Função de remover tarefa
        removeBtn.onclick = function() {
            itemList.removeChild(li);
        };

        // Função de editar tarefa
        editBtn.onclick = function() {
            const newTaskText = prompt('Edite a tarefa:', itemText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.childNodes[1].textContent = newTaskText; // Atualiza o texto da tarefa
            }
        };
    }
}

// Adiciona evento de clique ao botão de adicionar
addItemBtn.addEventListener('click', addItem);

// Também permite adicionar o item pressionando "Enter"
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

// Filtrar tarefas
showAllBtn.onclick = function() {
    Array.from(itemList.children).forEach(li => {
        li.style.display = 'flex'; // Mostra todas as tarefas
    });
};

showCompletedBtn.onclick = function() {
    Array.from(itemList.children).forEach(li => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        li.style.display = checkbox.checked ? 'flex' : 'none'; // Mostra apenas tarefas concluídas
    });
};

showNotCompletedBtn.onclick = function() {
    Array.from(itemList.children).forEach(li => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        li.style.display = checkbox.checked ? 'none' : 'flex'; // Mostra apenas tarefas não concluídas
    });
};
