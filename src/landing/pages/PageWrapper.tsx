import React, { ReactNode } from "react";
import Header from "../header/Header";

interface PageWrapperProps {
    children: ReactNode;
}

function PageWrapper(props: PageWrapperProps) {
    return (
        <div>
            <Header />
            <main id="main">
                <section className="inner-page">
                    <div className="container" data-aos="fade-up">
                        {props.children}
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default PageWrapper;
