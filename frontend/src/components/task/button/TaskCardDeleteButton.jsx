import React from 'react'

export const TaskCardDeleteButton = ({
  taskCardList, 
  setTaskCardsList, 
  taskCard
}) => {
const taskCardDeleteButton = (id) => {
  setTaskCardsList(taskCardList.filter((e) => e.id !== id))
}

  return (
    <div>
      <button className='taskCardDeleteButton' onClick={() => taskCardDeleteButton(taskCard.id)}>
        ×
      </button>
    </div>
  )
}
