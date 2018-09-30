import React from 'react'

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    message: ''
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
  render () {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
           First Name
        <input
          type='text'
          name='firstName'
          value={this.state.firstName}
          onChange={event => this.handleFirstNameChange(event)}
        />
        </label>
        </div>
        <div>
       <label>
         Last Name
        <input
          type='text'
          name='lastName'
          value={this.state.lastName}
          onChange={event => this.handleLastNameChange(event)}
        />
        </label>

        </div>
        <div>

       
        <label>
          Message:
        <input
          type='text'
          message={this.state.value}
          onChange={this.handleChange}
        />
        </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    )
  }
}

export default ControlledInput
