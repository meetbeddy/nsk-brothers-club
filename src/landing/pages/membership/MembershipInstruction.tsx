import React from 'react';
import "./membership.css"
import { Link } from 'react-router-dom';

const MembershipInstructions: React.FC = () => {
    return (


        <section id="service-details" className="service-details">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <div className="services-list">
                            <Link to="/membership/registration" className="active">Online Registeration Form</Link>

                        </div>

                        <p>click the link above to access the online registration form</p>
                    </div>
                    <div className="col-lg-8">
                        <img src="assets/img/services.jpg" alt="" className="img-fluid services-img" />
                        <h3>MEMBERSHIP AND REGISTRATION OF NEW MEMBERS:</h3>

                        <ul>
                            <li><i className="bi bi-check-circle" /> <span>Membership shall be open to all married men or widower from Nsukka.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>The vetting of a prospecting member; need to be thorough, his source of income must be legal and able to support the activities of the club.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>His sponsors must vouch and commit to the integrity and financial viability of a candidate.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>Any person who has been convicted of any criminal offence shall not be eligible to join.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>The membership ceiling is 30 (thirty) members.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>A registered new member would be in a mandatory probation of 1 (one) year from the date of registration, within the period he shall not enjoy any privilege.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>An intending applicant shall obtain a membership form from the Secretary on payment of a nonrefundable applicant fee of N 20,000.00(Twenty thousand naira only) to the financial secretary, who shall issue him a receipt for the payment.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>A successful applicant shall be registered upon payment of a fee of N1,000,000.00 (one million naira only) and a cartoon of Andre Rose wine.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>There shall be no registration by proxy, every registered member shall be entitled to an identity card upon payment of a fee to be determined by members of the club.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>The applicant has only one month to return filled form and two months to get registered by paying the registration fee in part or full. There is six months window to complete the payment.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>An identity card shall be endorsed, before insurance by the Chairman or Secretary and same shall be renewed after every four years.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>The preferred age bracket for an intending member shall be between 35 and 50 years of age.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>6 (six) financial members form the quorum of the club’s meeting.</span></li>
                        </ul>
                        <h3>DISTANCE MEMBERSHIP:</h3>
                        <p>A member who has been regular at meeting for at least 2 years may apply to be a distance member under the following conditions:</p>
                        <ul>
                            <li><i className="bi bi-check-circle" /> <span>If he relocates to a place more than 20kms from Abuja and wishes to continue his membership of the club and applies in writing.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>If he nominates a reputable financial member to represent him.</span></li>
                            <li><i className="bi bi-check-circle" /> <span>If he promises, in writing to attend meetings in person, once every four months</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>




    );
};

export default MembershipInstructions;
