import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export function TodoList() {
  const todos = useSelector((store: RootState) => {
    return store.todo;
  });

  console.log('todos', todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
