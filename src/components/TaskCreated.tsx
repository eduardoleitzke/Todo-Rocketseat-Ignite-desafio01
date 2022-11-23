import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {Trash} from 'phosphor-react'
import style from './TaskCreated.module.css'

interface propsTaskCreated{
    totalTask: number;
    taskDescription: string;
    onTaskDone: (done:boolean) => void;
    onDeleteTask: (taskDescription:string) => void;
   
}

export function TaskCreated(props:propsTaskCreated){
const [done, setDone] = useState(false)
    function handleDeleteTask() {
        props.onDeleteTask(props.taskDescription)
    }

     function handleDoneTask(){
        setDone(!done)
        props.onTaskDone(done)
     }

    return(
            
        <div className={props.totalTask > 0 ? style.taskCreatedContaier : style.taskCreatedContainerNone}>
            
                <div   className={done ? style.taskCard && style.taskCardChecked : style.taskCard}>
                    <button
                    onClick={handleDoneTask}
                    className={done? style.isChecked : style.isntChecked}
                    />         
                    <p className={style.cardtext}>{props.taskDescription}</p>
                    <div className={style.taskTrash}>
                        <Trash onClick={handleDeleteTask} size={24}/>
                    </div>     
                </div>                      
        </div>
        
    )

}