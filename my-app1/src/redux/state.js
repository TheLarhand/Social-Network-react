let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'I like Berserk!!!', likeCounter: 999 },
                { id: 2, message: 'JoJo classic.', likeCounter: 154 },
                { id: 3, message: 'Bionicle is the best Lego series.', likeCounter: 455 }
            ],
            newPostText: ''
        },
        messagesPage: {
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
            newMessageText: ''
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } 
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}

export default store