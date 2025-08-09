// tasks.js (CommonJS, Node ≥ 16)
// Уникальные ID без коллизий
const { randomUUID } = require("crypto");

// === Хранилище (пока в памяти) ===
let tasks = [];

// === Утилиты ===
function assertNonEmptyString(value, name = "value") {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${name} must be a non-empty string`);
  }
}

function printTasks(label = "Tasks") {
  console.log("\n" + label);
  if (tasks.length === 0) {
    console.log("(empty)");
  } else {
    console.table(tasks);
  }
}

// === CRUD для задач ===
function addTask(title) {
  assertNonEmptyString(title, "title");
  const task = {
    id: randomUUID(), // уникальный идентификатор
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task); // мутабельное добавление в конец массива
  return task;
}

function removeTask(id) {
  // иммутабельное удаление: новый массив без совпавшего id
  const before = tasks.length;
  tasks = tasks.filter((task) => task.id !== id);
  return tasks.length < before; // вернёт true, если что-то удалили
}

function getTasks() {
  // Можно вернуть копию: return [...tasks];
  return tasks;
}

function getTaskById(id) {
  return tasks.find((t) => t.id === id) || null;
}

function toggleTask(id) {
  // иммутабельное обновление: создаём новый объект при совпадении
  let updated = false;
  tasks = tasks.map((task) => {
    if (task.id === id) {
      updated = true;
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  return updated; // true, если задача найдена и обновлена
}

function updateTaskTitle(id, newTitle) {
  assertNonEmptyString(newTitle, "newTitle");
  let updated = false;
  tasks = tasks.map((task) => {
    if (task.id === id) {
      updated = true;
      return { ...task, title: newTitle.trim() };
    }
    return task;
  });
  return updated;
}

// === Демонстрация работы ===
const t1 = addTask("Learn JavaScript");
const t2 = addTask("Learn Node.js");
printTasks("All tasks");

toggleTask(t1.id);
printTasks(`After toggling ${t1.id}`);

updateTaskTitle(t1.id, "Learn Modern JavaScript");
printTasks(`After title update for ${t1.id}`);

removeTask(t2.id);
printTasks(`After removing ${t2.id}`);

// Примеры безопасных геттеров:
console.log("\nGet by ID (exists):", getTaskById(t1.id));
console.log("Get by ID (miss):", getTaskById("non-existent-id"));
