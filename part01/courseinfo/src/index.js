import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({course}) => <h1>{course.name}</h1>

const Content = ({part}) => <p>Part: {part.name}, Exercises: {part.exercises}</p>

const Total = ({part01, part02, part03}) => <p> Number of exercises: {part01.exercises + part02.exercises + part03.exercises} </p>

const App = () => {
    const course = {
      name: 'Half stack application development',
      parts: [
        {
         name: 'Fundamentals of React',
         exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of component',
          exercises: 14
        }
      ]
    }
    return(
      <div>
        <Header course={course}/>
        <Content part={course.parts[0]}/>
        <Content part={course.parts[1]}/>
        <Content part={course.parts[2]}/>
        <Total part01={course.parts[0]} part02={course.parts[1]} part03={course.parts[2]}/>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))