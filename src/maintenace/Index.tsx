

export default function Index() {
    return (

        <div className="main-area-wrapper">
            <div className="main-area center-text" style={{ backgroundImage: 'url(images/countdown-7-1600x900.jpg)' }}>
                <div className="display-table">
                    <div className="display-table-cell">
                        <h1 className="title"><b>Engineers are cooking</b></h1>
                        <p className="desc font-white">Our website is currently undergoing construction.
                            We are coming shortly. Thank you for your patience.</p>
                        <div id="normal-countdown" data-date="2024/03/10" />
                        <a className="notify-btn" href="#"><b>NOTIFY US</b></a>
                        <ul className="social-btn">
                            <li className="list-heading">Follow us for update</li>
                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                            <li><a href="#"><i className="ion-social-googleplus" /></a></li>
                            <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
                            <li><a href="#"><i className="ion-social-pinterest" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
