import "./rightbar.css"
import {users} from "../../dummyData.js"
import Online from "../online/Online"



export default function rightbar() {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayIcon" src="/assets/icons/gift-box.png" alt="" />
          <span className="birthdayList">
            <b>Alen</b> and <b>2 others friends</b> hav e a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad/ad.jpg" alt="" />
        
        <h4 className="rightbarTitle">Online Friends</h4>
        
        <ul className="onlineFriend">
           {users.map((u)=>(
            <Online key={u.id} user={u} profilePicture={u.profilePicture}
            userName={u.userName} />
           ))}

        </ul>
      </div>
      
    </div>
  )
}

