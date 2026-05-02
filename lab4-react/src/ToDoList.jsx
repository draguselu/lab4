import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function handleAdd() {
    if (input.trim() === '') return;
    setTodos([...todos, input.trim()]);
    setInput('');
  }

  function handleDelete(index) {
    setTodos(todos.filter(function(_, i) {
      return i !== index;
    }));
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd();
  }

  return (
    <div className="todo-wrap">
      <div className="input-row">
        <input
          className="field-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Adaugă un task..."
        />
        <button className="btn btn-accent" onClick={handleAdd}>
          + Adaugă
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="todo-empty">Niciun task adăugat încă.</p>
      ) : (
        <ul className="todo-list">
          {todos.map(function(todo, index) {
            return (
              <li key={index} className="todo-item">
                <span className="todo-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="todo-text">{todo}</span>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(index)}
                  aria-label="Șterge task"
                >
                  ✕
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {todos.length > 0 && (
        <p className="todo-count">{todos.length} task{todos.length !== 1 ? '-uri' : ''} în listă</p>
      )}
    </div>
  );
}

export default TodoList;
