var React = require('react');

class Popular extends React.Component{

  constructor(props) {

    super(props);

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState({ selectedLanguage: lang });
  }

  render() {

    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Css', 'Python'];

    return (
      <ul className='languages'>
        {
          languages.map( function (lan) {
            return (
              <li
                key={ lan }
                onClick={ this.updateLanguage.bind(null, lan) }
                style={ lan === this.state.selectedLanguage ? { color: '#d0021b' } : null }
              >
                { lan }
              </li>
            )
          }, this)
        }
      </ul>
    )
  }
}

module.exports = Popular;