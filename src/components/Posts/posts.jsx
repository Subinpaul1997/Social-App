import "./posts.css"
import {MoreVert} from "@mui/icons-material"
import { users } from "../../dummyData"
import { useState } from "react"



export default function Posts( props ) {
    const [like, setLike] = useState(props.like);
    const [isLiked,setIsLiked] = useState(props.like);

    const likeCount = ()=>{
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked );
    }

    return (
    <div className="postsContainer">
        <div className="postsWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImage" 
                         src={users.filter((u) => u.id === props?.userId)[0].profilePicture} alt=""/>
                          <span className="postProfileName">
                            {users.filter((u) => u.id === props?.userId)[0].userName}
                         </span>
                       <span className="postTime">{props.date}</span>
                 </div>
                <div className="postTopRight">
                    <MoreVert/> 
                </div>
            </div>
            <div className="postCenter">
                <span className="postCaption">{props?.desc}</span>
                <img  className="postImage" src={props.image} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/icons/like.png" onClick={likeCount} alt="" />
                <img className="likeIcon" src="/assets/icons/love.png" onClick={likeCount} alt="" />
                <span className="postLikesCount">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="PostComments">{props.comments} Comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
