import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

 class App extends Component {
  constructor(){
    super()
    this.state = {
      todos:[
        {
          id:1,
          title:"hello world!!!",
          isDone:false
        },
        {
          id:2,
          title:"My list of task!!!",
          isDone:false
        },
        {
          id:3,
          title:"watch workshop now",
          isDone:false
        },
      ]
    }
    
  }

  done = (id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.isDone =! todo.isDone
      }return todo
    })})
  }

  delTodo = (id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>
      todo.id !== id)]})
  }

  addTodo = (title)=>{
    const newTodo = {
      id:Math.random(),
      title:title,
      isDone:false
    }
    this.setState({todos:[...this.state.todos,newTodo]})
  }
  render() {
    return (
      <div>
        <AddTodo  addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} done={this.done} delTodo={this.delTodo} />
      </div>
    )
  }
}



export default App