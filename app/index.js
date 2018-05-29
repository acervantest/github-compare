var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {

  render() {
    return (
      <div>React Github Compare with React!</div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

