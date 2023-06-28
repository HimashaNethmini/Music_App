import React from "react";
import CenterMenu from "./CenterMenu";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <FacebookIcon />
        </div>{" "}
        <div className={SocialStyle}>
          <TwitterIcon />
        </div>{" "}
        <div className={SocialStyle}>
          <YouTubeIcon/>
        </div>{" "}
        <div className={SocialStyle}>
          <LinkedInIcon />
        </div>
      </div>
      {/* detail */}
      
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        <span>Attention, fellow knowledge-seekers! 🌟</span>
        <span>✨ Prepare to be dazzled and delighted! ✨</span>
        <span>💡 Seeking the ultimate treasure trove of wisdom? Look no further! 💡</span>
        <span>🚀 Behold, a gem of enlightenment that must be shared! 🚀</span>
      </span>
    </div>
  );
}

export default Footer;