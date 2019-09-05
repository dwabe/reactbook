/*
var Component = React.createClass({
  propTypes: {
    firstName: React.PropTypes.string.isRequired,
    middleName: React.PropTypes.string.isRequired,
    familyName: React.PropTypes.string,
    address: React.PropTypes.string.isRequired,
  },
  getDefaultProps: function() {
    return {
      middleName: 'brak',
      address: 'nie dotyczy'
    };
  },
  render: function() {
    return React.DOM.span(null, "Mam na imię " + this.props.firstName + ", nazwisko rodowe: " + this.props.middleName + ". Mój adres: " +this.props.address + ".");
  }
});

ReactDOM.render(
  React.createElement(Component, {
    firstName: "Jan",
    //name: 123,
  }),
  document.getElementById("app")
);
*/

var TextAreaCounter = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      text: '',
    };
  },
  getInitialState: function() {
    return {
      text: this.props.text,
    };
  },
  _textChange: function (ev) {
    this.setState({
      text: ev.target.value,
    });
  },
  render: function() {
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange,
      }),
      React.DOM.h3(null, this.state.text.length)
    );
  }
});

ReactDOM.render(
  React.createElement(TextAreaCounter, {
    text: "Dupa",
  }),
  document.getElementById("app")
);

