let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'I like Berserk!!!', likeCounter: 999 },
            { id: 2, message: 'JoJo classic.', likeCounter: 154 },
            { id: 3, message: 'Bionicle is the best Lego series.', likeCounter: 455 }
        ]
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
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCounter: 0
    }
    state.profilePage.posts.push()
}

export default state;