import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/feed"
import Rightbar from "../../components/rightbar/Rightbar";
import "./homepage.css";

export default function Homepage() {
  return (
    <>
       <Topbar />
        <div className="homeContainer">
         <Sidebar />
         <Feed />
         <Rightbar />
        </div>
    </>
  )
}
