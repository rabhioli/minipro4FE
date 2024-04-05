import React, { Component } from 'react'
import './App.css';

const tasks = [


]





class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      ViewCompleted: false,
      taskList: tasks,
    };
  }

  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          completed
            </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incompleted
            </span>
      </div>
    );
  };
// Main variable to render items on the screen
renderItems = () => {
  const { viewCompleted } = this.state;
  const newItems = this.state.taskList.filter(
    item => item.completed === viewCompleted
  );
  return newItems.map(item => (
    <li
      key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span
        className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
          }`}
        title={item.description}
      >
        {item.title}
      </span>
      <span>
        <button
          onClick={() => this.editItem(item)}
          className="btn btn-secondary mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => this.handleDelete(item)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </span>
    </li>
  ));
};


}





export default App;
