
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter }from "react-icons/fa";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolderOpen, faUserCircle, faPeopleGroup, faContactCard, faGraduationCap} from '@fortawesome/free-solid-svg-icons'


export const links = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faUserCircle}/>,
    text: "profile",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faPeopleGroup}/>,
    text: "team",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faFolderOpen}/>,
    text: "projects",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faGraduationCap}/>,
    text: "education",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faContactCard}/>,
    text: "about",
  },

];


export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
];
