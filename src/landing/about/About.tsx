import { useState } from "react";

function About() {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                        <img src="assets/img/about-us-2.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay={100}>
                        <h3>About Us</h3>
                        <p className="fst-italic">
                            We are a group comprising of professionals and business men, who are proud to be from Enugu North Senatorial Zone, culturally known as the Nsukka people.
                        </p>
                        {/* Displaying trimmed content if showFullContent is false */}
                        {!showFullContent && (
                            <>
                                <p>
                                    We are desirous of improving the living standards of members and touching positively the lives of the less privileged especially within our zone.
                                </p>
                                <p>
                                    Our core values are integrity, empathy and progress, we believe in aboundance and making progress in life through legal and moral right channels.
                                </p>
                                <p>We would continue to intervene around positive projection of our culture and image, standing and supporting the interests of Nsukka people and supporting the less privileged through visitations to motherless children homes, payment of hospital bills for the indigents and payment of school fees for the very poor. We believe that Nsukka would always get better.</p>
                                {/* "Read More" button to toggle full content */}
                                <button onClick={toggleContent} className="get-started-btn text-dark">Read More</button>
                            </>
                        )}

                        {showFullContent && (
                            <>
                                <p>
                                    We are desirous of improving the living standards of members and touching positively the lives of the less privileged especially within our zone.
                                </p>
                                <p>
                                    Our core values are integrity, empathy and progress, we believe in aboundance and making progress in life through legal and moral right channels.
                                </p>
                                <p>We would continue to intervene around positive projection of our culture and image, standing and supporting the interests of Nsukka people and supporting the less privileged through visitations to motherless children homes, payment of hospital bills for the indigents and payment of school fees for the very poor. We believe that Nsukka would always get better.</p>
                                <p>
                                    We celebrate the progress of our members and we support each other to advance in our areas of endeavor.
                                </p>
                                <p>
                                    We currently meet only in Abuja and our members are all based in Abuja.
                                    We support each other during bad or good times; and support members social activities
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
