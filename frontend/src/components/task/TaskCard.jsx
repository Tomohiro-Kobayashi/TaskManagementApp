import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'

var taskJson = [{

}]


export const TaskCard = ({taskCardList, setTaskCardsList, taskCard,index}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState(
    taskJson  
    );

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
      <div className='taskCard' 
      {...provided.draggableProps} 
  
      ref={provided.innerRef}>
        <div className='taskCardTitleAndTaskCardDeleteButtonArea'   
        {...provided.dragHandleProps} >

          <TaskCardTitle />
          <TaskCardDeleteButton 
          taskCardList={taskCardList} 
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}/>   
              
        </div>
          <TaskAddInput inputText={inputText} setInputText={setInputText} setTaskList={setTaskList} taskList={taskList}/>
          <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList}/>
    </div>
      )}
    </Draggable>
  )
}
