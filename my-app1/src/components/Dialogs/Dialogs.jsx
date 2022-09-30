import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)

    let messageElements = props.messages
        .map(m => <Message message={m.message} key={m.id} />)

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea 
                onChange={ onNewMessageChange } 
                value={ props.newMessageBody }
                />
                <button onClick={ onSendMessageClick }>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;