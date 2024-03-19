
import About from './about/About'
import Board from './board/Board'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'

import data from "../data"

function Index() {

    return (
        <div>
            <Header />
            <Hero />
            <main id="main">
                <About />
                <Board boardMembers={data.boardOfTrustees} />
            </main>
            <Footer />
        </div>
    )
}

export default Index
