import React, { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}
export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setIput] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setIput("");
  }
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setIput(e.target.value)}
        placeholder="What needs to be done ?"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-gray-700"
      >
        Add
      </button>
    </form>
  );
}
