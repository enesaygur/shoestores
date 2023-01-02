import React from "react";
import { SiFacebook, SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";
export default function Footer() {
  return (
    <div style={{borderTop:"1px solid #000"}}>
      <div className="footer-icons">
        <a href="#facebook"><SiFacebook size={25} /></a>
        <a href="#linkedin"><SiLinkedin size={25} /></a>
        <a href="#twitter"><SiTwitter size={25} /></a>
        <a href="#github"><SiGithub size={25} /></a>
      </div>
      <div className="footer-copyright">Copyright ©</div>
    </div>
  );
}
