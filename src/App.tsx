import { useState } from 'react'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Main />
        </>
    )
}

export default App
