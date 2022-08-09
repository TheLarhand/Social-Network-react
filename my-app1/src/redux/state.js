import { rerenderEntireTree } from "../render"

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree(state)
}

export let updateNewMessageText = (newMessage) => {
    state.messagesPage.newMessageText = newMessage
    rerenderEntireTree(state)
}


export default state;