import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TaskAddInput = ({inputText, setInputText, setTaskList, taskList}) => {

  const handleSubmit = (e) => {
    const taskId = uuidv4();
    e.preventDefault();
    if(inputText === ""){
      return;
    }
    setTaskList([...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`,
      }])
    setInputText("");
    console.log(taskList)
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          className='taskAddInput'
          type="text"
          placeholder='add a Task'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}
