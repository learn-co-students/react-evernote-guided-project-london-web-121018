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
    this.setState({selectedNote: note})
  }

  handleEditClick = (note) => {
    this.setState({showEdit: note})
  }

  handleSaveClick = (selectedNote, e) => {
    e.preventDefault();

    return fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(selectedNote)
    }).then( resp => resp.json())
  }
    // and then you ought setState with the notes that come back after the patch,
    // that in turn updates App's state, and everything is re-rendered


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
        />
      </div>
    );
  }
}

export default App;
