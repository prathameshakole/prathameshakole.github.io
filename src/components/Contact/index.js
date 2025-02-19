
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_i9zk1th', 'template_3e2q3oj', form.current, 'skfy24Nm20fs3tmsA')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1 className='heading'>
                        Contact Me
                    </h1>
                    <p>
                        I am looking for Full-time Job opportunities this summer (starting May 2025).
                        <br /> However, if you have any other requests or
                        questions, don't hesitate to contact me on LinkedIn or using the form below.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="from_name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    
                </div>
                
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Contact;