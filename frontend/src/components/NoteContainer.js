import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
const notesURL = 'http://localhost:3000/api/v1/notes/';


class NoteContainer extends Component {

  constructor() {
    super()

    this.state = {
      notes: [],
      selectedNote: null,
      searchInput: '',
      noteToEdit: null,
    }

  }


  render() {
    const {updateSearch, filteredNotes} = this

    return (
      <Fragment>
        <Search
          updateSearch={updateSearch}

        />
        <div className='container'>
          <Sidebar
          notes={filteredNotes}
          handleClick={this.handleClick}
          selectedNote={this.state.selectedNote}
          createNote={this.createNote}
          postNewNote={this.postNewNote}
          />
          <Content
          selectedNote={this.state.selectedNote}
          noteToEdit={this.state.noteToEdit}
          editNote={this.editNote}
          handleChange={this.handleChange}
          cancelEditingNote={this.cancelEditingNote}
          forPatchingNote={this.forPatchingNote}
          />
        </div>
      </Fragment>
    );
  }

  fetchNotes() {
    fetch(notesURL)
      .then(resp => resp.json())
      .then((notes) => {
        this.setState({notes: notes})
      })
  }

  componentDidMount() {
    this.fetchNotes()
  }

  handleClick = (selectedNote) => {
    this.setState({
      selectedNote: selectedNote,
    })
  }

  editNote = (selectedNote) => {
    this.setState({
      noteToEdit: selectedNote,
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateSearch = searchInput => {
    this.setState({ searchInput: searchInput })
  }

  filterByInput = notes =>
    notes.filter(note =>
      note.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
    || note.body.toLowerCase().includes(this.state.searchInput.toLowerCase())
    )

  get filteredNotes() {
    return this.filterByInput(this.state.notes)
  }

  postNewNote = (url, data) => {
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
      body: JSON.stringify(data)
    }).then(response => response.json())
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

  cancelEditingNote = () => {
    this.setState({
      noteToEdit: null,
    })
  }

    patchNote = (url, data) => {
      return fetch(url, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
        body: JSON.stringify(data)
      }).then(response => response.json())

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

    forPatchingNote = id => {
      // event.preventDefault()
      let urlforNote = notesURL + this.state.selectedNote.id;
      let revisedNote = {
        body: this.state.body,
        title: this.state.title,
        user: {
          id: 2,
          name: 'ruthnewman'
        }
      }
      this.patchNote(urlforNote, revisedNote)
      const notes = this.props.notes.map(note =>
            note.id === id
            ? {...note, body: this.state.body, title: this.state.title}
            : note)
          this.setState({ notes })
    }
  }

export default NoteContainer;
