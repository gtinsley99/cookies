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
              <p> <img className="profPic" src={faker.image.avatar()}></img>{faker.internet.userName()}</p>
              <img className="pic" src={item.download_url} width="500px" alt="APIpic"></img>
              <p>Likes: {faker.number.int({max:500, min: 20})}</p>
            </div>
          );
        })}
      </div>
      <button onClick={handleClick}>Scroll to top</button>
    </div>
  );
};

export default Pics;
