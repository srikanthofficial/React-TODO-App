import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';
import About from './pages/About';
import Header from './layout/header';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

class App extends Component {
  constructor() { super() }

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => {
      console.log(res.data);
      this.setState({ todos: res.data })
    });
  }

  //mark line if complete equal to true
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //delete Todo
  delTodo = (id) => {
    console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>
   this.setState({ todos: [...this.state.todos.filter(todo =>
        todo.id !== id)]
    }) )
    
  }

  //add todo to todolist
  addTodo = (title) => {
    console.log(title);
    // const newTodo = {
    //   id: 4,
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] })
    // console.log(this.state.todos);
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({
      todos:
        [...this.state.todos, res.data]
    })
    )
  }

  //test
   handleAddrTypeChange = (e) =>  console.log(this.state.todos[e.target.value]);

  render() {
    return (
      
      <Router>
        <div>
        <select
             onChange={(e) => this.handleAddrTypeChange(e)}

            // onClick={() => {
            //   editRow(users);
            // }}
          >
            {this.state.todos.map((obj) => {
              return <option value={obj.id}>{obj.title}</option>;
            })}
          </select>
        </div>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo}></Todos>
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
