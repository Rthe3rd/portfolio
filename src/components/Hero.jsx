import { useEffect, useRef } from "react"

const Hero = ({aboutRefProp, setHeroRefProp}) => {

    const heroRef = useRef('')

    useEffect(()=>{
        setHeroRefProp(heroRef)
    },[])

    const handleClick = (event, ref) => {
        ref.current.scrollIntoView({block: "start", behavior: "smooth"})
    }

    return(
        <>
            <section className="section-hero" ref = {heroRef}>
                <div className="container">
                    <h1 className="container__heading ">Hey there! My Name is Alex Zuniga</h1>
                    <p className="container__subheading ">Experienced professional breaking into the tech industry.  A career change <br/> isn't easy at 31 but nothing in life worth it is. <br/> </p>
                    <button onClick = {(event) => handleClick(event, aboutRefProp)} className="container__button btn-1">About</button>
                </div>

            </section>
        </>
    )
}

export default Hero;