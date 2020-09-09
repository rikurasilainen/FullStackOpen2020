import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [values, setValues] = useState(new Uint8Array(anecdotes.length))

  const voteClick = () => {
    const newValues = [...values]
    newValues[selected] += 1
    setValues(newValues)
  }

  return (
    <div>
      <Header txt='Anecdote of the day'></Header>
      {props.anecdotes[selected]}
      <br></br>
      <>has {values[selected]} votes</>
      <br></br>
      <Button handleClick={() => voteClick()} txt='vote'></Button>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} txt='next anecdote'></Button>
      <Header txt='Anecdote with the most votes'></Header>
      <HighestVoted values={values} anecdotes={anecdotes}></HighestVoted>
    </div>
  )
}

const Button = (props) => (<button onClick={props.handleClick}>{props.txt}</button>)
const Header = (props) =>(<h1>{props.txt}</h1>)
const HighestVoted = ({anecdotes , values}) => {
  if (values.every(value=> value === 0)) {
    return (
      <div>Vote for an anectdote to see something here.</div>
    )
  }

  return (
    <div>
      <p>{anecdotes[values.indexOf(Math.max(...values))]}<br></br>has {values[values.indexOf(Math.max(...values))]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)