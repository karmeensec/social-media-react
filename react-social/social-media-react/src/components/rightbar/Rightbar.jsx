import "./rightbar.css";
import {Users} from "../../data";
import Online from "../online/Online";


export default function Rightbar({profile}) {

    const HomeRightbar = () =>{
        return(
            <>
            <div className="birthdayContainer">
                    <img src="assets/person/birthday.png" alt="" className = "birthdayImg" />
                    <span className = "birthdayText" > <b>Narmin Ismayilova</b> and <b>3 others</b> have a birthday today. </span>
                </div>

                <img src="assets/person/ad.jpg" alt="" className = "rightbarAd" />

                <h4 className="rightbarTitle">Online friends</h4>

                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key = {u.id} user = {u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () =>{
        return(
            <>
            <h4 className = "rightbarTitle">User Information Title</h4>

            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className = "rightbarInfoKey">City: </span>
                    <span className = "rightbarInfoValue">New York</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className = "rightbarInfoKey">From: </span>
                    <span className = "rightbarInfoValue">Cansas</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className = "rightbarInfoKey">Relationship: </span>
                    <span className = "rightbarInfoValue">Single</span>
                </div>

                <div className="rightbarInfoItem">
                    <span className = "rightbarInfoKey">Interested in: </span>
                    <span className = "rightbarInfoValue">Women</span>
                </div>

            </div>
            
            <h4 className = "rightbarTitle">Your Friends</h4>

            <div className="rightbarFollowings">

                <div className="rightbarFollowing">
                    <img src="assets/post/friend.jpg" alt="" className = "rightbarFollowingImg" />
                    <span className = "rightbarFollowingName">Narmin Ismayilova</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/post/friend.jpg" alt="" className = "rightbarFollowingImg" />
                    <span className = "rightbarFollowingName">Narmin Ismayilova</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/post/friend.jpg" alt="" className = "rightbarFollowingImg" />
                    <span className = "rightbarFollowingName">Narmin Ismayilova</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/post/friend.jpg" alt="" className = "rightbarFollowingImg" />
                    <span className = "rightbarFollowingName">Narmin Ismayilova</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/post/friend.jpg" alt="" className = "rightbarFollowingImg" />
                    <span className = "rightbarFollowingName">Narmin Ismayilova</span>
                </div>

                <div className="rightbarFollowing">
                    <img src="assets/post/friend.jpg" alt="" className = "rightbarFollowingImg" />
                    <span className = "rightbarFollowingName">Narmin Ismayilova</span>
                </div>

            </div>

            <img src="assets/person/ad.jpg" alt="" className = "rightbarAd" />
            <img src="assets/person/ad2.jpg" alt="" className = "rightbarAd" />
            <img src="assets/person/ad.jpg" alt="" className = "rightbarAd" />
            
            </>
        )
    }

    return (
        <div className = "rightbar">

            <div className="rightbarWrapper">
                { profile ? <ProfileRightbar /> : <HomeRightbar /> } 
            </div>

        </div>
    )
}
