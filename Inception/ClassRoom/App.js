const heading1 = React.createElement("h1", { id: "head1" }, "Head1");
const heading2 = React.createElement("h2", { id: "head2" }, "Head2");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
