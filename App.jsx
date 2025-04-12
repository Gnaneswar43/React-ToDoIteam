import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text.trim() === "") return;
    const newItem = {
      id: nanoid(),
      text,
      completed: false,
    };
    setItems([newItem, ...items]);
    setText("");
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <Header />
      <div className="flex mb-4">
        <input
          className="border p-2 flex-grow"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new task..."
        />
        <button
          onClick={addItem}
          className="ml-2 px-4 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ToDoList items={items} onToggle={toggleItem} onDelete={deleteItem} />
    </div>
  );
}

export default App;
