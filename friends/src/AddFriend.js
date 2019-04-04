import React, { Component } from 'react'

class AddFriend extends Component {
    constructor() {
        super();
        this.state = {
            friends: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    changeHandler = event => {
        event.persist();
        let value = event.target.value;
        if (event.target.name === 'age') {
            value = parseInt(value, 10)
        }

        this.setState(prevState => ({
            friends: {
                ...prevState.friends,
                [event.target.name]: value
            }
        }))
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addFriend(this.state.friends);

        this.setState({
            friends: {
                name: '',
                age: '',
                email: ''
            }
        })
    }



  render() {
    const style = {
        border: '1px solid black',
        width: '60%',
        boxShadow: '5px 5px 5px #D2D2D2',
        margin: '16px auto',
        borderRadius: '3px',
        background: 'gray',
        color: '#FFE135',
        display: 'block',
        flexDirection: 'column'
    }

    const inputStyle = {
        width: '50%',
        borderRadius: '6px',
        textAlign: 'center',
        margin: '8px auto',
        border: '1px solid gray',
        boxShadow: '1px 1px 1px #D2D2D2',
    }

    const btnStyle = {
        width: '35%',
        height: '30px',
        margin: '8px auto',
        borderRadius: '6px',
        boxShadow: '1px 1px 1px #D2D2D2'
    }

    return (
      <div style={style} >
        <form onSubmit={this.handleSubmit}>
            <input 
                style={inputStyle}
                type='text'
                name="name"
                onChange={this.changeHandler}
                placeholder="Name"
                value={this.state.name}
                />
                <br/>
            <input 
                style={inputStyle}
                type='text'
                name="age"
                onChange={this.changeHandler}
                placeholder="Age"
                value={this.state.age}
                />
                <br/>
            <input
                style={inputStyle} 
                type='text'
                name="email"
                onChange={this.changeHandler}
                placeholder="E-mail"
                value={this.state.email}
                />
                <br/>
            <button style={btnStyle}>Add Friend</button>
        </form>
      </div>
    )
  }
}

export default AddFriend