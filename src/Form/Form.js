import React, { Component } from 'react';

class Form extends Component {
  state = {
            firstName: '',
            lastName: '',
            bestImpression: '',
    };
 
onNameChange = (event) =>{
    this.setState({
        ...this.state,
        firstName: event.target.value,
    })
}

onLastNameChange = (event) => {
    this.setState({
        ...this.state,
        lastName: event.target.value,
    })
}

onBestChange = (event) => {
    this.setState({
        ...this.state,
        bestImpression: event.target.value,
    })
}
handleSubmit = (event) =>{
    event.preventDefault();
    alert(`Thank you ${this.state.firstName}`)
    this.setState(
        {
            firstName: '',
            lastName: '',
            bestImpression: '',
        }
    )

}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.firstName} type="text"  onChange={this.onNameChange} placeholder="First Name"/>
                <input value={this.state.lastName} type="text"  onChange={this.onLastNameChange} placeholder="Last Name" />
                <input value={this.state.bestImpression} type="text"  onChange={this.onBestChange} placeholder="Best Impression" />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;