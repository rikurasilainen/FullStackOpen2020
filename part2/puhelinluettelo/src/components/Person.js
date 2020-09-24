import React from 'react'

const Person = ({name, number, handleDelete}) => <li>{name} {number} <button onClick={() => handleDelete(name)}>delete</button></li>

export default Person