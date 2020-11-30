import  React, { Component }  from "react";

export default class AddTodo extends Component{
    state = {
        title: ''
    }
    //add title
    titleChange = (e) => {
       this.setState({ [e.target.name]: e.target.value })
    }
    //submit title
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState( {title: ''} )
    }
    render(){
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type='text'
                name='title' 
                style={{flex: '10' , padding: '5px'}}
                value= {this.state.title}
                onChange= {this.titleChange}
                placeholder='Add Todo...'/>

                <input type='submit'
                value='submit...'
                className='btn'
                style={{flex: '1'}}/>
            </form>
            
        )
    }
}