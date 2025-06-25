function Heading({ text }) {
  return <h2 className="page-heading">{text}</h2>;
}

export default Heading;

//I created this Heading component to pass in text as a prop and keep things flexible. It helps make the headings more reusable and maintainable.
