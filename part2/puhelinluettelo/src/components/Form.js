import React from 'react'

const Form = ({addPerson, newName, newNumber, handleAdd, handleNumber}) => {
    return (
        <div>
            <h2>Add a new contact</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input required
                        value={newName}
                        onChange={handleAdd} />
                </div>
                <div>number: <input required
                    value={newNumber}
                    onChange={handleNumber} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Form