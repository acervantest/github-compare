var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Css', 'Python'];
    return (
        <ul className='languages'>
          {
            languages.map( function (lan) {
              return (
                <li
                  key={ lan }
                  onClick={ props.onSelect.bind(null, lan) }
                  style={ lan === props.selectedLanguage ? { color: '#d0021b' } : null }
                >
                  { lan }
                </li>
              )
            }, this)
          }
        </ul>
    )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

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


    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )

  }
}

module.exports = Popular;