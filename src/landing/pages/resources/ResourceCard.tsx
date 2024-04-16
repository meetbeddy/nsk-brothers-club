import React from 'react';

interface ResourceCardProps {
    icon: string;
    title: string;
    description: string;
    downloadlink: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, downloadlink }) => {
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="resource-item position-relative">
                <div className="icon">
                    <i className={icon} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={downloadlink} download className="readmore stretched-link">Download <i className="bi bi-arrow-right" /></a>
            </div>
        </div>
    );
};

export default ResourceCard;
