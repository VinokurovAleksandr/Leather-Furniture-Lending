const canvas = document.getElementById('canvas');
const input = document.getElementById('textInput');
const renderBtn = document.getElementById('renderBtn');
const selectionFrame = document.getElementById('selection-frame');

let isSelecting = false;
let startX, startY;

// 1. Рендеринг літер
renderBtn.addEventListener('click', () => {
    const text = input.value;
    canvas.innerHTML = '';
    text.split('').forEach(char => {
        if (char.trim() === '') return; // Пропускаємо пробіли для зручності
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = char;
        canvas.appendChild(span);
    });
});

// 2. Виділення (Ctrl + Click)
canvas.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('letter')) {
        if (e.ctrlKey) {
            e.target.classList.toggle('selected');
            return;
        }
    }

    // Початок малювання рамки
    if (e.target === canvas) {
        isSelecting = true;
        startX = e.pageX;
        startY = e.pageY;
        selectionFrame.style.display = 'block';
        selectionFrame.style.width = '0px';
        selectionFrame.style.height = '0px';
        
        // Скидаємо виділення якщо без Ctrl
        if (!e.ctrlKey) {
            document.querySelectorAll('.letter').forEach(l => l.classList.remove('selected'));
        }
    }
});

// 3. Малювання рамки та логіка перетину
window.addEventListener('mousemove', (e) => {
    if (!isSelecting) return;

    const currentX = e.pageX;
    const currentY = e.pageY;

    const left = Math.min(startX, currentX);
    const top = Math.min(startY, currentY);
    const width = Math.abs(startX - currentX);
    const height = Math.abs(startY - currentY);

    selectionFrame.style.left = left + 'px';
    selectionFrame.style.top = top + 'px';
    selectionFrame.style.width = width + 'px';
    selectionFrame.style.height = height + 'px';

    // Перевірка перетину з кожною літерою
    const rect1 = selectionFrame.getBoundingClientRect();
    document.querySelectorAll('.letter').forEach(letter => {
        const rect2 = letter.getBoundingClientRect();
        const overlap = !(rect1.right < rect2.left || 
                          rect1.left > rect2.right || 
                          rect1.bottom < rect2.top || 
                          rect1.top > rect2.bottom);
        
        if (overlap) letter.classList.add('selected');
    });
});

window.addEventListener('mouseup', () => {
    isSelecting = false;
    selectionFrame.style.display = 'none';
});

// 4. Drag and Drop (Чистий JS)
let draggedElement = null;

canvas.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('letter') && !e.ctrlKey) {
        draggedElement = e.target;
        draggedElement.classList.add('dragging');
    }
});

window.addEventListener('mousemove', (e) => {
    if (!draggedElement) return;

    // Вільне переміщення
    draggedElement.style.left = e.pageX - draggedElement.offsetWidth / 2 + 'px';
    draggedElement.style.top = e.pageY - draggedElement.offsetHeight / 2 + 'px';

    // Логіка обміну місцями (Swap)
    const target = document.elementFromPoint(e.clientX, e.clientY);
    if (target && target.classList.contains('letter') && target !== draggedElement) {
        const letters = Array.from(canvas.children);
        const draggedIdx = letters.indexOf(draggedElement);
        const targetIdx = letters.indexOf(target);

        if (draggedIdx < targetIdx) {
            canvas.insertBefore(draggedElement, target.nextSibling);
        } else {
            canvas.insertBefore(draggedElement, target);
        }
    }
});

window.addEventListener('mouseup', () => {
    if (draggedElement) {
        draggedElement.classList.remove('dragging');
        draggedElement.style.position = ''; // Повертаємо у потік Flexbox
        draggedElement.style.left = '';
        draggedElement.style.top = '';
        draggedElement = null;
    }
});