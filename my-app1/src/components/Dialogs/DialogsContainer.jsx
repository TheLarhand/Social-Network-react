import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }
    return (
       <Dialogs 
       sendMessage={onSendMessageClick} 
       updateNewMessageBody={onNewMessageChange} 
       dialogs={state.messagesPage.dialogs}
       messages={state.messagesPage.messages}
       newMessageBody={state.messagesPage.newMessageBody}
       />
    )
}

export default DialogsContainer;