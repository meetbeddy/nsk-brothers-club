import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const SERVICE_ID: string = 'service_pw3rfyf';
    const TEMPLATE_ID: string = "template_sax5gfv";
    const PUBLIC_KEY: string = "byep6puCeHiqd5F3f";

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;


        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');

                    Swal.fire({
                        icon: "success",
                        title: "Successful",
                        text: "message sent successfully!",
                    });
                },
                (error) => {

                    Swal.fire({
                        icon: "error",
                        title: "Message Not sent",
                        text: error?.text
                    });
                },
            );
    };

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            className="gmap_iframe"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=No.%204%20Canaan%20drive,%20Canaan%20Estate%20Life%20Camp%20Ext,%20Abuja&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
                        />
                        <a href="https://strandsgame.net/">Strands Game</a>
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}",
                        }}
                    />
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location:</h4>
                                <p>No. 4 Canaan drive, Canaan Estate Life Camp Ext, Abuja</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>nsukkabrothers8@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Call:</h4>
                                <p>+234 803 704 5161</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form className="php-email-form" ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="user_email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
