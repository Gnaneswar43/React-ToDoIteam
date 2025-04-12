import ToDoItem from "./ToDoItem";

const ToDoList = ({ items, onToggle, onDelete }) => {
  return (
    <div className="bg-gray-100 rounded">
      {items.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ToDoList;
