import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';

function TodoItem(props) {

  function deleteClicked() {
    props.deleteTodo(props.id);
  }

  function completedClicked() {
    const isCompleted = 1;
    const dateCompleted = Date.now();
    props.markCompleted(props.id, isCompleted, dateCompleted);
  }

  return (
    <li className='todo-item'>
      <div>
        <p className='todo-title'>{props.title}</p>
        <p className='todo-desc'>{props.description}</p>
      </div>
      <div>
        <button onClick={deleteClicked} className='delete-btn'>
          <RiDeleteBin6Line />
        </button>
        <button onClick={completedClicked} className='completed-btn'>
          <BsCheckLg />
        </button>
      </div>
    </li>
  );
}

export default function TodoList({ todos, deleteTodo, markCompleted }) {
  let filteredTodos = todos.filter(function (el) {
    return el.is_completed !== 1;
  });

  const TodosJsx = filteredTodos.map(listItem => 
    <TodoItem
      key={listItem.id}
      id={listItem.id}
      title={listItem.title}
      description={listItem.description}
      deleteTodo={deleteTodo}
      markCompleted={markCompleted} />
  );

  return (
    <div className='todo-list'>
        <ul>{TodosJsx}</ul>
    </div>
  );
}
