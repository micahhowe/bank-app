import React, {Component} from 'react'
import './Landing.css'

export default class Landing extends Component {
    state = {
        username: '',
        email: '',
        password: ''
      }
  render() {
    return (
      <div className="Landing">
        Landing
      </div>
    )
  }
}