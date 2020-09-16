import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div >
                name: <input required
                    value={props.newName}
                    onChange={props.handleAdd} />
            </div>
            <div>number: <input required
                value={props.newNumber}
                onChange={props.handleNumber} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form