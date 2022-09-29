
let Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photoUrl} alt="photo" />
                    </div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    {/* не выводит положение*/}
                    <div>{u.location.city}</div> 
                    <div>{u.location.country}</div>
                    <div>
                        { u.followed
                            ? <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.unfollow(u.id)}}>Follow</button>
                        }
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users