import { RiDeleteBin6Line } from 'react-icons/ri';

function CompletedTodoItem(props) {

  function deleteClicked() {
    props.deleteTodo(props.id);
  }

  const dateCompletedString = new Date(props.date_completed).toLocaleString('en-US');

  return (
    <li className='todo-item'>
      <div>
        <p className='todo-title'>{props.title}</p>
        <p className='todo-desc'>{props.description}</p>
        <p className='date-completed'>Completed on: {dateCompletedString}</p>
      </div>
      <div>
        <button onClick={deleteClicked} className='delete-btn'>
          <RiDeleteBin6Line />
        </button>
      </div>
    </li>
  )
}

export default function CompletedTodos({ todos, deleteTodo }) {
  let filteredTodos = todos.filter(function (el) {
    return el.is_completed === 1;
  });

  const CompletedTodosJsx = filteredTodos.map(listItem => 
    <CompletedTodoItem
      key={listItem.id}
      id={listItem.id}
      title={listItem.title}
      description={listItem.description}
      date_completed={listItem.date_completed}
      deleteTodo={deleteTodo} />
  );

  return (
    <div className='todo-list'>
      <ul>{CompletedTodosJsx}</ul>
    </div>
  )
}
