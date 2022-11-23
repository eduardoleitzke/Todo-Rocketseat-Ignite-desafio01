import { Done } from './Done'
import styles from './Tasks.module.css'
import {TaskCreated} from './TaskCreated'
import { useState } from 'react';
import { PlusCircle } from 'phosphor-react'
import {ChangeEvent, FormEvent, InvalidEvent} from 'react'
export function Tasks(){
    const [totalTasks, setTotalTasks] = useState(0)
    const [taskDescription, setTaskDescription] = useState('' as string)
    const [taskList, setTaskList] = useState([] as string[])
    const [tasksDone, setTasksDone] = useState(0)
    function handleCreateTaskDescription(event:ChangeEvent<HTMLInputElement>){
        setTaskDescription(event.target.value)
    }
  
    function handleCreateTask(event:FormEvent){
        event.preventDefault()
        setTotalTasks(()=> {return totalTasks + 1})
        setTaskList([...taskList, taskDescription])
        setTaskDescription('')
    }
    
    function handleDescriptionInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Texto inválido')
    }

    function deleteTask(taskToDelete:string){
        const taskListWithoutDeletedOne = taskList.filter(task=>{
            return task !==taskToDelete
        })
        setTotalTasks(totalTasks - 1)
        setTaskList(taskListWithoutDeletedOne)
    }

    function numberOfTaskDone(doneValue:boolean){
        if(totalTasks === 0 ) return
        else if(doneValue) setTasksDone(tasksDone -1)
        else setTasksDone(tasksDone +1)
    }
    const commentTextInvalid = taskDescription.length === 0
    return (
        <article className={styles.taskContainer}>
             <form className={styles.createTask}>
                <input 
                onChange={handleCreateTaskDescription}
                onInvalid={handleDescriptionInvalid}
                placeholder='Adicione uma nova tarefa'
                type="text"
                value={taskDescription}
                 />
                <button disabled={commentTextInvalid} onClick={handleCreateTask}>
                    Criar 
                    <PlusCircle size={16} color='white'/>
                </button>
            </form>
            <header>
                <p>Tarefas Criadas<span>{totalTasks}</span></p> 
                <p>Concluídas
                    {totalTasks === 0 ?<span> 0 </span>:<span>{tasksDone} de {totalTasks}</span> }   
                </p> 
            </header>
            <div 
            className={totalTasks > 0 
            ? styles.taskContentWithoutBorder
            : styles.taskContent}
            >
               <Done totalTasks={totalTasks}></Done>
                {taskList.map(taskText =>{
                    return(
                        
                        <TaskCreated
                        key={taskDescription}
                        totalTask={totalTasks}
                        taskDescription={taskText}
                        onDeleteTask={deleteTask}
                        onTaskDone={numberOfTaskDone}
                        />
                    )
                    
                })}   
            </div>
        </article> 
        
    )
}