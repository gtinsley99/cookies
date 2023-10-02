import { useState } from "react";

const Pics = (props) => {
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(15);
  const [button, setButton] = useState("Next page")

  const handleClick = () => {
    if (sliceStart === 0) {
      setSliceStart(15);
      setSliceEnd(30);
      setButton("Previous page")
      props.setPage(2);
    } else {
        setSliceStart(0);
        setSliceEnd(15);
        setButton("Next page");
        props.setPage(1);
    }
    window.scrollTo({top: 0, behavior: "smooth"});
  };
  return (
    <div className="picBox">
      <div className="picsCard">
        {props.pics.slice(sliceStart, sliceEnd).map((item, index) => {
          return (
            <div key={index} className="picCard">
              <img src={item.download_url} width="300px" alt="APIpic"></img>
            </div>
          );
        })}
      </div>
      <button onClick={handleClick}>{button}</button>
    </div>
  );
};

export default Pics;
