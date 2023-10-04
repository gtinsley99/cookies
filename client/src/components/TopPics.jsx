import { faker } from "@faker-js/faker";
import { useEffect } from "react";

const TopPics = () => {
  let count = [1, 2, 3, 4, 5, 6, 7, 8];
  
  return (
    
    <div className="topDiv">
      {count.map((item, index) => {
        return(
        <div key={index} className="top" >
            <div className="topProfPic">
            <img className="topProfPics" src={faker.image.avatar()}></img>
            </div>
            <p className="topUsers">{faker.internet.userName()}</p>
        </div>);
      })}
    </div>
  );
};

export default TopPics;
