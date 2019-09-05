ReactDOM.render(
  React.DOM.h1(
    {
      id: "my-heading",
      className: "pretty",
      style: {
        background: "black",
        color: "red",
        fontFamily: "Verdana",
      }
    },
      "Witaj, świecie!"
  ),
  document.getElementById ("app")
);