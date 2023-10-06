import { faker } from "@faker-js/faker";

const Suggested = (props) => {
  const handleClick = () => {
    // Remove cookie not working on gh page, works otherwise, instead expiring cookies as that always works
    // props.removeCookie("jwt_token");
    // props.removeCookie("userAvatar");
    // props.removeCookie("username");
    props.setUser("");
    document.cookie =
      "jwt_token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "userAvatar=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "username=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  return (
    <div className="suggested">
      <div className="suggDiv" id="profUser">
        <img
          className="profPic"
          src={props.cookies.userAvatar}
          alt="avatar"
        ></img>
        <p className="name">{props.user}</p>
        <p className="blueLink" id="profLogout" onClick={handleClick}>Switch</p>
      </div>
      <div className="suggGrey">
        <p className="greyText">Suggested for you</p>
        <p className="blackLink">See All</p>
      </div>
      <div className="suggDiv">
        <img className="profPic" src={faker.image.avatar()} alt="avatar"></img>
        <p className="name">{faker.internet.userName()}</p>
        <p className="blueLink">Follow</p>
      </div>
      <div className="suggDiv">
        <img className="profPic" src={faker.image.avatar()} alt="avatar"></img>
        <p className="name">{faker.internet.userName()}</p>
        <p className="blueLink">Follow</p>
      </div>
      <div className="suggDiv">
        <img className="profPic" src={faker.image.avatar()} alt="avatar"></img>
        <p className="name">{faker.internet.userName()}</p>
        <p className="blueLink">Follow</p>
      </div>
      <div className="suggDiv">
        <img className="profPic" src={faker.image.avatar()} alt="avatar"></img>
        <p className="name">{faker.internet.userName()}</p>
        <p className="blueLink">Follow</p>
      </div>
      <div className="infoLinks">
        <div className="info">
          <p className="infoLink">About</p>
          <p>.</p>
          <p className="infoLink">Help</p>
          <p>.</p>
          <p className="infoLink">Press</p>
          <p>.</p>
          <p className="infoLink">API</p>
          <p>.</p>
          <p className="infoLink">Privacy</p>
          <p>.</p>
          <p className="infoLink">Terms</p>
          <p>.</p>
          <p className="infoLink">Locations</p>
          <p>.</p>
          <p className="infoLink">Language</p>
          <p>.</p>
          <p className="infoLink"> Meta Verified</p>
        </div>
        <p>© 2023 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default Suggested;
