const Pics = (props) => {
  return (
    <div className="picsCard">
      {props.pics.map((item, index) => {
        return (
          <div key={index} className="picCard">
            <img src={item.download_url} width="300px"></img>
          </div>
        );
      })}
    </div>
  );
};

export default Pics;
