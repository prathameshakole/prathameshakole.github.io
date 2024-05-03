
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { FaLinkedin } from 'react-icons/fa'

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
                        I am looking for internships/Full-time Job opportunities.
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
                        <a href="https://www.linkedin.com/in/prathamesh-akole/" target="_blank" rel="noopener noreferrer">
                            <button className='flat-button2'>
                              <FaLinkedin size={20}/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="info-map">
                    Prathamesh Akole
                    <br />
                    <br />
                    Northeastern University <br />
                    Boston, Massachusetts <br />
                    <br />
                    <span>akoleprathamesh@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[42.3388, -71.0892]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[42.3388, -71.0892]}>
                            <Popup>Hi, come over for a cup of coffee</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Contact;