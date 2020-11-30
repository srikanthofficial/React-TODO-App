import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

    isCompleted = () => {

        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

    }
    // markComplete=(e) => {
    //     console.log(this.props);
    //     console.log(e);
    // }
    render() {
        const { id,title } =  this.props.todo;
     //   console.log(this.props.todo);
        return (<div style={this.isCompleted()}>
            <p>
            <input type='checkbox' onChange={this.props.markComplete.bind
                (this, id) }/> {' '}
            { title } 
            <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
            </p>
        </div>
        )

    }
}

// TodoItem.PropTypes = {
//     todo: PropTypes.array.isRequired
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'radius',
    padding: '5px 9px',
    borderRadius: '50px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
