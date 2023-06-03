import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  constructor(){
    super()

    this.state={
      count: 0
    }

  }

  Clickme=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>This is pure componet count <span id='mac2'>{this.state.count} </span></h1>
        <button onClick={()=>{
          this.Clickme()
        }} className='btn'>Hit Me</button>
      </div>
    )
  }
}
