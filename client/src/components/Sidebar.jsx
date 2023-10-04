const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="topBar">
        <h3>Instagram</h3>
      </div>
      <div className="midBar">
        <h3 className="barCont">Home</h3>
        <h3 className="barCont">Search</h3>
        <h3 className="barCont">Explore</h3>
        <h3 className="barCont">Reels</h3>
        <h3 className="barCont">Messages</h3>
        <h3 className="barCont">Notifications</h3>
        <h3 className="barCont">Create</h3>
        <h3 className="barCont">Profile</h3>
      </div>
      <div className="botBar">
        <h3 className="barCont">Threads</h3>
        <h3 className="barCont">More</h3>
      </div>
    </div>
  );
};

export default SideBar;
