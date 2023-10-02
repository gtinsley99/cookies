const Title = (props) => {
  return (
    <div className="title">
      {props.user === "" ? (
        <h1>Welcome to the site</h1>
      ) : (
        <div className="titleLoggedIn">
          <div></div>
          <h1>Hello {props.user}</h1>
          <div className="logoutCard">
            <button onClick={() => props.setUser("")}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Title;
