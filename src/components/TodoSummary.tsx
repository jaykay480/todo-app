import { Todo } from "../data/types";

interface TodoSummary {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummary) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-2">
      <p>
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete all completed
        </button>
      )}
    </div>
  );
}
