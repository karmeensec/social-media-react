import "./closeFriends.css";

export default function CloseFriends({user}) {
    return (
        <li className="sidebarFriend">
            <img src= {user.profilePicture} alt="" className = "sidebarFriendImg" />
            <span className="sidebarFrieend"> {user.username} </span>
        </li>
    )
}
