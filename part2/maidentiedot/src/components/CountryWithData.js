import React from 'react'
import Weather from './Weather'

const CountryWithData = ({ name, capital, population, languages, flag }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>capital {capital}<br></br>population {population}</p>
            <h2>languages</h2>
            <ul>
                {languages.map(language => {
                    return (
                        <li key={language.name}>{language.name}</li>
                    )
                })}
            </ul>
            <img src={flag} alt='flag' width='120px'></img>
            <Weather capital={capital} />
        </div>
    )
}

export default CountryWithData