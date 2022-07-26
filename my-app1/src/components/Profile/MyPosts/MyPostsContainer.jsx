import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    addPost: () =>{
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) =>{
      dispatch(onPostChangeActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;