import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleClickEvent = (event) => {
    event.persist()
    return setTimeout( () => this.props.onDelayedClick(event), this.props.delay)
  }


  render() {

    return (
      <div>
        <button onClick={this.handleClickEvent} >Click</button>
      </div>
    )
  }
}
