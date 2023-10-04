const logo = require("../images/logo.webp");
const home = require("../images/home.png");
const search = require("../images/search.png");
const explore = require("../images/explore.png");
const reels = require("../images/reels.png");
const message = require("../images/message.png");
const notifications = require("../images/notifications.png");
const create = require("../images/create.png");
const threads = require("../images/threads.jpg");
const more = require("../images/more.png");

const SideBar = (props) => {
  return (
    <div className="sideBar">
      <div className="topBar">
        <img alt="icon" className="logo" src={logo}></img>
      </div>
      <div className="midBar">
        <h3 className="barCont"><img alt="icon" className="icon" src={home}></img>Home</h3>
        <h3 className="barCont"><img alt="icon" className="icon" src={search}></img>Search</h3>
        <h3 className="barCont"><img alt="icon" className="icon" src={explore}></img>Explore</h3>
        <h3 className="barCont"><img alt="icon" className="icon" src={reels}></img>Reels</h3>
        <h3 className="barCont"><img alt="icon" className="icon" src={message}></img>Messages</h3>
        <h3 className="barCont"><img alt="icon" className="icon" src={notifications}></img>Notifications</h3>
        <h3 className="barCont"><img alt="icon" className="icon" src={create}></img>Create</h3>   
        <h3 className="barCont"><img alt="avatar" className="sideProfPic" src={props.cookies.userAvatar}></img>Profile</h3>
    
      </div>
      <div className="botBar">
        <h3 className="barCont"><img alt="icon" className="icon" src={threads}></img>Threads</h3>
        <h3 className="barCont"><img alt="icon" className="icon" src={more}></img>More</h3>
      </div>
    </div>
  );
};

export default SideBar;
