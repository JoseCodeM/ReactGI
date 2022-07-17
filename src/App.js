import React, { Component } from 'react'
import './App.css'
import NewInfo from './components/newinfo';
import './Description.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          FullName: 'SpongeBob Square Pants',
          Number: '1-800-000-0000',
          BirthDate: 'August 29th 1997',
          Job: 'Cook'
        },
        {
          FullName: 'Sandy Cheels',
          Number: '1-800-000-0000',
          BirthDate: 'August 10th 1997',
          Job: 'Martial Artist'
        },
        {
          FullName: 'Patrick Star',
          Number: '01/01/1990',
          BirthDate: 'July 29 1990',
          Job: 'He a bum'
        }]
    }
  }

  render() {
    const { people } = this.state

    return (
        <div>
          {people.map((person) => {
            return (
              <NewInfo content={person} />
            )
          })}
        </div>
    )
  }
}