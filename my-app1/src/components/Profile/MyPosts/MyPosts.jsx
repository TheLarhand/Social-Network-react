import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // debugger

  let postsElements = props.posts
    .map(p => <Post likeCounter={p.likeCounter} message={p.message} />)

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>

    </div>
  )
}

export default MyPosts;