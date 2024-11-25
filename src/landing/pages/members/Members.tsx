import { useState } from 'react';
import PageWrapper from '../PageWrapper';
import data from '../../../data';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { Member } from '../../../type';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';


const MemberCard = styled.div`
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

const MemberImageContainer = styled.div`
    width: 160px;
    height: 160px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
        border-color: #007bff;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.1);
    }
`;

const ProfileImageContainer = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContactButton = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 20px;
    background-color: #f8f9fa;
    color: #495057;
    text-decoration: none;
    transition: all 0.2s ease;
    margin-bottom: 8px;

    &:hover {
        background-color: #007bff;
        color: white;
        transform: translateX(5px);
    }
`;

const MemberName = styled.p`
    font-weight: 500;
    margin: 1rem 0 0.5rem;
    text-align: center;
    color: #2c3e50;
    transition: color 0.2s ease;

    &:hover {
        color: #007bff;
    }
`;

const Members = () => {
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenModal = (member: Member) => {
        setIsLoading(true);
        setSelectedMember(member);
        // Simulate loading of additional member details
        setTimeout(() => setIsLoading(false), 500);
    };

    const handleCloseModal = () => {
        setSelectedMember(null);
    };

    const renderContactInfo = (member: Member) => (
        <div className="mt-4">
            {member.email && (
                <ContactButton href={`mailto:${member.email}`}>
                    <EnvelopeFill size={16} />
                    <span>{member.email}</span>
                </ContactButton>
            )}
            {member.phone && (
                <ContactButton href={`tel:${member.phone}`}>
                    <TelephoneFill size={16} />
                    <span>{member.phone}</span>
                </ContactButton>
            )}
        </div>
    );

    return (
        <PageWrapper>
            <section className="container mt-3">
                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center mb-5">
                        <h2>Members</h2>
                        <p className="text-muted mt-2">Meet our esteemed members</p>
                    </div>
                    <div className="row d-flex flex-wrap justify-content-center align-items-stretch g-4">
                        {data.members.map((member, index) => (
                            <div className="col-lg-2 col-md-3 col-sm-4" key={index}>
                                <MemberCard>
                                    <div className="d-flex flex-column align-items-center">
                                        <MemberImageContainer
                                            onClick={() => handleOpenModal(member as Member)}
                                            role="button"
                                            aria-label={`View ${member.name}'s profile`}
                                        >
                                            <img
                                                src={member.imageURL}
                                                alt={member.name}
                                                className="rounded-circle"
                                                loading="lazy"
                                            />
                                        </MemberImageContainer>
                                        <MemberName>{member.name}</MemberName>
                                    </div>
                                </MemberCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Modal
                show={!!selectedMember}
                onHide={handleCloseModal}
                centered
                size="lg"
                className="member-modal"
            >
                {selectedMember && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title className="fw-bold">{selectedMember.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="p-4">
                            {isLoading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="row g-4">
                                    <div className="col-md-5 text-center">
                                        <ProfileImageContainer>
                                            <img
                                                src={selectedMember.imageURL}
                                                alt={selectedMember.name}
                                                className="rounded-circle"
                                            />
                                        </ProfileImageContainer>
                                        {renderContactInfo(selectedMember)}
                                    </div>
                                    <div className="col-md-7">
                                        {selectedMember.bio && (
                                            <div className="mb-4">
                                                <h5 className="fw-bold mb-3">About</h5>
                                                <p className="text-muted">{selectedMember.bio}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                    </>
                )}
            </Modal>
        </PageWrapper>
    );
};

export default Members;