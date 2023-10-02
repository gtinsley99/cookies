const Title = (props) => {
  return (
    <div>
      {props.user === "" ? (
        <h1>Welcome to the site</h1>
      ) : (
        <h1>Hello {props.user}</h1>
      )}
    </div>
  );
};

export default Title;
