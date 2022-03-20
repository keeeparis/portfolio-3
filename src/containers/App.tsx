import Header from './Header'
import Intro from './Intro'
import Introduce from './Introduce'
import Statistics from './Statistics'
import Articles from './Articles'
import MobileApp from './Mobile-App'
import Footer from './Footer'

import { Main } from './styles'

function App() {
    return (
        <>
            <Header />
            <Main>
                <Intro />
                <Introduce />
                <Statistics />
                <Articles />
                <MobileApp />
                <Footer />
            </Main>
        </>
    )
}

export default App
