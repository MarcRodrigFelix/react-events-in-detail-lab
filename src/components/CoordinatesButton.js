import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  handleMouseCoordinates = (event) => {
    const mouseCoords = [ event.clientX, event.clientY ]

    return this.props.onReceiveCoordinates(mouseCoords)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleMouseCoordinates}>Click</button>        
      </div>
    )
  }
}