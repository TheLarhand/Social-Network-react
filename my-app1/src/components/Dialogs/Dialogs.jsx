import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements = props.state.messages
        .map(m => <Message message={m.message} />)

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))

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
                value={ props.state.newMessageBody }
                />
                <button onClick={ onSendMessageClick }>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;