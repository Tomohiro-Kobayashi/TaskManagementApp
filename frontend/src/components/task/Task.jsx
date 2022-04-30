import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import {
    GiSportMedal,
  } from 'react-icons/gi'

export const Task = ({task, taskList, setTaskList, index}) => {
  
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div className='taskBox' key={task.id} ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <p className='taskText'>
              {task.text}
          </p>
          <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
            <GiSportMedal />
          </button>
        </div>
      )}
    </Draggable>
  )
}
