import React from 'react'

const Form = ({ onChange }) => {
    return (
        <form>
            Find countries <input onChange={onChange} />
        </form>
    )
}

export default Form