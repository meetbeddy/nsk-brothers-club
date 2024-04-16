import { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"




function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
    };

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const handleDropdownClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (isMobileNavOpen) {
            e.preventDefault();
            const target = e.currentTarget as HTMLElement;
            if (target.nextElementSibling) {
                target.nextElementSibling.classList.toggle('dropdown-active');
            }
        }
    };


    // Attach scroll event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header id="header" className={`${isScrolled ? 'header-scrolled fixed-top' : 'fixed-top'} ${isMobileNavOpen ? 'mobile-nav-active fixed-top' : 'fixed-top'}`}>
            <div className="container d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0">
                    <img src="assets/img/eagle.gif" alt="" className="img-fluid" />
                    <Link to="/">The Nsukka <span>Brothers' Club</span></Link>
                </h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
                    <ul>
                        <li><a className="nav-link scrollto active" href="/#hero">Home</a></li>
                        <li className="dropdown" >
                            <a href="#" onClick={handleDropdownClick}><span>About us</span> <i className="bi bi-chevron-down" /></a>
                            <ul>

                                <li><Link to="/members">Members</Link></li>
                                <li><Link to="/executives">Executive Members</Link></li>
                                <li><Link to="/past-excos">Past Executives</Link></li>


                            </ul>
                        </li>
                        {/* <li><a className="nav-link scrollto" href="/#events">Events</a></li> */}
                        <li><NavLink className="nav-link scrollto" to="/membership">Membership</NavLink></li>
                        <li>
                            <a className="nav-link scrollto" href="/#gallery">Gallery</a>
                        </li>
                        <li><Link className="nav-link scrollto" to="/resources">Resources</Link></li>

                        <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
                    </ul>
                    <i className={`bi bi-list mobile-nav-toggle ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav} />
                </nav>

                <Link to="/membership" className="get-started-btn scrollto">Join</Link>
            </div>
        </header>

    )
}

export default Header
