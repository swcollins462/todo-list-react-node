import React from 'react'

export default function SelectorButtons(props) {
    function todosClicked() {
        props.setShowCompleted(false)
    }
    
    function completedClicked() {
        props.setShowCompleted(true)
    }

  return (
    <div className='btn-area'>
        <button
            className={`selector-btn ${props.showCompleted === false ? 'active' : ''}`}
            onClick={todosClicked}
        >
            Todos
        </button>
        <button
            className={`selector-btn ${props.showCompleted === true ? 'active' : ''}`}
            onClick={completedClicked}
        >
            Completed
        </button>
    </div>
  )
}
