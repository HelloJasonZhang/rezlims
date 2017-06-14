import React from 'react'
import * as rtService from '../../services/rt'
import List from './List'

export default class RequestPage extends React.Component {
  constructor (props) {
    super(props)

    rtService.query().then((data) => {
      console.log(data[0])
    })

    this.state = {
      currntRequest: 'test',
    }
  }
  render () {
    const { currntRequest } = this.state
    return (
      <div >
        Hello, {currntRequest}!
        <List />
      </div>
    )
  }
}
