import {Link} from "react-router-dom"
import aimIcon from "../assets/aimIcon.svg"
import twitterIcon from "../assets/twitterIcon.svg"
import gitHubIcon from "../assets/gitHubIcon.svg"
import linkedInIcon from "../assets/linkedInIcon.svg"
import instaIcon from "../assets/instaIcon.svg"

const Footer = () => {
    return(
        <section className="section-footer">
            <div className="footer__container">
                        <p className="footer__text">
                            I put together this portfolio page to show off some of my web development abilities.                            If you read this far, please reach out and I would be more than happy to talk anything tech.  I am open to new work opportunities, new projects and meeting as many tech enthusiasts like myself as possible.  I appreciate you taking the time to chcek out my portfolio and thanks for stopping by!
                        </p>
                        <Link to = "https://www.linkedin.com/in/rthe3rd/" > <img className="footer__img" src={linkedInIcon} alt="linkedInIcon"></img> </Link>
                        <Link to = "https://github.com/Rthe3rd" > <img className="footer__img" src={gitHubIcon} alt="gitHubIcon"></img> </Link>
                        <Link to = "https://twitter.com/rthe3rd" > <img className="footer__img" src={twitterIcon} alt="twitterIcon"></img> </Link>
                        <Link to = "https://www.instagram.com/"> <img className="footer__img" src={instaIcon} alt="instaIcon"></img> </Link>
                        <img className="footer__img" src={aimIcon} alt="aimIcon"></img>
            </div>
        </section>
    )
}

export default Footer