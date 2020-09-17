import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Form from './components/Form'
import CountryWithData from './components/CountryWithData'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState(countries)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
    setFiltered(countries.filter(country => country.name.toLowerCase()
    .includes(event.target.value.toLowerCase())))
  }

  const filterCountries = () => {
    if (filter.length === 0) {
      return (
        <p></p>
      )
    }
    if (filtered.length > 10) {
      return (
        <p>too many matches, specify another filter</p>
      )
    } else if (filtered.length === 0) {
      return (
        <p>nothing found</p>
      )

    } else if (filtered.length === 1) {
      const country = filtered[0]
      return (
        <div>
          <CountryWithData
            name={country.name}
            capital={country.capital}
            population={country.population}
            languages={country.languages}
            flag={country.flag} />
        </div>
      )
    } else {
      return (
        <div>
          <ul>
            {filtered.map((country) =>
              <li key={country.name}>
                {country.name} <button onClick = {() => setFiltered([country])}>show</button>
              </li>
            )}
          </ul>
        </div>
      )
    }
  }

  return (
    <div>
      <Form onChange={handleFilter} filter={filter} />
      {filterCountries()}
    </div>
  )
}

export default App;
