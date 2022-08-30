// import dialogsReducer from "./dialogs-reducer"
// import profileReducer from "./profile-reducer"
// import sidebarReducer from "./sidebar-reducer"

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'I like Berserk!!!', likeCounter: 999 },
//                 { id: 2, message: 'JoJo classic.', likeCounter: 154 },
//                 { id: 3, message: 'Bionicle is the best Lego series.', likeCounter: 455 }
//             ],
//             newPostText: ''
//         },
//         messagesPage: {
//             dialogs: [
//                 { id: 1, name: 'Igor' },
//                 { id: 2, name: 'Jeki4' },
//                 { id: 3, name: 'TheZhenek' },
//                 { id: 4, name: 'Alina' },
//                 { id: 5, name: 'Dias' },
//             ],

//             messages: [
//                 { id: 1, message: 'Hi fag' },
//                 { id: 2, message: 'No u faggot' },
//                 { id: 3, message: 'Yeaaaaaaaah)' }
//             ],
//             newMessageBody: ''
//         }
//     },

//     _callSubscriber() {
//         console.log('State changed');
//     },

//     getState() {
//         return this._state;
//     },

//     subscribe(observer) {
//         this._callSubscriber = observer
//     },

//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._callSubscriber(this._state)

//     }
// }

// export default store

