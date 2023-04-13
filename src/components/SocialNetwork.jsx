import { FaLinkedinIn, FaGithub, FaInstagram, FaPhone, FaTwitter} from "react-icons/fa";
import "../styles/socialnetwork.sass";





const Networks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
  { name: "twitter", icon: <FaTwitter /> },
  { name: "phone", icon: <FaPhone /> },
];



const SocialNetwork = () => {
  return (
    <section id="social-networks">
      {Networks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};



export default SocialNetwork;
      