import "./online.css";

export default function Online ( props ) {
  return (
    <div>
         <li className="onlineFriendList">
            <div className="onlineImgIconContainer">
              <img className="onlineFriendImage"src={props.profilePicture} alt="" />
              <span className="onlineIcon"></span>
            </div>
            <span className="onlineFriendName">{props.userName}</span>
          </li>
    </div>
  )
}
