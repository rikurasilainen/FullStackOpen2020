import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
<button onClick={props.handleClick}>{props.text}</button>
)

const Good = props => <div>good {props.good}</div>
const Neutral = props => <div>neutral {props.neutral}</div>
const Bad = props => <div>bad {props.bad}</div>


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button handleClick={() => setBad(bad + 1)} text="bad"></Button>
      <h1>statistics</h1>
      <Good good={good}></Good>
      <Neutral neutral={neutral}></Neutral>
      <Bad bad={bad}></Bad>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)