import React, { Component } from 'react';
import './Main.css';

// Form
// import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Make coffee',
      'Drink water',
      'Study',
    ],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>To-Do List</h1>

        <form action="#" className="form">
          <input
            type="text"
            onChange={this.handleChange}
            value={newTask}
          />
          <button type="submit">
            {/* <FaPlus /> */}
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}