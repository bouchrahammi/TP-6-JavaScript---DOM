
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    const taskText = input.value;

    if (taskText === "") {
        alert("Veuillez écrire quelque chose !");
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="btn-group">
            <button class="done-btn">✔</button>
            <button class="del-btn">✖</button>
        </div>
    `;

    li.querySelector('.done-btn').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.del-btn').addEventListener('click', function() {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
});