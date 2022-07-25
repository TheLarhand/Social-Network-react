import s from './Profile.module.css';

const Profile__info = () => {
  return (
    <div>
      <div>
        <img className={s.banner} src='https://www.nasa.gov/images/content/174735main_LEFTFullDisk.jpg' />
      </div>
      <div>
        <img className={s.ava} src='https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg' />
        profile info
      </div>
    </div>
  )
}

export default Profile__info;