const Navbar = (props) => {
  return (
    <div className="nav">
      {props.user === "" ? (
        <h1>Welcome to the site</h1>
      ) : (
        <div>
          <h1 className="navTitle">Hello {props.user}</h1>
          <button className="logoutCard" onClick={() => props.setUser("")}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
