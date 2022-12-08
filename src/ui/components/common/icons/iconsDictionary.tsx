import Facebook from "./Facebook";
import GitHub from "./GitHub";
import Inst from "./Inst";
import Main from "./Main";
import Twitter from "./Twitter";
import Vk from "./Vk";
import WebSite from "./WebSite";
import Youtube from "./Youtube";


type TIconsDictionary = {
        [key : string] : JSX.Element
}

export const iconsDictionary : TIconsDictionary  = {
        facebook: <Facebook/> ,
        github: <GitHub/>,
        instagram: <Inst/>,
        mainLink: <Main/>,
        twitter: <Twitter/>,
        vk: <Vk/>,
        website: <WebSite/>,
        youtube: <Youtube/>,
}