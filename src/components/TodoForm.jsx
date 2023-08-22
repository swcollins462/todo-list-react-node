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
        <form action='#' method='POST' onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input
                type='text'
                id='title'
                name='title'
                value={title}
                onChange={handleTitleChange}
                required
            />
            <label htmlFor='description'>Description</label>
            <input
                type='text'
                id='description'
                name='description'
                value={description}
                onChange={handleDescChange}
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
