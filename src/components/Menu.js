import "../styles/menu.scss";
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/inbox.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Notification} from "../images/notification.svg";
import image from "../images/profile.jpg"
import ProfileIcon from "./ProfileIcon";

function Menu(){
    return(
        <div className="menu">
            <Home className="icon"/>
            <Inbox className="icon"/>
            <Explore className="icon"/>
            <Notification className="icon"/>
            <ProfileIcon iconSize="small" image={image} storyBorder={true}/>
        </div>
    )
}

export default Menu;