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
