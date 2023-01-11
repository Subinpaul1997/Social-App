import "./sidebar.css";
import CloseFriends from "../closeFriends/CloseFriends";
import {RssFeed,Chat,PlayCircle,Group,Bookmark,HelpOutline,Work,Event,School} from "@mui/icons-material"
import { users } from "../../dummyData";



export default function sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarList">

            <li className="sidebarItem">
                <RssFeed className="listIcon"/>
                <span className="listIconName">Feed</span>
            </li>
            <li className="sidebarItem">
              <Chat className="listIcon"/>
              <span className="listIconName">Chats</span>
            </li>
            <li className="sidebarItem">
              <PlayCircle className="listIcon"/>
              <span className="listIconName">Videos</span>
            </li>
            <li className="sidebarItem">
                 <Group className="listIcon"/>
              <span className="listIconName">Groups</span>
            </li>
            <li className="sidebarItem">
              <Bookmark className="listIcon"/>
              <span className="listIconName">Bookmarks</span>
            </li>
            <li className="sidebarItem ">
              <HelpOutline className="listIcon"/>
              <span className="listIconName">Questions</span>
            </li>
            <li className="sidebarItem">
              <Work className="listIcon"/>
              <span className="listIconName">Jobs</span>
            </li>
            <li className="sidebarItem">
              <Event className="listIcon"/>
              <span className="listIconName">Events</span>
            </li>
            <li className="sidebarItem">
              <School className="listIcon"/>
              <span className="listIconName">Courses</span>
            </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendslist">
          {users.map(u=>(
            <CloseFriends  user={u} key={u.id} profilePicture={u.profilePicture} userName={u.userName}/>
          ))};
        </ul>
      </div>
    </div>
  )
}
