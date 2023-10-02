const Pics = (props) => {
  return (
    <div>
      {props.pics.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.download_url} width="300px"></img>
          </div>
        );
      })}
    </div>
  );
};

export default Pics;
