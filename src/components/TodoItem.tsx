import { Trash2 } from "lucide-react";
import { Todo } from "../data/types";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 text-blue-600 bg-white hover:*:bg-slate-300 grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-red-600" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="p-2">
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
