import dataRef from '../../references.json';
import './style.scss'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

function Footer() {

    return (
        <>
            <footer>
                <ul className="social-buttons">
                    <li className="list-inline-item"><a href={dataRef.social_links.github}
                        style={{ color: "black" }}
                        target="_blank"
                        rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                    </li>
                    <li className="list-inline-item"><a href={dataRef.social_links.linkedin}
                        style={{ color: "black" }}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    </li>
                    <li className="list-inline-item"><a href={dataRef.social_links.facebook}
                        style={{ color: "black" }}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    </li>
                    <li className="list-inline-item"><a href={dataRef.social_links.youtube}
                        style={{ color: "black" }}
                        target="_blank"
                        rel="noopener noreferrer">
                        <BsYoutube />
                    </a>
                    </li>
                </ul>
                <a href={dataRef.email}>rener.almeida@gmail.com</a>
            </footer>
        </>
    )
}

export default Footer;