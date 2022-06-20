import React, { Component } from 'react'

export default class Todo extends Component {
    getStyle = ()=>{
        return{
        textDecoration : this.props.todo.isDone ? "line-through" : "none",
        background:"#f6f6f6",
        color:"black",
        border:"1px black solid",
        margin :"10px 20rem"
    }
    }
  render() {
    const {title,id} = this.props.todo;
    // console.log("props : ",this.props.done)
    // console.log("id :",id)
    // console.log("bind : ",this.props.done.bind(this,id))
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" style={{width:'18px',height:"20px"}} onChange={this.props.done.bind(this,id)} />
            {title}
            <button onClick={this.props.delTodo.bind(this,id)} style={{background:'red' , float:"right" , height :" 25px", margin:"10px 10px"}}>X</button>
        </p>
      </div>
    )
  }
}
