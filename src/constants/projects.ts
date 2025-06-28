import youMemeBg from "../images/youmemeBg.png";
import youMemeLogo from "../images/youmemeLogo.png";
import youMemeImg1 from "../images/youmeme-bg-1.png";
import youMemeImg2 from "../images/youmeme-bg-2.png";
import youMemeImg3 from "../images/youmeme-bg-3.png";
import ninjaProtocolBg from "../images/ninja.png";
import ninjaProtocolLogo from "../images/ninjaLogo.png";
import ninjaImg1 from "../images/ninja-bg.png";
import ninjaImg2 from "../images/ninja-bg2.png";
import ninjaImg3 from "../images/ninja-bg3.png";
import youMemeIcon from "../icons/youmeme.svg";
import ninjaIcon from "../icons/ninja.svg";
import yetiTownLogo from "../images/yetiTownLogo.png";
import tigraLogo from "../images/tigraLogo.png";
import tigraBg from "../images/tigraBg.png";
import tigra1 from "../images/tigra-1.png";
import tigra2 from "../images/tigra-2.png";
import pebbleBg from "../images/pebbleBg.png";
import pebbleLogo from "../images/pebbleLogo.png";
import yetiTownBg from "../images/yetiTownBg.png";
import yetiTownImg1 from "../images/yetiTownImg1.png";
import yetiTownImg2 from "../images/yetiTownImg2.png";
import yetiTownImg3 from "../images/yetiTownImg3.png";

export interface ProjectsTypes {
  projectName: string;
  projectBackground: string;
  projectLogo: string;
  projectDescription: string;
  projectUrl: string;
  width: string;
}

export const projectNames = {
  youMeme: "youMeme",
  ninjaProtocol: "ninjaProtocol",
  yetiTown: "yetiTown",
  tigra: "tigra",
  pebble: 'pebble',
};

export const projectsArray: ProjectsTypes[] = [
  {
    projectName: projectNames.youMeme,
    projectBackground: youMemeBg,
    projectLogo: youMemeLogo,
    projectDescription:
      "Mainly aimed at 13-35-year-olds, YouMeme is a state-of-the-art social network designed to deliver joy on demand. Enjoy the latest and funniest memes in the form of images, GIFs, and videos!The platform includes a native meme & GIF editor, special events, a reward system based on a Meme-To-Earn model, a next-gen NFT marketplace, and much more.",
    projectUrl: "https://youmeme.com/homepage",
    width: "156px",
  },
  {
    projectName: projectNames.ninjaProtocol,
    projectBackground: ninjaProtocolBg,
    projectLogo: ninjaProtocolLogo,
    projectDescription:
      "Ninja Protocol is an ecosystem of decentralized applications under development on the Solana blockchain. Our focus is on gaming and NFTs. Ninja Protocol is a community boot-strapped decentralized protocol and only exists on the blockchain. There have not been any public sales or private sales of $NINJA tokens.",
    projectUrl: "https://www.ninjaprotocol.io/",
    width: "170px",
  },
  {
    projectName: projectNames.yetiTown,
    projectBackground: yetiTownBg,
    projectLogo: yetiTownLogo,
    projectDescription:
      "A collection of 4,444 Genesis Yetis will roam Yeti Town. NFT acts as a membership that provides you with exclusive access to the toymaker's collector's area, communities and future developments into the metaverse. ",
    projectUrl: "https://yetitown.com/",
    width: "100px",
  },
  {
    projectName: projectNames.tigra,
    projectBackground: tigraBg,
    projectLogo: tigraLogo,
    projectDescription:
      "TIGRA is the first & only holistic, experience-based property management platform, created & founded by an owner & manager, for owners & managers.  ",
    projectUrl: "https://tigra.app/",
    width: "100px",
  },
  {
    projectName: projectNames.pebble,
    projectBackground: pebbleBg,
    projectLogo: pebbleLogo,
    projectDescription:
      "Pebble is a fintech startup offering the first financial product where users are paid to save, spend, and send money — all in one balance.  ",
    projectUrl: "",
    width: "100px",
  },
];

export interface ModalContentTypes {
  name: string;
  modalDescription: ModalDescriptionTypes[];
  images?: ImagesTypes[];
  data?: any;
}

export interface ModalDescriptionTypes {
  desc: string;
  icon: string;
}

export interface ImagesTypes {
  img: string;
}

export const youMemeModal: ModalContentTypes = {
  name: projectNames.youMeme,
  modalDescription: [
    {
      desc: 'Welcome to YouMeme ("YouMeme," "we," "us" or "our"). YouMeme provides a fast, beautiful and fun way to share memes through content-sharing platform. Just choose a photo, add text, choose a filter to transform the look and feel(if you like) and share!',
      icon: youMemeIcon,
    },
  ],
  images: [{ img: youMemeImg1 }, { img: youMemeImg2 }, { img: youMemeImg3 }],
};

export const ninjaProtocolModal: ModalContentTypes = {
  name: projectNames.ninjaProtocol,
  modalDescription: [
    {
      desc: "Ninja Protocol is an ecosystem of decentralized applications under development on the Solana blockchain. Our focus is on gaming and NFTs. Ninja Protocol is a community boot-strapped decentralized protocol and only exists on the blockchain. There have not been any public sales or private sales of $NINJA tokens.",
      icon: ninjaIcon,
    },
  ],
  images: [{ img: ninjaImg1 }, { img: ninjaImg2 }, { img: ninjaImg3 }],
};
export const yetiTownModal: ModalContentTypes = {
  name: projectNames.yetiTown,
  modalDescription: [
    {
      desc: "Yeti Town is a website where users can create their own Yetis. Yeti is an NFT. The minting was available for 24 hours, the first 6 of which were restricted to whitelisted accounts, the remaining 18 hours were for public minting i.e. anyone can mint. There were 4,444 Yetis in total and all of them were consumed in less than a day. The cost of the gas fee to mint 1 ETH was 0.057 ETH.",
      icon: yetiTownLogo,
    },
  ],
  images: [{ img: yetiTownImg1 }, { img: yetiTownImg2 }, { img: yetiTownImg3 }],
};
export const tigraModal: ModalContentTypes = {
  name: projectNames.tigra,
  modalDescription: [
    {
      desc: "TIGRA is the first & only holistic, experience-based property management platform, created & founded by an owner & manager, for owners & managers. TIGRA delivers the ultimate real estate management platform built to increase efficiency, streamline operations, minimize cost & drive profits. All in one easy to use powerful tool.",
      icon: tigraLogo,
    },
  ],
  images: [{ img: tigraBg }, { img: tigra1 }, { img: tigra2 }],
};
export const pebbleModal: ModalContentTypes = {
  name: projectNames.pebble,
  modalDescription: [
    {
      desc: "Pebble is a fintech startup offering the first financial product where users are paid to save, spend, and send money — all in one balance. You can pay, track, and manage all your bills in one place. No more paying transfer fees or having to log in to multiple websites.",
      icon: pebbleLogo,
    },
  ],
  images: [{ img: pebbleBg }],
};

