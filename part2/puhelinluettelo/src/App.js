import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonsPrint from './components/PersonsPrint'
import personService from './services/PersonService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsFiltered, setPersonsFiltered] = useState([])
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(initial => {
        setPersons(initial)
        setPersonsFiltered(initial)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if (persons.find(person => person.name === newName)) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {

        const id = persons.find(p => p.name === newName).id

        personService
          .changePerson(id, person)
          .then(response => {
            setPersonsFiltered(persons.map(person => person.name !== newName ? person : response))
            setPersons(persons.map(person => person.name !== newName ? person : response))

            setNewName('')
            setNewNumber('')
            event.target.reset()
            handleNotification(`Phonenumber of ${person.name} changed`)

          }).catch(() => {
            setError(true)
            handleNotification(`Information of ${person.name} has already been removed from the server`)
            setPersons(persons.filter(person => person.id !== id))
            setPersonsFiltered(persons.filter(person => person.id !== id))
          })
      }

    } else {
      personService
        .addPersonServer(person)
        .then(response => {
          setPersons(persons.concat(response))
          setPersonsFiltered(persons.concat(response))
        })
      setNewName('')
      setNewNumber('')
      event.target.reset()
      handleNotification(`${person.name} added to the phonebook`)
    }
  }

  const handleNotification = (message) => {
    if (error) {
      setMessage()
      setTimeout(() => {
        setMessage(null)
        setError(false)
      }, 5000)
    }
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAdd = (event) => {
    setNewName(event.target.value)
  }

  const handleFilter = (event) => {
    setPersonsFiltered(persons
      .filter(person => person.name.toLowerCase()
      .includes(event.target.value.toLowerCase())))
    setFilter(event.target.value)
  }

  const handleDelete = (name) => {

    const id = persons.find(p => p.name === name).id

    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setPersonsFiltered(persons.filter(person => person.id !== id))
          handleNotification(`${name} has been deleted from the phonebook`)

        }).catch(() => {
          setError(true)
          handleNotification(`Information of ${name} has already been removed from the server`)
          setPersons(persons.filter(person => person.id !== id))
          setPersonsFiltered(persons.filter(person => person.id !== id))
        })

    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification className='notification' message={message} error={error} />
      <Filter filter={filter} onChange={handleFilter} />
      <Form handleAdd={handleAdd} handleNumber={handleNumber} name={newName} number={newNumber} addPerson={addPerson} />
      <PersonsPrint personsFiltered={personsFiltered} handleDelete={handleDelete} />
    </div>
  )
}

export default App