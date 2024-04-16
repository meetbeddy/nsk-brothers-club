
import PageWrapper from '../PageWrapper'
import data from '../../../data'
import ResourceCard from './ResourceCard'
import "./resources.css"

function Resouces() {
    return (
        <PageWrapper>
            <section className="resources">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Resources</h2>

                    </div>
                    <div className="row gy-4" />
                    {
                        data.resources.map((resource) => {
                            return <ResourceCard icon={resource.icon} title={resource.title} description={resource.description} downloadlink={resource.downloadlink} />
                        })
                    }

                </div></section>

        </PageWrapper>
    )
}

export default Resouces
