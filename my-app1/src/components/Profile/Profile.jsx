import s from './Profile.module.css';
import Profile__info from './Profile__info';
import Profile__posts from './Profile__posts';

const Profile = () => {
  return (
    <div className={s.content}>

      <Profile__info/>
      <Profile__posts/>

    </div>
  )
}

export default Profile;