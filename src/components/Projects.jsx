import { useRef, useState, useEffect } from "react";
import frndfndr1 from "../assets/frndfndr1.jpeg";
import frndfndr2 from "../assets/frndfndr2.png";
import frndfndr3 from "../assets/frndfndr3.png";
import frndfndr4 from "../assets/frndfndr4.png";
import picturest1 from "../assets/picturestLanding.gif";
import picturest2 from "../assets/picturestLogin.png";
import picturest3 from "../assets/picturestSignUp.png";
import picturest4 from "../assets/picturestUpload.png";
import nba1 from "../assets/nbaLanding.png";
import nba2 from "../assets/nbaLogin.png";
import nba3 from "../assets/nbaRegister.png";
import nba4 from "../assets/nbaLanding2.png";

const Projects = ({setProjectRefProp}) => {

    const frndFndrPics = [frndfndr1, frndfndr2, frndfndr3, frndfndr4]

    const handlePictureChange = () => {
        // used to loop through the photos
    }

    window.onclick = (event) => {
        // console.log(event.target)

    }

    const [isModalActive, setIsModalActive] = useState(false)
    const [modalIndex, setModalIndex] = useState(null)


    const project = (event) => {
        let popupOverlay = document.getElementById(event.target.className[event.target.className.length-1]);
        setModalIndex(event.target.id)
        setIsModalActive(true);
    }

    const refButton1 = useRef('')
    const refButton2 = useRef('')
    const refButton3 = useRef('')

    const scrollRef = useRef('')   
    useEffect(()=>{
        setProjectRefProp(scrollRef)
    }, [])

    function clickOutside(){
        if(isModalActive){
            setIsModalActive(!isModalActive)
        }
    }

    return (
        <section className = "section__projects" ref = {scrollRef} id = "projects" onClick = {clickOutside}>
            <div className="projects__heading__container">
                <h2 className="projects__heading projects__heading--main">PROJECTS</h2>
                <p className="projects__heading projects__heading--subtext">Below are some of the recent projets I have created.  Please take a look and feel free to learn more about them</p>
            </div>
            <div>
                <div className="projects__main__container" id = "#p1">
                    <div className="projects__main__card__grid">
                        <div className="projects__main__card__imgContainer"> 
                            <img src={frndfndr4} alt="" className="projects__main__card--img"/>
                        </div>
                        <div className="projects__main__card__textContainer">
                            <h4 className="projects__main__card projects__main__card--title"> FRNDFNDR </h4>
                            <p className="projects__main__card projects__main__card--text"> FrndFndr is an app the helps people connect with their future best friend. The tech stack used to create FrndFndr was "MERN" or MongoDB Express React Nodejs.</p>
                            <button className="projects__main__card projects__main__card--btn btn-1 2222" id = "1" ref={refButton1} onClick={(event) => {project(event) }}> LEARN MORE</button>
                        </div>
                    </div>
                    <div className="projects__main__card__grid" id = "#p2">
                        <div className="projects__main__card__imgContainer"> 
                            <img src={picturest2} alt="" className="projects__main__card--img"/>
                        </div>
                        <div className="projects__main__card__textContainer">
                            <h4 className="projects__main__card projects__main__card--title"> Picturest </h4>
                            <p className="projects__main__card projects__main__card--text"> Picturest is a photo-based social media web application that was developed by three aspiring web developers. </p>
                            <p className="projects__main__card projects__main__card--text"> We were inspired to build this project because social media applications are a big part of everyone’s daily lives and sharing photos and other forms of media make up a big part of social media websites and how we connect with the world and share information.</p>
                            <button  className="projects__main__card projects__main__card--btn btn-1" id = "2" ref={refButton2} onClick={(event) => {project(event) }}> LEARN MORE</button>
                        </div>
                    </div>
                    <div className="projects__main__card__grid" id = "#p3">
                        <div className="projects__main__card__imgContainer"> 
                            <img src={nba1} alt="" className="projects__main__card--img"/>
                        </div>
                        <div className="projects__main__card__textContainer">
                            <h4 className="projects__main__card projects__main__card--title"> NBA Showdown </h4>
                            <p className="projects__main__card projects__main__card--text"> NBA Showdown is a web-based fantasy sports and statistics application. As one of my first full-stack project, I wanted to build something that allowed me to share one of my interests. </p>
                            <p className="projects__main__card projects__main__card--text"> The application allows users to create profiles, search players, track their statistics and build their own team</p>
                            <button  className="projects__main__card projects__main__card--btn btn-1" id = "3" ref={refButton3} onClick={(event) => {project(event) }}> LEARN MORE</button>
                        </div>
                    </div>
                </div>
                {/* ************************* POPUP ************************* */}
                {modalIndex === "1" && isModalActive  &&
                    <div className="popup__overlay" id = "1" onClickOutside = ''>
                        <div className="popup__card">
                            <div className="popup__img-container">
                                <img src={frndfndr4} className="popup__card__left--img"/>
                                <img src={frndfndr3} className="popup__card__left--img"/>
                                <img src={frndfndr2} className="popup__card__left--img"/>
                                <img src={frndfndr1} className="popup__card__left--img"/>
                            </div>
                            <div className="popup__card__right">
                                <h2 className="popup__card__right__heading">FrndFndr</h2>
                                <p className ="popup__card__right__text">FrndFndr is web application that helps connect users with their future furry (or scaly) best friend!
                                I was eager to develop this tool with the goal in mind that every animal should find a loving home. If you have talked to anyone whose adopted, you know that it's just as much about saving an animal as it is growing your family by (at least) one.</p>
                                <h2 className="popup__card__right__subheading">Features</h2>
                                <ul className ="popup__card__right__list">
                                    <li className ="popup__card__right__li">Use FrndFndr as a guest or saved user</li>
                                    <li className ="popup__card__right__li"> Single Page: FrndFndr takes advantage of the responsive, single page application capabilities of FaceBook's React for a seamless user experience</li> 
                                    <li className ="popup__card__right__li">Flexible search parameters: enable users to find exatly what they are looking for!</li> 
                                    <li className ="popup__card__right__li"> Chat: to create an easy to use search tool for animals available for adoption around the country.</li> 
                                </ul>
                                <h2 className="popup__card__right__subheading">Built With</h2>
                                <ul className ="popup__card__right__list">
                                    <li className ="popup__card__right__li">Javascript</li>
                                    <li className ="popup__card__right__li">Express</li>
                                    <li className ="popup__card__right__li">React</li>
                                    <li className ="popup__card__right__li">3rd party APIs and libraries (Axios, Socket.io, PetfinderAPI etc.)</li>
                                    <li className ="popup__card__right__li">CSS3</li>
                                    <li className ="popup__card__right__li">HTML5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                {modalIndex === "2" && isModalActive  &&
                    <div className="popup__overlay" id = "2">
                        <div className="popup__card">
                            <div className="popup__img-container">
                                    <img src={picturest2} className="popup__card__left--img"/>
                                    <img src={picturest3} className="popup__card__left--img"/>
                                    <img src={picturest4} className="popup__card__left--img"/>
                                    <img src={picturest1} className="popup__card__left--img"/>
                                </div>
                            <div className="popup__card__right">
                                <h2 className="popup__card__right__heading">Picturest</h2>
                                <p className ="popup__card__right__text">Picturest is a photo-based social media web application that was developed by three aspiring web developers. Our group was inspired to build this project because social media applications are a big part of everyone’s daily lives and sharing photos and other forms of media make up a big part of social media websites and how we connect with the world and share information. Pinterest is one of the biggest social media platform that exemplifies this and the inspiration behind Picturest's design.</p>
                                <h2 className="popup__card__right__subheading">Features</h2>
                                <ul className ="popup__card__right__list">
                                    <li className="popup__card__right__li">The most popular photos (based on # of likes) get priority display on the main dashboard</li>
                                    <li className ="popup__card__right__li">Users can create their own profiles</li>
                                    <li className ="popup__card__right__li"> Users can upload a photo from their system or from the internet</li> 
                                    <li className ="popup__card__right__li"> Users can leave comments and likes on photos.</li> 
                                    <li className ="popup__card__right__li">Users can like comments and edit their own</li> 
                                </ul>
                                <h2 className="popup__card__right__subheading">Built With</h2>
                                <ul className ="popup__card__right__list">
                                    <li className ="popup__card__right__li">Java</li>
                                    <li className ="popup__card__right__li">Spring Boot</li>
                                    <li className ="popup__card__right__li">MySQL</li>
                                    <li className ="popup__card__right__li">Spring Security</li>
                                    <li className ="popup__card__right__li">bCrypt</li>
                                    <li className ="popup__card__right__li">Bootstrap</li>
                                    <li className ="popup__card__right__li">CSS3</li>
                                    <li className ="popup__card__right__li">HTML5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
                {modalIndex === "3" && isModalActive  &&
                    <div className="popup__overlay" id = "3">
                        <div className="popup__card">
                            <div className="popup__img-container">
                                    <img src={nba2} className="popup__card__left--img"/>
                                    <img src={nba1} className="popup__card__left--img"/>
                                    <img src={nba3} className="popup__card__left--img"/>
                                    <img src={nba4} className="popup__card__left--img"/>
                                </div>
                            <div className="popup__card__right">
                                <h2 className="popup__card__right__heading">NBA Showdown</h2>
                                <p className ="popup__card__right__text">NBA Showdown is a web-based fantasy sports and statistics application. As one of my first full-stack project, I wanted to build something that allowed me to share one of my interests with the community. The application allows users to create profiles, search players, track their statistics and build their own team.</p>
                                <h2 className="popup__card__right__subheading">Features</h2>
                                <ul className ="popup__card__right__list">
                                    <li className ="popup__card__right__li">Porfile: Users can signup and have their profiles proteced with Bcrypt</li>
                                    <li className ="popup__card__right__li"> Statitics: Users can search and see stats of players for current and past seasons (queried DB goes back to the 2014/15 season)</li> 
                                    <li className ="popup__card__right__li">Flexible search parameters: enable users to find exatly what they are looking for!</li> 
                                    <li className ="popup__card__right__li"> Users can create "fantasy" teams with players of their choosing</li> 
                                </ul>
                                <h2 className="popup__card__right__subheading">Built With</h2>
                                <ul className ="popup__card__right__list">
                                    <li className ="popup__card__right__li">Flask</li>
                                    <li className ="popup__card__right__li">Python</li>
                                    <li className ="popup__card__right__li">Javascript</li>
                                    <li className ="popup__card__right__li">3rd party APIs and libraries</li>
                                    <li className ="popup__card__right__li">MySQL</li>
                                    <li className ="popup__card__right__li">bCrypt</li>
                                    <li className ="popup__card__right__li">CSS3</li>
                                    <li className ="popup__card__right__li">HTML5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>    
    )
}

export default Projects