import s from './Users.module.css';

let Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div className={s.user} key={u.id}>
                    <div className={s.ava_btn}>
                        <div>
                            <img className={s.avatar} src={u.photoUrl} alt="photo" />
                        </div>
                        <div className={s.btn}>
                            {u.followed
                                ? <button className={s.btn} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button className={s.btn} onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.fullName}>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{u.location[0].city}</div>
                        <div>{u.location[0].country}</div>
                    </div>


                </div>)
            }
        </div>
    )
}

export default Users