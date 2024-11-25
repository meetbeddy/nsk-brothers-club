import PageWrapper from "../PageWrapper";

function Anthem() {
    return (
        <PageWrapper>
            <section className="container mt-3">
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center mb-4">
                        <h2 className="display-4 mb-3">Our Anthem</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Video Section */}
                            <div className="ratio ratio-16x9 mb-4">
                                <video
                                    className="rounded shadow"
                                    controls
                                    src="https://res.cloudinary.com/lmcs/video/upload/v1732482501/i34xolxfxldgq9uqrmle.mp4"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Lyrics Section */}
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="lyrics">
                                        <p className="lead mb-3">
                                            I love this family!<br />
                                            I love this family of friends<br />
                                            So closely!
                                        </p>

                                        <p className="lead mb-3">
                                            So closely knitted into one,<br />
                                            They have taken me into their arms and am so glad to be a part of this great family,<br />
                                            Don't you know you mean so much to me?
                                        </p>

                                        <p className="lead mb-3">
                                            My comrades, you mean so much to me,<br />
                                            I need you to build this family!<br />
                                            You need me to build this family,
                                        </p>

                                        <p className="lead mb-3">
                                            Higher Higher and Higher, we will go (×2)<br />
                                            Closer closer and closer we will be (×2)
                                        </p>

                                        <p className="lead mb-3">
                                            They have taken me into their arms and am so glad to be a part of this great family.
                                        </p>

                                        <p className="lead fw-bold text-center mt-4">
                                            COMRADE BROTHERS!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}

export default Anthem;