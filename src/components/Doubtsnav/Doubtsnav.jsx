import "./nav.css";
import { FiSearch } from "react-icons/fi";
import {RiNotification4Line} from 'react-icons/ri'
const Doubtsnav = () => {
  return (
    <div className="navbar">
      <div className="company-name">DoubtLess</div>
      <div className="search-bar">
        <div><FiSearch/></div>
        <input type="text" placeholder="Search for already asked doubts" />
      </div>
      <div className="icons">
        <div className="notification-icon"><RiNotification4Line/></div>
        <div className="profile-icon"><img src="https://img.favpng.com/1/15/9/scalable-vector-graphics-computer-icons-user-profile-portable-network-graphics-png-favpng-n05BjRqcBz9Ub9NtAbz8GXEaN.jpg"/></div>
      </div>
    </div>
  );
};

export default Doubtsnav;
