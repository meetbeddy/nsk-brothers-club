
import About from './about/About'
import Board from './board/Board'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'

import data from "../data"
import Contact from './contact/Contact'
import Mission from './mission/Mission'
import Gallery from './gallery/Gallery'
// import SliderHero from './hero/SliderHero'

function Index() {

    return (
        <div>
            <Header />
            <Hero />
            {/* <SliderHero /> */}
            <main id="main">
                <About />
                <Mission />
                <Board boardMembers={data.boardOfTrustees} />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Index
