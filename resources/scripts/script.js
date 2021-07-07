const inputItem = document.getElementById('item');
const ul = document.querySelector('ul');
const clearButton = document.getElementById('clear');
const form = document.querySelector('form');

let itemList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemList));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = text => {
    const li = document.createElement('li');
    li.textContent = text;
    li.className += "list-group-item";
    ul.appendChild(li);
}

function addItem(){
    if(inputItem.value === ''){
        inputItem.value = "Empty";
    }
    itemList.push(inputItem.value);
    localStorage.setItem('items', JSON.stringify(itemList));
    liMaker(inputItem.value);
    inputItem.value = '';
}

form.addEventListener('submit', function (e){
   e.preventDefault();
   addItem();
});

data.forEach(item => {
    liMaker(item);
});

clearButton.addEventListener('click', function (){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
});

