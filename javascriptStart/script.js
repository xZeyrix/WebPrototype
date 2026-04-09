// Находим элементы на странице
const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');
const nameInput = document.getElementById('nameInput');
const sayHelloBtn = document.getElementById('sayHelloBtn');
const helloOutput = document.getElementById('helloOutput');
const loadTopicsBtn = document.getElementById('loadTopicsBtn');
const topicsList = document.getElementById('topicsList');
const colorBtn = document.getElementById('colorBtn');
const randomBtn = document.getElementById('randomBtn');
const randomOutput = document.getElementById('randomOutput');
const timerStartBtn = document.getElementById('timerStartBtn');
const timerResetBtn = document.getElementById('timerResetBtn');
const timerValue = document.getElementById('timerValue');

// 1. Обработчик нажатия на кнопку приветствия
greetBtn.addEventListener('click', () => {
    greeting.textContent = 'Привет! JavaScript изменил текст на странице.';
    greeting.style.color = '#1e3d7b';
});

// 2. Ввод имени и вывод персонального сообщения
sayHelloBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name === '') {
        helloOutput.textContent = 'Пожалуйста, введите имя.';
        helloOutput.style.color = '#c0392b';
        return;
    }

    helloOutput.textContent = `Привет, ${name}! Добро пожаловать на урок JavaScript.`;
    helloOutput.style.color = '#2e5d3c';
});

// 3. Работа с массивом и созданием элементов списка
const topics = ['Переменные', 'Функции', 'События', 'DOM', 'Массивы'];

loadTopicsBtn.addEventListener('click', () => {
    topicsList.innerHTML = '';

    topics.forEach((topic) => {
        const li = document.createElement('li');
        li.textContent = topic;
        topicsList.appendChild(li);
    });
});

// 4. Изменение стиля страницы и генерация случайного числа
colorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomPastelColor();
});

randomBtn.addEventListener('click', () => {
    const randomNumber = getRandomInt(1, 100);
    randomOutput.textContent = `Случайное число: ${randomNumber}`;
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPastelColor() {
    const r = Math.round((Math.random() * 127) + 127);
    const g = Math.round((Math.random() * 127) + 127);
    const b = Math.round((Math.random() * 127) + 127);
    return `rgb(${r}, ${g}, ${b})`;
}


// 5. Таймер
let timer = 0, timerInterval = 0, timerStatus = false;

timerStartBtn.addEventListener('click', () => {
    if (timerStatus == true) {
        clearInterval(timerInterval)
        timerStatus = false;
        timerStartBtn.textContent = "Старт";
        return
    }
    timerInterval = setInterval(() => {
        timer += 0.01;
        timerValue.textContent = Number(timer.toFixed(2));
    }, 10);
    timerStartBtn.textContent = "Стоп";
    timerStatus = true;
});
timerResetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timer = 0;
    timerStatus = false;
    timerValue.textContent = timer;
    timerStartBtn.textContent = "Старт";
});