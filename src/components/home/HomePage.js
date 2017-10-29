import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>plural sight adminstrator</h1>
        <p>react redux and react router in es6</p>
        <Link to="about" className="btn btn-primary btn-lg">learn more</Link>
      </div>
    );
  }
}

export default HomePage;
