import { useRef, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import '../../src/background.css'
// import background from "../../src/background.css?inline"

const Contact = ({ setContactRefProp }) => {

    const scrollRef = useRef('')

    useEffect(() => {
        // prop = ref assignment on each load
        setContactRefProp(scrollRef)
    }, [])

    const [state, handleSubmit] = useForm("xyyavyqa");
    if (state.succeeded) {
        // popup with message sent!
        <Contact/>

    }


    return (
        <section className="section-contact background-test" ref={scrollRef} id="section-contact" >
            <div className="form__container">
                <form action="https://formspree.io/f/xyyavyqa" className="form__body" onSubmit={handleSubmit} method="POST">
                    <label htmlFor="name" className="form__body__label form__body__label--name">Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" className="form__body__input form__body__input--name" />
                    <label htmlFor="email" className="form__body__label form__body__label--name">Email</label>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <input id="email" type="email" name="email" placeholder="Enter Your Email" className="form__body__input form__body__input--email" />
                    <label htmlFor="message" className="form__body__label form__body__label--name">Message</label>
                    <textarea id="message" name="message" type="textarea" placeholder="Enter Your Message" rows='10' className="form__body__input form__body__input--message" />
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                    <div className='form__body__btn__container'>
                        <button type="submit" disabled={state.submitting} className="form__body__btn btn-1"> Submit </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;



