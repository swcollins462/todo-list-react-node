import { useState} from 'react'

export default function TodoForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTodo(title, description);
        setTitle('');
        setDescription('');
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleDescChange(event) {
        setDescription(event.target.value);
    }

  return (
    <div>
        <form action='#' method='POST' onSubmit={handleSubmit} className='todo-form'>
            <div className='input-wrapper'>
                <label htmlFor='title' className='todo-form-label'>Title</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    value={title}
                    className='todo-form-input'
                    placeholder='Name of your task'
                    onChange={handleTitleChange}
                    required
                />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='description' className='todo-form-label'>Description</label>
                <input
                    type='text'
                    id='description'
                    name='description'
                    value={description}
                    className='todo-form-input'
                    placeholder='optional additional detail'
                    onChange={handleDescChange}
                />
            </div>
            <button type='submit' className='todo-form-btn'>Add</button>
        </form>
    </div>
  )
}
