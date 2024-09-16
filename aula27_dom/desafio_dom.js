// Captura os elementos do DOM
const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

// Função para adicionar um novo item
function addItem() {
    const itemText = itemInput.value;
    
    if (itemText !== '') {
        // Cria um novo elemento <li>
        const li = document.createElement('li');
        li.textContent = itemText;

        // Cria o botão "Remover"
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';

        // Adiciona um evento ao botão para remover o item
        removeBtn.addEventListener('click', function() {
            itemList.removeChild(li);
        });

        // Adiciona o botão ao item <li>
        li.appendChild(removeBtn);

        // Adiciona o item à lista <ul>
        itemList.appendChild(li);

        // Limpa o campo de input
        itemInput.value = '';
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
