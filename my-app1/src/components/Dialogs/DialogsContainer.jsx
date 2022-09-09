import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return <StoreContext.Consumer>

        {store => {

            let state = store.getState()

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))

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
        }}
    </StoreContext.Consumer>
}

export default DialogsContainer;