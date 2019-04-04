import React from 'react';
import axios from 'axios'

class Friends extends React.Component {
    constructor() {
        super();
        this.state = ({
            friends: []
        })
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.friends })
                console.log(response)
            })
            .catch(error => {
                console.log('hi bitch')
            })
            console.log('done')
    }

    render() {
        return (
            <p>Hello</p>
        )
    }
}

export default Friends