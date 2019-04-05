import React, { Component } from 'react';
import axios from 'axios'
import Friends from './Friends'
import { withRouter, Route, NavLink } from 'react-router-dom'
import AddFriend from './AddFriend'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: []
    }
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data })
            console.log(response.data)
        })
        .catch(error => {
            // console.log('hi bitch')
        })
        // console.log('done')
  }

  addFriend = newFriend => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({ friends: response.data });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    console.log(id)
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then( response => {
        this.setState({ friends: response.data })
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    const headline = {
      textDecoration: 'underline',
      width: '60%',
      margin: '16px auto',
      border: '1px solid black',
      borderRadius: '3px',
      background: 'gray',
      color: '#FFE135',
      boxShadow: '5px 5px 5px #D2D2D2',
    }

    const navStyle = {
      textDecoration: 'none',
      fontSize: '25px',
      margin: '16px auto',
      border: '1px solid black',
      borderRadius: '3px',
      background: 'gray',
      color: '#FFE135',
      width: '60%',
      boxShadow: '5px 5px 5px #D2D2D2',
      display: 'flex',
      justifyContent: 'center'
    }


    return (
      <div className="App">
        <h1 style={headline}>Welcome to the Friends List</h1>
        
        <nav >
          <NavLink style={navStyle} exact to='/'>Home</NavLink>
          
          <NavLink style={navStyle} exact to='add-friend'>Add Friend</NavLink>
        </nav>

        <Route path='/add-friend' render={( props ) => <AddFriend {...props} addFriend={this.addFriend} btnStyle={this.btnStyle} />} />

        <Route exact path='/' render={(props) => <Friends {...props} friends={this.state.friends} deleteFriend={this.deleteFriend} />} />
      </div>
    );
  }
}

export default withRouter(App)

