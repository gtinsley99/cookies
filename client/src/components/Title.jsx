const Title = (props) => {
  return (
    <div>
      {props.user === "" ? (
        <h1>Welcome to the site</h1>
      ) : (
        <div>
        <h1>Hello {props.user}</h1>
        <button onClick={() => props.setUser("")}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Title;
