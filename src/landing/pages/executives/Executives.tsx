import PageWrapper from '../PageWrapper'
import data from '../../../data'

function Executives() {
    return (
        <PageWrapper>

            <section className="container mt-3">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>2024</h2>
                        <p>EXECUTIVE MEMBERS</p>
                    </div>
                    <div className="row d-flex flex-wrap justify-content-center align-items-center">
                        {data.executiveMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6 my-4 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="member-img">
                                        <img src={member.imageURL} className="img-fluid" alt={member.name} />

                                    </div>
                                    <div className="member-info">
                                        <h4>{member.name}</h4>
                                        <span>{member.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </PageWrapper>
    )
}

export default Executives
