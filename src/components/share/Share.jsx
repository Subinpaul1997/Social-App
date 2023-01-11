import "./share.css"
import {PermMedia} from "@mui/icons-material"
import {Label} from "@mui/icons-material"
import {Room} from "@mui/icons-material"
import {EmojiEmotions} from "@mui/icons-material"

export default function share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImage" src="/assets/people/IMG-1.jpg" alt="" />
            <input className="shareInput" placeholder="What's in your mind Subin ?" type="text" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">

             <div className="shareType">
               <PermMedia className="shareTypeIcon"  htmlColor="tomato"/>
               <span className="shareTypeName">Photo or Video</span>
             </div> 

             <div className="shareType">
               <Label className="shareTypeIcon"  htmlColor="blue"/>
               <span className="shareTypeName">Tag</span>
             </div>

             <div className="shareType">   
               <Room className="shareTypeIcon"  htmlColor="green"/>
               <span className="shareTypeName">Location</span>
             </div>  

             <div className="shareType">
               <EmojiEmotions className="shareTypeIcon"  htmlColor="goldenrod"/>
               <span className="shareTypeName">Feelings</span>
             </div>   

            </div>
            <button className="shareButton">Share</button>
          </div>
          
        </div>
      </div>
  )
}
