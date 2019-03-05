import React, { Component } from 'react';

URL = 'http://localhost:3001/api/v1/notes'
class NoteEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.note.title,
      body: props.note.body,
    }
  }
  //Make body and title editable in state
  editNoteAttribute = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  //Save edited note 
  saveNote = (e, note) => {
    e.preventDefault()
    note.title = this.state.title
    note.body = this.state.body
    fetch(`${URL}/${note.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then(() => this.props.editView())
  }

  render() {
    return (
      <form onSubmit={e => this.saveNote(e, this.props.note)} className="note-editor">
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
