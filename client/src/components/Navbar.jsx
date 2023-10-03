const Navbar = (props) => {
  const handleClick = () => {
    props.removeCookie("username");
    props.setUser("");
    props.setPage(1);
  };
  return (
    <div className="nav">
      {props.user === "" ? (
        <h1>Welcome to the site</h1>
      ) : (
        <div>
          <h1 className="navTitle">Hello {props.user}</h1>
          <button className="logoutCard" onClick={handleClick}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
