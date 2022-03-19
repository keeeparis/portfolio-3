import * as M from './styles'
import Intro from '../Intro/Intro'
import Introduce from '../Introduce/Introduce'
import Statistics from '../Statistics/Statistics'
import Articles from '../Articles/Articles'
import MobileApp from '../Mobile-App/MobileApp'
import Footer from '../Footer/Footer'

const Main = () => {
    return (
        <M.Main>
            <Intro />
            <Introduce />
            <Statistics />
            <Articles />
            <MobileApp />
            <Footer />
        </M.Main>
    )
}

export default Main