
import "./feed.css";
import Share from "../share/Share.jsx";
import Posts from "../../components/Posts/posts.jsx";
import {postsImage} from "../../dummyData";

export default function feed() {
  return (
    <div className='feedContainer'>
      <div className="feedWrapper">
        <Share/>
        {postsImage.map((p)=>(
          <Posts  post={p} userId={p.userId} profilePicture={p.profilePicture}
          date= {p.date} image={p.image} comments={p.comments} like={p.like} desc={p.desc} />
        ))}
        
      </div>
    </div>
  )
}
