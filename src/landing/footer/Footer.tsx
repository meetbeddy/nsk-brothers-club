
function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>Nsukka <span>Brothers' Club</span></h3>
                                <p>
                                    No. 4 Canaan drive, Canaan Estate<br />
                                    Life Camp Ext, Abuja <br /><br />
                                    <strong>Phone:</strong> +234 803 704 5161
                                    <br />
                                    <strong>Email:</strong> nsukkabrothers8@gmail.com<br />
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" /> <a href="#">Gallery</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#">Executives</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#">Members</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 ">
                            <div className="icon-box">
                                <i className="ri-calendar-todo-line" /> meeting days
                                <h2>Every Last Sunday of the month</h2>
                            </div>
                            {/* Add attribution for the image */}
                            {/* <p>Image by <a href="https://www.freepik.com/free-photo/medium-shot-nigerian-men_16130663.htm?query=igbo#from_view=detail_alsolike">Freepik</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    © Copyright <strong><span>Nsukka Brothers' Club</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer
