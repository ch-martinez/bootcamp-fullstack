import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const INITIAL_STASTICS = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0
}

const App = () => {
  const [statistics, setStatistics] = useState(INITIAL_STASTICS)

  const setGoodFeedback = () => {
    setStatistics({
      ...statistics,
      good: statistics.good + 1,
      total: statistics.total + 1
    })
  }

  const setNeutralFeedback = () => {
    setStatistics({
      ...statistics,
      neutral: statistics.neutral + 1,
      total: statistics.total + 1
    })
  }

  const setBadFeedback = () => {
    setStatistics({
      ...statistics,
      bad: statistics.bad + 1,
      total: statistics.total + 1
    })
  }

  const average = () => ((statistics.good - statistics.bad) / statistics.total) * 10

  const porcentaje = () => (statistics.good * 100) / statistics.total

  const Button = ({action, text}) => <button onClick={action}>{text}</button>

  const DisplayStatistics = ({statistics}) => {
    if (statistics.total === 0) {      
      return(
        <>
          <h1>Stastics</h1>
          <p>No feedback given</p>
        </>
      )
    } else {
      return(
        <>
          <h1>Stastics</h1>
          
          <table>
            <tbody>
              <tr>
                <td>Good:</td>
                <td>{statistics.good}</td>
              </tr>

              <tr>
                <td>Neutral:</td>
                <td>{statistics.neutral}</td>
              </tr>

              <tr>
                <td>Bad:</td>
                <td>{statistics.bad}</td>
              </tr>

              <hr></hr>
              
              <tr>
                <td>Total:</td>
                <td>{statistics.total}</td>
              </tr>

              <tr>
                <td>Average:</td>
                <td>{average()}</td>
              </tr>

              <tr>
                <td>Positive:</td>
                <td>{porcentaje()}</td>
              </tr>
            </tbody>
          </table>
        </>
      )  
    }
    
  }

  return(
    <div>
      <h1>Give us feedback</h1>
      <Button action={setGoodFeedback} text={'Good'}/>
      <Button action={setNeutralFeedback} text={'Neutral'}/>
      <Button action={setBadFeedback} text={'Bad'}/>
      <DisplayStatistics statistics={statistics}/>
    </div>
  )
}

ReactDOM.render(<App/> , document.getElementById('root'))
