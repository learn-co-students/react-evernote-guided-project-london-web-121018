import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.note.title,
      body: props.note.body,
    }
  }

  editNoteAttribute = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <form className="note-editor">
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.editNoteAttribute} />
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.editNoteAttribute} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={this.props.editView} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
