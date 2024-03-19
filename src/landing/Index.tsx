
import About from './about/About'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'

function Index() {
    return (
        <div>
            <Header />
            <Hero />
            <main id="main">
                <About />
            </main>
            <Footer />
        </div>
    )
}

export default Index
