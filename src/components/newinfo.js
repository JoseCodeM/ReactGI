import React, { Component } from 'react'

class NewInfo extends Component {

  render() {

    const { FullName, Number, BirthDate, Job} = this.props.content

    return (
        <div className='Container'>
          <ul className='info'>
          <h2>{FullName}</h2>
            <li>Number: {Number} </li>
            <li>BirthDate: {BirthDate} </li>
            <li>Job: {Job} </li>
          </ul>

        </div >)
  }
}

export default NewInfo