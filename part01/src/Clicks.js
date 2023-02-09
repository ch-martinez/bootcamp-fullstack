import { useState } from "react"
import './index.css';

const INITIAL_VALUE = {
    left: 0,
    right: 0
}

const App = () =>{
    const [clicks, setClicks] = useState(INITIAL_VALUE)

    const [total, setTotal] = useState([])

    const setLeftClick = () => {
        setClicks({
            ...clicks,
            left: clicks.left+1
        })
        setTotal(total.concat('L'))
    }
    const setRightClick = () => {
        setClicks({
            ...clicks,
            right: clicks.right+1
        })
        setTotal(total.concat('R'))
    }

    const resetClicks = () => {
        setClicks(INITIAL_VALUE)
        setTotal([])
    }

    const DisplayClicks = ({clicks, total}) => {
        return(
        <>
            <span>LEFT: {clicks.left}</span>
            <span>RIGHT: {clicks.right}</span>
            <span>TOTAL: {total.length}</span>
            <p className="array">ARRAY: {total}</p>
        </>
        )
    }

    const Button = ({action, text}) => {
        return(
            <button onClick={action}> {text} </button>
        )
    }

    return(
        <div className="container">
            <DisplayClicks clicks={clicks} total={total}/>
            <Button action={setRightClick} text={'Right'}/>
            <Button action={setLeftClick} text={'Left'}/>
            <Button action={resetClicks} text={'Reset'}/>
        </div>
    )
}

export default App;
