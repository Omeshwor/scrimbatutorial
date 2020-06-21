import React, { Component } from 'react'

class TimeofDay extends Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeofDay 

    if (hours < 12) {
      timeofDay = "Morning"
    }
    else if (hours >= 12 && hours < 17){
      timeofDay = "Afternoon"
    }
    else {
      timeofDay = "evening"
    }

    return (
      <h1 style={{color: "red", backgroundColor: "blue"}}>Good { timeofDay } !</h1>
    )
  }
}

export default TimeofDay;