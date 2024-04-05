import React, { Component } from 'react';
import './App.css';

const tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false },
  { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: true },
  { id: 3, title: 'Task 3', description: 'Description for Task 3', completed: false },
  { id: 4, title: 'Task 4', description: 'Description for Task 4', completed: true },
  { id: 5, title: 'Task 5', description: 'Description for Task 5', completed: false }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: tasks,
    };
  }

  displayCompleted = (status) => {
    this.setState({ viewCompleted: status });
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? 'active' : ''}
        >
          Completed
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? '' : 'active'}
        >
          Incompleted
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed == viewCompleted
    );

    return newItems.map((item) => ( 
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">

      <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
       title={item.title}>
        {item.title}
       </span>
      <span>
        <button className="btn btn-info mr-2">Edit</button>
        <button className="btn btn-danger mr-2">delete</button>
      </span>
      </li>
    
    ));
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <button className="btn btn-warning">Add task</button>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">{this.renderItems()}</ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
