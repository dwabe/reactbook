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
var logMixin = {
  _log: function(methodName, args) {
    console.log(this.name + '::' + methodName, args);
  },
  componentWillUpdate:  function() {
    this._log('componentWillUpdate',  arguments);
  },
  componentDidUpdate:   function() {
    this._log('componentDidUpdate',   arguments);
  },
  componentWillMount:   function() {
    this._log('componentWillMount',   arguments);
  },
  componentDidMount:    function() {
    this._log('componentDidMount',    arguments);
  },
  componentWillUnmount: function() {
    this._log('componentWillUnmount', arguments);
  },
};

var TextAreaCounter = React.createClass({
  name: 'TextAreaCounter',
  mixins: [logMixin],
  propTypes: {
    defaultValue: React.PropTypes.string,
  },
  /*getDefaultProps: function() {
    return {
      text: '',
    };
  },*/
  getInitialState: function() {
    return {
      text: this.props.defaultValue,
    };
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({
      text: newProps.defaultValue,
    });
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

var myTextAreaCounter = ReactDOM.render(
  React.createElement(TextAreaCounter, {
    defaultValue: "Jan",
  }),
  document.getElementById("app")
);

myTextAreaCounter = ReactDOM.render(
  React.createElement(TextAreaCounter, {
    defaultValue: "Witaj",
  }),
  document.getElementById("app")
);
