import React, { Component } from 'react';
import './../src/App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://images.unsplash.com/photo-1601863149152-953e1c7453eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
        profession: 'Web Developer',
      },
      show: false,
      mountedTime: new Date(),
    };

    // Initialize the interval as an instance variable
    this.interval = null;
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    // Set up an interval to update the mountedTime every second
    this.interval = setInterval(() => {
      this.setState({
        mountedTime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted to prevent memory leaks
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile} className='toggle'>
          Toggle Profile
        </button>
        {show && (
          <div className="profile">
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Component Mounted at: {mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
