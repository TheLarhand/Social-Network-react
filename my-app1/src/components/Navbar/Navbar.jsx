import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.wrapper}>
        <div className={s.item}>
          <a href='#'>Profile</a>
        </div>
        <div className={s.item}>
          <a href='#'>Messages</a>
        </div>
        <div className={s.item}>
          <a href='#'>News</a>
        </div>
        <div className={s.item}>
          <a href='#'>Music</a>
        </div>
        <div className={`${s.item} ${s.settings}`}>
          <a href='#'>Settings</a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;