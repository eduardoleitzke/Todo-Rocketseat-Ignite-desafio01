import styles from './Done.module.css'
import {ClipboardText } from 'phosphor-react'
interface props{
    totalTasks: number;
}
export function Done(props:props) {
    return (
        <div className={props.totalTasks > 0 ? styles.none : styles.done}>
        <ClipboardText opacity={0.1} size={56} />
        <p>
            Você ainda não tem tarefas cadastradas<br/>
            Crie tarefas e organize seus itens a fazer
        </p>
    </div>
    )
}