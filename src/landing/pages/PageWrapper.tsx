import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface PageWrapperProps {
    children: ReactNode;
    withFooter?: boolean
}

function PageWrapper({ children, withFooter = true }: PageWrapperProps) {
    return (
        <div>
            <Header />
            <main id="main">
                <section className="inner-page">
                    <div className="container" data-aos="fade-up">
                        {children}
                    </div>
                </section>
            </main>
            {withFooter && <Footer />}
        </div>
    );
}

export default PageWrapper;
