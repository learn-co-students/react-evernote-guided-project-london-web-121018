import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
const API = 'http://localhost:3000/api/v1/notes'

class App extends Component {

  constructor() {
  super();
    this.state = {
      notes: [],
      selectedNote: null,
      showEdit: false,
    };
  }

  componentDidMount () {
  fetch(API)
    .then( resp => resp.json() )
    .then( notes => this.setState({ notes: notes }))
  }

  handleNoteClickForContent = (note) => {
    this.setState({
      selectedNote: note
    })
  }

  handleEditClick = (note) => {
    this.setState({
      showEdit: true
    })
  }

  handleCancelClick = () => {
    this.setState({
      showEdit: false
    })
  }

  handleSaveClick = (selectedNote, e) => {
    e.preventDefault();

    return fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(selectedNote)
    }).then( resp => resp.json())
      .then( note => {
        const updatedNotes = this.state.notes.map( n => n.id == note.id ? note : n)
        this.setState({ notes: updatedNotes })
      })
  }

  createNote = () => {
    let defaultNewNote = {
      body: 'placeholder',
      title: 'default',
      user: {
        id: 2,
        name: 'ruthnewman'
      }
    }
    this.postNewNote(notesURL, defaultNewNote)
      .then( newNote => this.setState({
        notes: [...this.state.notes, newNote]
      }))
  }


  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer
        theThingWeArePassing={this.state.notes}
        handleNoteClickForContent={this.handleNoteClickForContent}
        selectedNotePassingToContainer={this.state.selectedNote}
        handleEditClick={this.handleEditClick}
        showEdit={this.state.showEdit}
        handleSaveClick={this.handleSaveClick}
        updateInputValue={this.updateInputValue}
        handleCancelClick={this.handleCancelClick}
        createNote={this.createNote}
        />
      </div>
    );
  }
}

export default App;
