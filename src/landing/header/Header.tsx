import { Link } from "react-router-dom"


function Header() {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0">
                    <img src="assets/img/eagle.gif" alt="" className="img-fluid" />
                    <a href="">Nsukka <span>Brothers' Club</span></a>
                </h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li className="dropdown">
                            <a href="#"><span>About us</span> <i className="bi bi-chevron-down" /></a>
                            <ul>

                                <li><Link to="/about/members">Members</Link></li>
                                <li><Link to="/about/executives">Executive Members</Link></li>
                                <li><Link to="/about/past-excos">Past Executives</Link></li>


                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#events">Events</a></li>
                        <li><a className="nav-link scrollto" href="#events">Membership</a></li>
                        <li>
                            <a className="nav-link scrollto" href="#gallery">Gallery</a>
                        </li>
                        <li><Link className="nav-link scrollto" to="#resources">Resources</Link></li>

                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>

                <a href="#about" className="get-started-btn scrollto">Donate</a>
            </div>
        </header>

    )
}

export default Header
