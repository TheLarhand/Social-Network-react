const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [
        { id: 1, name: 'Igor' },
        { id: 2, name: 'Jeki4' },
        { id: 3, name: 'TheZhenek' },
        { id: 4, name: 'Alina' },
        { id: 5, name: 'Dias' },
    ],

    messages: [
        { id: 1, message: 'Hi fag' },
        { id: 2, message: 'No u faggot' },
        { id: 3, message: 'Yeaaaaaaaah)' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage
            return state

        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newMessage: text
    }

}

export default dialogsReducer