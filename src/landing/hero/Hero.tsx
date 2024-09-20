
function Hero() {
    return (
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
                    <div className="col-xl-6 col-lg-8">
                        <h1>Welcome to The Nsukka Brothers Club.</h1>
                        <h2>Celebrating Heritage, Building Community.</h2>
                    </div>
                </div>
                {/* <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay={250}>


                    <div className="col-xl-2 col-md-6">
                        <div className="icon-box">
                            <i className="ri-calendar-todo-line" />
                            <h3><a href="">Meets Every Last Sunday of the month</a></h3>
                        </div>
                    </div>

                </div> */}
            </div>
        </section>

    )
}

export default Hero
