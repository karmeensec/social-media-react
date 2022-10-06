import "./topbar.css";
import {Pageview, PersonOutlineOutlined, ChatOutlined, NotificationsActiveOutlined} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className = "topbarContainer">

            <div className="topbarLeft">
                <span className = "logo">KamaBook</span>
            </div>

            <div className="topbarCenter">
                <div className="searchBar">
                    <Pageview className = "searchIcon" />
                    <input placeholder = "Search for the magic" className = "searchInput" />
                </div>
            </div>

            <div className="topbarRight">

                <div className="topbarLinks">
                    <span className = "topbarLink"> Home</span>
                    <span className = "topbarLink"> Timeline</span>
                </div>

                <div className="topbarIcons">

                    <div className="topbarIconItem">
                        <PersonOutlineOutlined />
                        <span className = "topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <ChatOutlined />
                        <span className = "topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <NotificationsActiveOutlined />
                        <span className = "topbarIconBadge">1</span>
                    </div>

                </div>

                <img src="assets/person/person1.svg" alt="" className="topbarImg" />

            </div>
        </div>
    )
}
