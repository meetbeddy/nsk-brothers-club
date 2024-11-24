
import PageWrapper from '../PageWrapper';
import data from '../../../data';
import styled from 'styled-components';

const MemberCard = styled.div`
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 25px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    height: 100%;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    overflow: hidden;

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
        background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
        pointer-events: none;
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

const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.25rem;
        color: #007bff;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 600;
    }
`;

function BoardMembers() {
    return (
        <PageWrapper>
            <section className="container mt-5">
                <div className="container" data-aos="fade-up">
                    <SectionTitle>
                        <h2>2024</h2>
                        <p>BOARD OF TRUSTEES</p>
                    </SectionTitle>

                    <div className="row g-4">
                        {data.boardOfTrustees.map((member, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                            >
                                <MemberCard>
                                    <ImageContainer>
                                        <img
                                            src={member.imageURL}
                                            alt={member.name}
                                            loading="lazy"
                                        />
                                    </ImageContainer>
                                    <MemberInfo>
                                        <h4>{member.name}</h4>
                                        <span>{member.position}</span>
                                    </MemberInfo>
                                </MemberCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}

export default BoardMembers;