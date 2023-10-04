const Navbar = (props) => {
  const handleClick = () => {
    props.removeCookie("username");
    props.setUser("");
    props.setUserPic(null);
  };
  return (
    <div className="nav">
      {props.user === "" ? (
        <h1>Welcome to the Instagram clone</h1>
      ) : (
        <div>
          <h1 className="navTitle">{props.user}'s: feed</h1>
          <button className="logoutCard" onClick={handleClick}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
