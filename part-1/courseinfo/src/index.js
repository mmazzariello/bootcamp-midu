import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => <h1>{course}</h1>;
const Total = (props) => {
  <div>
    <p>
      {" "}
      {props.exercises1} + {props.exercises2} + {props.exercises3}
    </p>
  </div>;
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>

      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const [counter, setCounter] = React.useState(0);
  const [numberCounter, setNumberCounter] = React.useState(0);

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      <button
        onClick={() => {
          setCounter(counter - 1);
          setNumberCounter(numberCounter + 1);
        }}
      >
        Decrement
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setNumberCounter(numberCounter + 1);
        }}
      >
        {" "}
        Increment
      </button>
      <p>Count counter: {numberCounter}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
