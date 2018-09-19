import React from 'react'


export default class Form extends React.Component {
    state = {
      firstName: "John",
      lastName: "Henry"
    }

    handleFirstNameChange = (event) =>{
        this.setState({
            firstName: event.target.value
        }), console.log(this.state.firstName)
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
      return (
        <form>
            <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
            <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        </form>
      )
    }
  }