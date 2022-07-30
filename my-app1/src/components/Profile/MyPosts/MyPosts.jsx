import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
        <Post likeCounter='999' message='I like Berserk!!!' />
        <Post likeCounter='165' message='JoJo classic.' />
        <Post likeCounter='78' message='Bionicle is the best Lego series.' />
      </div>

    </div>
  )
}

export default MyPosts;