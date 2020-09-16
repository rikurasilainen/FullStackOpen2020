import React, { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonsPrint from './components/PersonsPrint'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsFiltered, setPersonsFiltered] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if (persons.find(person => person.name === newName)) {
      window.alert(`${newName} is already in the phonebook`)
    } else {
      setPersons(persons.concat(person))
      setPersonsFiltered(persons.concat(person))
      setNewName('')
      setNewNumber('')
      event.target.reset()
    }
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAdd = (event) => {
    setNewName(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
    setPersonsFiltered(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilter} />
      <h2>Add a new contact</h2>
      <Form handleAdd={handleAdd} handleNumber={handleNumber} name={newName} number={newNumber} addPerson={addPerson} />
      <PersonsPrint personsFiltered={personsFiltered} />
    </div>
  )
}

export default App