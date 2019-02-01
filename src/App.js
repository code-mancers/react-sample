import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      url: ""
    };
  }

  changeText(text) {
    this.setState({
      text
    });
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      url: e.target.value
    });
  }

  getText(e) {
    e.preventDefault();
    axios
      .get(this.state.url)
      .then(response => {
        // handle success
        this.changeText(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">URL (type /api)</label>
          <input
            onChange={e => this.onChange(e)}
            type="text"
            className="form-control"
            id="url"
            placeholder="URL"
          />
        </div>
        <button className="btn btn-primary" onClick={e => this.getText(e)}>
          Display random response by 'GET'ing this url
        </button>
        <br />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
