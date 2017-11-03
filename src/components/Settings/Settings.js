class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            New Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Current Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
           <label>
            New Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Current Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            New Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );