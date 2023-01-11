import "./closeFriends.css"


export default function CloseFriends( props ) {
  return (
    <div>
         <li className="sidebarFriend">
            <img className="friendImage" src= {props.profilePicture} alt="" />
            <span className="friendName">{props.userName}</span>
          </li>
    </div>
  )
}
