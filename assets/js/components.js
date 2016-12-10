import React from 'react';

require("../css/app.css");

const Header = (props) => {
  return (
    <header className='header'>
      <h1>Can I Watch?</h1>
    </header>
  )
};
const Footer = (props) => {
  return (
    <footer className='footer'>
      <p className="footer-text">Made by <a href="https://matthamlin.me">Matt Hamlin</a> with 🎧 and 🍣.</p>
    </footer>
  )
};

class Results extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
  };

  componentWillMount() {
    const context = this;
    window.fetch('/assets/stores/listing.json').then(function (response) {
      return response.json().then((jsonResponse) => {
        console.log(jsonResponse);
        console.log(context);
        context.setState({
          results: jsonResponse
        });
      });
    });
  };

  render() {
    return (
      <div className="results">
        {this.state.results.map(val => {
          return <div className="result">{val.title} is {val.good ? 'ok' : 'not ok'} to watch on an airplane.</div>
        })}
      </div>
    )
  }
};




export const App = (props) => {
  return (
    <div className='app'>
      <Header />
      <Results />
      <Footer />
      <link href="https://fonts.googleapis.com/css?family=Duru+Sans" rel="stylesheet" />
    </div>
  )
}
