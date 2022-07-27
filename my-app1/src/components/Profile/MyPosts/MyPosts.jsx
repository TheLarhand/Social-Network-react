import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>

      <div>
        my posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post likeCounter='999' message='I like Berserk!!!' />
          <Post likeCounter='165' message='JoJo classic.' />
          <Post likeCounter='78' message='Bionicle is the best Lego series.' />
        </div>

      </div>

    </div>
  )
}

export default MyPosts;