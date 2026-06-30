import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store';

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  function handleNewTodo(event: React.FormEvent) {
    event.preventDefault();
    console.log(newTodo);
    dispatch(add({ newTodo }));
    setNewTodo('');
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
