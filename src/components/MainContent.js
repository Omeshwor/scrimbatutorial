import React from 'react'
import TodoItem from './TodoItem'

import todosData from './todosData'

class MainContent extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
        
      }
    })
  }

  render() {
    const todoComponent = this.state.todos.map(item => {
      return (
        <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
      )
    })
    return(
      <div>
        {todoComponent}
      </div>
    )
  }
}

export default MainContent