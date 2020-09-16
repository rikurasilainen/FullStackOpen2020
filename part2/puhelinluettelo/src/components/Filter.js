import React from 'react'

const Filter = ({ onChange, filter }) => {
    return (
        <form>
            Filter shown with <input
                onChange={onChange}
                filter={filter}
            />
        </form>
    )
}

export default Filter