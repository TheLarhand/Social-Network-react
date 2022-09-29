import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer';

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        usersPage: usersReducer,
    }
});
export default store;



// import {combineReducers, createStore } from 'redux'
// import profileReducer from './profile-reducer'
// import dialogsReducer from './dialogs-reducer'

// let reducers = combineReducers({
//     profilePage: profileReducer,
//     messagesPage: dialogsReducer,
// })

// let store = createStore(reducers)
// export default store







/*
import { configureStore } from '@reduxjs/toolkit'

// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'

let store = configureStore({
//   reducer: {
//     todos: todosReducer,
//     filters: filtersReducer
//   }
})


*/
