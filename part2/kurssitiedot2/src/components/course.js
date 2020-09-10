import React from 'react'

const Header = ({ course }) => <h2>{course}</h2>

const Part = ({ content }) => <p>{content.name} {content.exercises}</p>

const Content = ({ parts }) => parts.map(course => <Part key={course.id} content={course} />)

const Total = ({ parts }) => {
    const total = parts.reduce((counter, current) => counter + current.exercises, 0)
    return (
        <strong>total of {total} exercises</strong>
    )
}

const Course = ({ course }) => {
    const result = course.map(course =>
        <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>)
    return (
        <div>
            {result}
        </div>
    )
}

export default Course