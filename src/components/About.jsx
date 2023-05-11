import css3 from '../assets/css3.svg'
import express from '../assets/express.svg'
import github from '../assets/github.svg'
import java from '../assets/java.svg'
import javascript from '../assets/javascript.svg'
import mongo from '../assets/mongo.svg'
import mysql from '../assets/mysql.svg'
import node from '../assets/node.svg'
import react from '../assets/react.svg'
import sass from '../assets/sass.svg'
import spring from '../assets/spring.svg'
import vscode from '../assets/vscode.svg'
import flask from '../assets/flask_icon.svg'
import python from '../assets/python_icon.svg'
import { useEffect, useRef } from 'react'



const About = ({contactRefProp, setAboutRefProp}) => {

    function contactIntoView(){
        contactRefProp.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    const aboutRef = useRef('')
    
    useEffect(()=>{
        setAboutRefProp(aboutRef)
    }, [])


    return(
        <section className="section-about" ref = {aboutRef}>
            <div className ="aboutGrid">
                <div className="aboutGrid__left">
                    <h3 className="aboutGrid__left__heading">About Me</h3>
                    <p className="aboutGrid__left__paragraph"> 
                        Hello, my name is <span>Alex Zuniga </span> and I am a full-stack developer. I am looking to take the <span>next step</span> in my <span>software development career</span>. 
                        I have been working in the Manufacturing and Supply Chain industry for over six years. I have learned a lot about how things are made, and shipped around the world, how they make it into our homes, and into the familiar products around us.
                    </p>
                    <p className="aboutGrid__left__paragraph"> 
                        As much as I enjoyed my time in Supply Chain, I knew that it wasn’t something that I wanted to do forever. With the support and motivation from my partner, I decided to <span>pursue my passion for tech</span> full time. 
                        I look forward to starting a fun, challenging, and interesting career in software development. I <span>enjoy learning, problem-solving, and working with others</span> to achieve common goals. I am always looking to meet new people and discuss anything tech-related. Please feel free to <span>reach out</span> to connect.
                    </p>
                    <button className='about-btn btn-1' onClick={contactIntoView}> Get in touch! </button>

                </div>
                <div className="aboutGrid__right">
                    <h3 className="aboutGrid__right__heading">My Tools</h3>
                    <div className="aboutGrid__right__container">
                        <div className="aboutGrid__right__subcontainer">
                            <img src={mongo} alt="mongo Icon" className='aboutGrid__right__icon aboutGrid__right__icon--mongo'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">MongoDB</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={express} alt="express Icon" className='aboutGrid__right__icon aboutGrid__right__icon--express'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Express</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={react} alt="react Icon" className='aboutGrid__right__icon aboutGrid__right__icon--react'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">React</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={node} alt="node Icon" className='aboutGrid__right__icon aboutGrid__right__icon--node'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Node.js</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={java} alt="java Icon" className='aboutGrid__right__icon aboutGrid__right__icon--java'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Java</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={spring} alt="spring Icon" className='aboutGrid__right__icon aboutGrid__right__icon--spring'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Spring</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={javascript} alt="javascript Icon" className='aboutGrid__right__icon aboutGrid__right__icon--javascript'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Javascript</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={flask} alt="Flask Icon" className='aboutGrid__right__icon aboutGrid__right__icon--flask'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Flask</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={python} alt="Python Icon" className='aboutGrid__right__icon aboutGrid__right__icon--python'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Python</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={css3} alt="css3 Icon" className='aboutGrid__right__icon aboutGrid__right__icon--css3'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">CSS3</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={sass} alt="sass Icon" className='aboutGrid__right__icon aboutGrid__right__icon--sass'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Sass</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={mysql} alt="mysql Icon" className='aboutGrid__right__icon aboutGrid__right__icon--mysql'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">MySQL</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={github} alt="github Icon" className='aboutGrid__right__icon aboutGrid__right__icon--github'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">Github</p>
                        </div>
                        <div className="aboutGrid__right__subcontainer">
                            <img src={vscode} alt="vscode Icon" className='aboutGrid__right__icon aboutGrid__right__icon--vscode'/>
                            <p className="aboutGrid__right__subtext aboutGrid__right__subtext--css3">VSCode</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;