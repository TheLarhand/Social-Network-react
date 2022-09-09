import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {

  return <StoreContext.Consumer>
    {store => {

      let state = store.getState()

      let addPost = () => {
        store.dispatch(addPostActionCreator())
      }
      let onPostChange = (text) => {
        store.dispatch(onPostChangeActionCreator(text))
      }

      return (
        <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />
      )
    }}
  </StoreContext.Consumer>
}

export default MyPostsContainer;