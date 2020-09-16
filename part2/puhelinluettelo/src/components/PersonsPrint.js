import React from 'react'
import Person from './Person'

const PersonsPrint = ({personsFiltered}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {personsFiltered.map((person) =>
                    <Person key={person.name} name={person.name} number={person.number} />
                )}
            </ul>
        </div>
    )
}

export default PersonsPrint