let tasks = [];

function addTask(title) {
  const task = {
    id: Date.now(),
    title, // сокращённая запись вместо title: title
    completed: false,
  };
  tasks.push(task); // мутабельно добавляем
  return task;
}

function removeTask(id) {
  // иммутабельно удаляем: создаём новый массив
  tasks = tasks.filter((task) => task.id !== id); // !== строгое неравенство
}

function getTasks() {
  return tasks; // можно вернуть [...tasks] для копии
}

function toggleTask(id) {
  // иммутабельно обновляем: для совпадающей задачи возвращаем новый объект
  tasks = tasks.map((task) =>
    task.id === id
      ? { ...task, completed: !task.completed } // spread + инверсия boolean
      : task
  );
}

// --- Тестирование ---
const t1 = addTask("Learn JavaScript");
const t2 = addTask("Learn Node.js");

console.log("All tasks:");
console.table(getTasks());

toggleTask(t1.id);

console.log("After toggling task 1:");
console.table(getTasks());

removeTask(t2.id);

console.log("After removing task 2:");
console.table(getTasks());

// Важно: t1 ссылается на ПРЕЖНЮЮ версию объекта.
// Вот почему:
console.log("Is t1 the same object as in tasks after toggle?");
const sameRef = getTasks().find((x) => x.id === t1.id) === t1;
console.log(sameRef); // false — потому что в tasks теперь НОВЫЙ объект
