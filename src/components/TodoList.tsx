import { useAppSelector, type RootState } from '../store';

export function TodoList() {
  const todos = useAppSelector((store: RootState) => {
    return store.todo;
  });

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
