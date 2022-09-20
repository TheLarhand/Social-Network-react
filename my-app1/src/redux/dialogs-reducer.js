const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [
        { id: 1, name: 'Igor' },
        { id: 2, name: 'Jeki4' },
        { id: 3, name: 'TheZhenek' },
        { id: 4, name: 'Dedasha<3' },
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
    let stateCopy = {
        ...state,
        messages: [...state.messages]
    }

    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageBody = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.newMessage
            return stateCopy
        }
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