import {faker} from "@faker-js/faker";

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
              <div className="feedUsers">
              <p className="picUser"> <img alt="avatar" className="picFeed" src={faker.image.avatar()}></img>{faker.internet.userName()} </p>
              <p className="picUserLoc">{faker.location.city()}</p>
              </div>
              <img className="pic" src={item.download_url} width="500px" alt="APIpic"></img>
              <p className="likes">{faker.number.int({max:500, min: 20})} likes</p>
            </div>
          );
        })}
      </div>
      <button onClick={handleClick}>Scroll to top</button>
    </div>
  );
};

export default Pics;
