import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogs = [
    {id: 1, name: 'Igor'},
    {id: 2, name: 'Jeki4'},
    {id: 3, name: 'TheZhenek'},
    {id: 4, name: 'Alina'},
    {id: 5, name: 'Dias'},
  ]

let messages = [
    {id: 1, message: 'Hi fag'},
    {id: 2, message: 'No u faggot'},
    {id: 3, message: 'Yeaaaaaaaah)'}
  ]

let dialogsElements = dialogs
  .map( d=> <DialogItem name={d.name} id={d.id} />)

let messageElements = messages
  .map(m => <Message message={m.message} />)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }            
            </div>
        </div>
    )
}

export default Dialogs;