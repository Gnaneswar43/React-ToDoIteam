const ToDoItem = ({ item, onToggle, onDelete }) => {
    return (
      <div className="flex justify-between items-center bg-white p-2 border-b">
        <div
          className={`cursor-pointer ${
            item.completed ? "line-through text-gray-400" : ""
          }`}
          onClick={() => onToggle(item.id)}
        >
          {item.text}
        </div>
        <button
          onClick={() => onDelete(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default ToDoItem;
  