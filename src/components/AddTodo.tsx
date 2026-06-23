import { useState } from 'react';

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('');

  function handleNewTodo(event: React.FormEvent) {
    event.preventDefault();
    console.log(newTodo);
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type='text'
        placeholder='Adicionar tarefa'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type='submit'>Adicionar</button>
    </form>
  );
}
