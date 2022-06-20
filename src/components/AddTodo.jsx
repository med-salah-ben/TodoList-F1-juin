import React, { Component } from 'react'

export default class AddTodo extends Component {
    state={
        title:"",
    }
    onChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title:""})
    }
  render() {
    return (
      <div  style={{margin :"10px 20rem"}}>
        <form onSubmit={this.onSubmit}>
            <input style={{width:'412px'}} type="text" placeholder='add todo...' name='title' value={this.state.title} onChange={this.onChange} />
            <button type='submit'>add todo</button>
        </form>
      </div>
    )
  }
}
