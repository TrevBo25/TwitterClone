import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer'

class Compose extends Component {
    constructor() {
        super();

        this.state = {
            postBody: ''
        }
    }



    userInput(input) {
        console.log('input: ', input)
        this.setState({postBody: input })
    }

    submitPost() {
        var post = {guts: this.state.postBody, user_id: 25}
        axios.post('/api/createpost', post).then((response) => {
        console.log(response)
        }).then(() => {
            console.log('second one')
            this.props.getPosts();
        })
    }

    submit
    render() {
        return (
            <div>

                <input type="" onChange={(e) => {this.userInput(e.target.value)}}/>
                <button onClick={() => {this.submitPost()}}>Send Snip </button>

            </div>
        );
    }
}

export default Compose;