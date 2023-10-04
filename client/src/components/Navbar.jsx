const Navbar = (props) => {
  const handleClick = () => {
    props.removeCookie("username");
    props.removeCookie("userAvatar");
    props.setUser("");
  };
  return (
    <div className="nav">
      {props.user === "" ? (
        <h1>Welcome to the Instagram clone</h1>
      ) : (
        <div>
          <button className="logoutCard" onClick={handleClick}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
