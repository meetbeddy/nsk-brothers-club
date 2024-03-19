

interface BoardMember {
    name: string;
    position: string;
    imageURL: string;
}

interface BoardProps {
    boardMembers: BoardMember[];
}
function Board({ boardMembers }: BoardProps) {
    return (
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Board of Trustees</h2>
                    {/* <p>Check our Team</p> */}
                </div>
                <div className="row d-flex flex-wrap justify-content-center align-items-center">
                    {boardMembers.map((member, index) => (
                        <div key={index} className="col-lg-3 col-md-6 d-flex align-items-stretch">
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

    )
}

export default Board
