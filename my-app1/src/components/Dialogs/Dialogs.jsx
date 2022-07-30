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

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Igor' id='1'></DialogItem>
                <DialogItem name='Jeki4' id='2'></DialogItem>
                <DialogItem name='TheZhenek' id='3'></DialogItem>
                <DialogItem name='Alina' id='4'></DialogItem>
                <DialogItem name='Dias' id='5'></DialogItem>
                <DialogItem name='Ebik' id='6'></DialogItem>
            </div>
            <div className={s.messages}>
                <Message message='Hi fag!' />
                <Message message='No u!!!' />
                <Message message='Maaaaan go play minecraft?' />
                <Message message='No' />
                <Message message='Yes.' />
            </div>
        </div>
    )
}

export default Dialogs;