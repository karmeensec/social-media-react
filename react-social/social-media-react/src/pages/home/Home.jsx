import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function home() {
    return (
        <>
       <Topbar />
       <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Rightbar />
       </div>
       
       </>
    )
}
