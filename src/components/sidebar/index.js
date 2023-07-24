import React from "react";
import "./sidebar.css";
import { SocialIcon } from "react-social-icons";

export default function Socialicons() {
  const emailClick = () => {
    window.location.assign("mailto:shanmukhchowdary147@gmail.com");
  };
  return (
    <div>
      <div className="stick_follow_icon">
        <ul>
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/varunsaikrishna/"
              bgColor="#ffcb64"
              fgColor="#000000"
              target="_blank"
              style={{ height: 50, width: 50 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.credly.com/users/varun-sai-krishna/badges"
              bgColor="#ffcb64"
              fgColor="#000000"
              target="_blank"
              style={{ height: 50, width: 50 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://github.com/varunsaikrishna"
              bgColor="#ffcb64"
              fgColor="#000000"
              target="_blank"
              style={{ height: 50, width: 50 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://medium.com/@varunsaikrishna056514"
              bgColor="#ffcb64"
              fgColor="#000000"
              target="_blank"
              style={{ height: 50, width: 50 }}
            />
          </li>
          {/* <li>
            <SocialIcon
              url="mailto:shanmukhchowdary147@gmail.com"
              bgColor="#01152b"
              fgColor="#64ffda"
              target="_blank"
              style={{ height: 50, width: 50 }}
            />
          </li> */}
          <li>
            <SocialIcon
              url="https://www.instagram.com/varun_sai_krishna/"
              bgColor="#ffcb64"
              fgColor="#000000"
              target="_blank"
              style={{ height: 50, width: 50 }}
            />
          </li>
          {/* <li>
            <SocialIcon
              url="https://twitter.com/Shanmukhc147"
              bgColor="#01152b"
              fgColor="#64ffda"
              target="_blank"
              style={{ height: 50, width: 50 }}
            />
          </li> */}
        </ul>
        <img
          src={require("../../assets/image/social-media-arrow.svg").default}
          alt=""
          className="imagelineL"
        />
      </div>
      <div className="emailright" onClick={emailClick}>
        <p>varunsaikrishna056514@gmail.com</p>
        {/* <img src={require("../../assets/image/scroll-down-arrow.svg").default} alt="" className="imageLineR" />             */}
      </div>
    </div>
  );
}
