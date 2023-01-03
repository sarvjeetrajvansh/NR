const heading1 = React.createElement("h1", { key: "head1" }, "Head1");
const heading2 = React.createElement("h2", { key: "head2" }, "Head2");

const container = React.createElement(React.Fragment, { key: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
