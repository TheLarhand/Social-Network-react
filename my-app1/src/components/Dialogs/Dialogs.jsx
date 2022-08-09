import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements = props.state.messages
        .map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        // let text = newMessageElement.current.value;
        props.addMessage()
        console.log(props.state.newMessageText);
    }

    let onMessageChange = () => {
        props.updateNewMessageText(newMessageElement.current.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea 
                onChange={ onMessageChange } 
                ref={ newMessageElement }
                value={ props.state.newMessageText }
                />
                <button onClick={ addMessage }>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;