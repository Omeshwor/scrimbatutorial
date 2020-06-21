import React, {Component} from 'react'

class Conditional extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    return(
      <div>
        {this.state.isLoading?
          <h1>Loading ... </h1> :
          <Condition />}
      </div>
    )
  }
}

function Condition(props){
  return <h1>Some Cool Stuff about conditional rendering</h1>
}

export default Conditional;