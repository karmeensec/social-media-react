import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
    return (
    
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">

                    <div className="profileRightTop">

                        <div className="profileCover">
                            <img className = "profileCoverImg" src="assets/post/cover.jpg" alt="" />
                            <img  className = "profileUserImg" src="assets/post/user.jpg" alt="" />
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">Kamil Ismayilzade</h4>
                            <span className="profileInfoDesc">Hello, my gorgeous friends on the Internet!</span>
                        </div>
                        
                    </div>

                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                   
                </div>
                    
            </div>
       
       </>
        
    )
}
