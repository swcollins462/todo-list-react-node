import { useRef } from 'react'

export default function SelectorButtons(props) {
    const buttonRef = useRef(null);

    function todosClicked() {
        props.setShowCompleted(false);
        buttonRef.current.blur();
    }
    
    function completedClicked() {
        props.setShowCompleted(true);
        buttonRef.current.blur();
    }

  return (
    <div className='btn-area'>
        <button
            className={`selector-btn ${props.showCompleted === false ? 'active' : ''}`}
            onClick={todosClicked}
            ref={buttonRef}
        >
            Todos
        </button>
        <button
            className={`selector-btn ${props.showCompleted === true ? 'active' : ''}`}
            onClick={completedClicked}
            ref={buttonRef}
        >
            Completed
        </button>
    </div>
  )
}
