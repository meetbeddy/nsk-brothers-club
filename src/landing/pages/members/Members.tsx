import React from 'react'
import PageWrapper from '../PageWrapper'
import data from '../../../data'

function Members() {
    return (
        <PageWrapper>
            <section className="container mt-3">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Members Lists</h2>
                        {/* <p>EXECUTIVE MEMBERS</p> */}
                    </div>
                    <div className="row d-flex flex-wrap justify-content-center align-items-center">
                        {
                            data.members.map((member) => {
                                return (
                                    <div className="col-lg-2 mb-4">
                                        {/* Row */}
                                        <div className="row">
                                            <div className="col-md-12">
                                                <img src={member.imageURL} alt={member.name} className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <div className="pt-2">
                                                    <p className="mt-4 font-weight-medium mb-0">{member.name}</p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                </div>
            </section>

        </PageWrapper>
    )
}

export default Members
