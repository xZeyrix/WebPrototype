const createNoteForm = document.getElementById('createNoteForm');
const closeBtn = document.getElementById('closeBtn');
const headerInput = document.getElementById('headerInput');
const textInput = document.getElementById('textInput');
const notesContainer = document.getElementById('notesContainer');
const empty = document.getElementById('empty');
const heroButtons = document.getElementById('heroButtons');
const createNewNoteBtn = document.getElementById('createNewNoteBtn');

document.querySelectorAll('.createNoteButton').forEach((button) => {
    button.onclick = () => {
        createNoteForm.style.display = 'block';
    };
});

closeBtn.onclick = () => {
    createNoteForm.style.display = 'none';
};

createNewNoteBtn.onclick = () => {
    const note = {
        title: headerInput.value,
        text: textInput.value,
    };

    if (headerInput.value.trim() === '' || textInput.value.trim() === '') {
        alert('Введите корректные данные.');
        return
    }

    // Получаем текущие заметки из localStorage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Добавляем новую заметку
    notes.push(note);

    // Сохраняем обновлённый массив заметок в localStorage
    localStorage.setItem('notes', JSON.stringify(notes));

    // Очищаем поля ввода и закрываем форму
    headerInput.value = '';
    textInput.value = '';
    createNoteForm.style.display = 'none';

    alert('Заметка сохранена!');
    renderNotes();
};

// Функция для рендера заметок
function renderNotes() {
    // Очищаем контейнер
    notesContainer.innerHTML = '';

    // Получаем заметки из localStorage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Если заметок нет, отображаем сообщение
    if (notes.length === 0) {
        empty.style.display = 'flex';
        heroButtons.style.display = 'none';
        return;
    }

    // Рендерим каждую заметку
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.text}</p>
            <button class="removeNote" data-index="${index}">Удалить</button>
        `;
        notesContainer.appendChild(noteElement);
    });

    // Добавляем обработчики для кнопок "Удалить"
    document.querySelectorAll('.removeNote').forEach((button) => {
        button.onclick = (e) => {
            const index = e.target.dataset.index;
            deleteNote(index);
        };
    });

    empty.style.display = 'none';
    heroButtons.style.display = 'flex';
}

function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1); // Удаляем заметку по индексу
    localStorage.setItem('notes', JSON.stringify(notes)); // Сохраняем обновлённый массив
    renderNotes(); // Перерисовываем заметки
}

renderNotes();