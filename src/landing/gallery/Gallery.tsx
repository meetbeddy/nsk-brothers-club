import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <section id="gallery" className="portfolio">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Gallery</h2>

                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/image_one.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/image_one.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-expand" /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/image_one.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/image_one.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-expand" /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/image_one.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/image_one.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-expand" /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/image_one.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/image_one.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-expand" /></a>

                                </div>
                            </div>
                        </div>
                    </div>








                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link to="/gallery" className="btn btn-primary get-started-btn">See All</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Gallery
