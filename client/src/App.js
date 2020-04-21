import React from 'react';

import axios from 'axios';
import Players from './Components/Players';
import GoinDark from './Components/GoinDark';

import "./styles.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      console.log("RESPONSE", res)
      this.setState({
        players: res.data
      })
    })
    .catch(err => {
      console.log("ERROR", err)
    })
  }
  
  render() {
    return (
      <div>
        <GoinDark />
        <Players players={this.state.players} />
      </div>
    )
  }
}

export default App;
