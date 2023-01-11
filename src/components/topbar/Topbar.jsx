import "./topbar.css" 
import {Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Zocial</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
        <input type="text"  placeholder="search people, groups and posts" className="input"/>
        </div>
      </div>

    <div className="topbarRight">
        <div>
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink1">Timeline</span>
        </div>

      <div className="topbarIcons">

        <div className="icons">
        <Person/>
        <span className="iconNumber">2</span>
        </div>
  
        <div className="icons">
        <Chat/>
        <span className="iconNumber">4</span>
        </div>

        <div className="icons">
        <Notifications/>
        <span className="iconNumber">3</span>
        </div>
      </div>
     </div>

      <img className="topbarImage" src="/assets/people/IMG-1.jpg" alt="" />
      
    </div>
  )
}
