
import "./hero.css"
function SliderHero() {
    return (
        <section id="hero" className="hero">
            <div className="info d-flex align-items-center">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
                        <div className="col-xl-6 col-lg-8">
                            <h1>Welcome to The Nsukka Brothers Club<span>.</span></h1>
                            <h2>Celebrating our heritage, promoting our culture and building our community.</h2>
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
            </div>
            <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={5000}>
                <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/hero/hero-1.jpg)' }} />
                <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero/hero-2.jpg)' }} />
                <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero/hero-3.jpg)' }} />
                <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero/hero-4.jpg)' }} />
                <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero/hero-5.jpg)' }} />
                <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
                </a>
            </div>
        </section>


    )
}

export default SliderHero
