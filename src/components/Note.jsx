function Note({ children }) {
  return <div className="note-box">{children}</div>;
}

export default Note;

//This Note component wraps the notes section in the dashboard. I wanted it to have its own styling and feel more modular, so I turned it into a reusable wrapper.
