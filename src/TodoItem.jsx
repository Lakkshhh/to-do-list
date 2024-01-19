/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return(
        <li>
            <label>
                <input 
                  type="checkbox" 
                  checked={completed} 
                  onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
                onClick={() => deleteTodo(id)}
                className="btn btn-danger"
            >
            <img src = "src/dustbin.svg" alt="Dustbin" width="25" height="25" />
            </button>
        </li>
    )
}
