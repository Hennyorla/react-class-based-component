import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Abiodun Eniola",
        gender:"female",
        bio: "A software engineer with a passion for fashion designing.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer & Fashion Designer"
      },
      shows: false,
      mountedTime: Date.now(),
      intervalId: null
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.forceUpdate(); // Force update to re-render the component and update the time interval
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    const { person, shows, mountedTime } = this.state;
    const timeInterval = Math.floor((Date.now() - mountedTime) / 1000); // Time interval in seconds

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h2>{person.profession}</h2>
          </div>
        )}
        <p>Time since mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}



export default App;
