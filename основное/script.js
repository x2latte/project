const { } = require("./items");
const { items } = require("./items.1");

const itemsList = document.getElementById('items-list');
const saveButton = document.getElementById('save-items');
const loadButton = document.getElementById('load-items');

// Функция для отображения пунктов на странице
function displayItems(items) {
  itemsList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    itemsList.appendChild(li);
  });
}

// Сохранение пунктов в localStorage
saveButton.addEventListener('click', () => {
  localStorage.setItem('items', JSON.stringify(items));
  alert('Items saved to localStorage');
});

// Загрузка пунктов из localStorage
loadButton.addEventListener('click', () => {
  const savedItems = JSON.parse(localStorage.getItem('items'));
  if (savedItems) {
    displayItems(savedItems);
  } else {
    alert('No items found in localStorage');
  }
});

// Отображение пунктов при загрузке страницы, если они есть в localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedItems = JSON.parse(localStorage.getItem('items'));
  if (savedItems) {
    displayItems(savedItems);
  }
});
