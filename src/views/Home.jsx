import {useState} from 'react'
import StopWatch from "../components/StopWatch"
import NavBar from "../components/NavBar"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => {

    const [aboutRef, setAboutRef] = useState('')
    const [heroRef, setHeroRef] = useState('')
    const [contactRef, setContactRef] = useState('')
    const [projectRef, setProjectRef] = useState('')

    return(
            <body>
                <header className="header__navBar">
                    {/* nav-bar - component/jsx layout/scss */}
                    <NavBar contactRefProp = {contactRef} heroRefProp = {heroRef} projectRefProp = {projectRef} aboutRefProp = {aboutRef} />
                </header>
                <main>
                    {/* Hero section  */}
                    <Hero aboutRefProp = {aboutRef} setHeroRefProp = {setHeroRef}/>
                    {/* Intro section - about me - component/jsx/scss */}
                    <About contactRefProp = {contactRef}  setAboutRefProp={setAboutRef} />
                    {/* section-projects - component.jsx/scss */}
                    <Projects setProjectRefProp = {setProjectRef}/>
                    {/* section-form - component.jsx/scss */}
                    <Contact setContactRefProp = {setContactRef}/>
                </main>
                <footer>
                    <Footer/>
                    {/* footer - component.jsx layout.scss */}
                </footer>
            </body>
    )
}

export default Home