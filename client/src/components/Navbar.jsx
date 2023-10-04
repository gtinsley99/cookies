const Navbar = (props) => {

  return (
    <div className="nav">
      {props.user === "" && (
        <h1>Welcome to the Instagram clone</h1>
      )}
    </div>
  );
};

export default Navbar;
