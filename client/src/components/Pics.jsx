const Pics = (props) => {

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <div className="picBox">
      <div className="picsCard">
        {props.pics.map((item, index) => {
          return (
            <div key={index} className="picCard">
              <img className="pic" src={item.download_url} width="500px" alt="APIpic"></img>
            </div>
          );
        })}
      </div>
      <button onClick={handleClick}>Scroll to top</button>
    </div>
  );
};

export default Pics;
