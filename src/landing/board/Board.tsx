import styled from 'styled-components';

interface BoardMember {
    name: string;
    position: string;
    imageURL: string;
}

interface BoardProps {
    boardMembers: BoardMember[];
}

const Section = styled.section`
    padding: 60px 0;
    background: #f8f9fa;
`;

const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #2c3e50;
        position: relative;
        margin-bottom: 30px;

        &::after {
            content: '';
            position: absolute;
            display: block;
            width: 50px;
            height: 3px;
            background: #007bff;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const MemberCard = styled.div`
    position: relative;
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }
`;

const MemberImage = styled.div`
    position: relative;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    overflow: hidden;
    background: #f8f9fa;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    &:hover img {
        transform: scale(1.1);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
    }
`;

const MemberInfo = styled.div`
    padding: 1.5rem;
    text-align: center;
    background: #fff;

    h4 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: #2c3e50;
    }

    span {
        display: block;
        margin-top: 0.5rem;
        font-size: 1rem;
        color: #007bff;
        font-weight: 500;
    }
`;

function Board({ boardMembers }: BoardProps) {
    return (
        <Section id="team" className="team">
            <div className="container" data-aos="fade-up">
                <SectionTitle>
                    <h2>Board of Trustees</h2>
                </SectionTitle>

                <div className="row g-4">
                    {boardMembers.map((member, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                        >
                            <MemberCard>
                                <MemberImage>
                                    <img
                                        src={member.imageURL}
                                        alt={member.name}
                                        loading="lazy"
                                    />
                                </MemberImage>
                                <MemberInfo>
                                    <h4>{member.name}</h4>
                                    <span>{member.position}</span>
                                </MemberInfo>
                            </MemberCard>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default Board;