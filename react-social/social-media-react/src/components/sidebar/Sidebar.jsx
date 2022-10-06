import "./sidebar.css";
import {RssFeed, Chat, VideoLibrary, Group, Event, Code, Work, Bookmarks, Help} from "@material-ui/icons";
import {Users} from "../../data";
import CloseFriends from "../closeFriends/CloseFriends";

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">

                    <li className="sidebarItem">
                        <RssFeed className = "sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarItem">
                        <Chat className = "sidebarIcon" />
                        <span className="sidebarListItemText">Chat</span>
                    </li>

                    <li className="sidebarItem">
                        <VideoLibrary className = "sidebarIcon" />
                        <span className="sidebarListItemText">Video</span>
                    </li>

                    <li className="sidebarItem">
                        <Group className = "sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>

                    <li className="sidebarItem">
                        <Event className = "sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>

                    <li className="sidebarItem">
                        <Code className = "sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>

                    <li className="sidebarItem">
                        <Work className = "sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>

                    <li className="sidebarItem">
                        <Bookmarks className = "sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>

                    <li className="sidebarItem">
                        <Help className = "sidebarIcon" />
                        <span className="sidebarListItemText">Help</span>
                    </li>

                </ul>

                <button className="sidebarButton">Show More</button>
                <hr className = "sidebarHR" />

                <ul className="sidebarFriendList">
                    {Users.map(u => (
                        <CloseFriends key = {u.id} user = {u} />
                    ))}
                </ul>

            </div>
        </div>
    )
}
