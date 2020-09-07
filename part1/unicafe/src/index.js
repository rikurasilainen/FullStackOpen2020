import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (<button onClick={props.handleClick}>{props.txt}</button>)

const Stat = ({ txt, val }) => {
  return (
    <tr>
      <td>{txt}</td>
      <td>{val}</td>
    </tr>)
}

const Statistics = ({ good, bad, neutral }) => {

  const all = good + bad + neutral
  const average = ((good * 1) + (bad * -1) + (neutral * 0)) / all
  const positive = Math.round(100 * good) / (good + bad + neutral) + ' %'

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <Stat txt='good' val={good}></Stat>
          <Stat txt='neutral' val={neutral}></Stat>
          <Stat txt='bad' val={bad}></Stat>
          <Stat txt='all' val={all}></Stat>
          <Stat txt='average' val={average}></Stat>
          <Stat txt='positive' val={positive}></Stat>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} txt='good'></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} txt='neutral'></Button>
      <Button handleClick={() => setBad(bad + 1)} txt='bad'></Button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)