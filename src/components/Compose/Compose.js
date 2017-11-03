import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer'

class Compose extends Component {
    constructor() {
        super();

        this.state = {
            inputToggle: false,
            postBody: ''
        }
    }

    toggleInput() {
        console.log('toggling input box')
        this.setState({inputToggle: !this.state.inputToggle})
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
        }).then(() => {
            if(this.state.inputToggle) {
                this.toggleInput()
            }
        })
    }

    submit
    render() {
        return (
            <div>

                {
                    (this.state.inputToggle)
                    ? <input className="composing" type="text" onChange={(e) => {this.userInput(e.target.value)}}/>
                    : <div onClick={() => {this.toggleInput()}} className="compose-empty">Enter text here.</div>
                }

                <button onClick={() => {this.submitPost()}}>Send Snip </button>

            </div>
        );
    }
}

export default Compose;