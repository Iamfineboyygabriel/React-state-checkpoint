import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Son Of God',
        bio: 'A being passionate about data',
        imgSrc: 'https://images.unsplash.com/photo-1601863149152-953e1c7453eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
        profession: 'Machine learning Engineer',
      },
      show: true,
      timeInterval: new Date(),
    };
  }

  componentDidMount() {
    // Capture the moment when the component was mounted
    this.setState({
      timeInterval: new Date(),
    });
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className='app'>
        <h1>My Profile</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div className='card'>
            <h2>{fullName}</h2>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
            <img src={imgSrc} alt={fullName} />
          </div>
        )}

        <p>Time since mount: {timeInterval.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;