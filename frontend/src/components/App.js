import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const NOTES_URL = 'http://localhost:3000/api/v1/notes'
const USERS_URL = 'http://localhost:3000/api/v1/users'

class App extends Component {

  constructor(){
    super();
    this.state ={
      notes: [],
      users: [],
      viewNote: null,
      editNote: null,
      search: ''
    }
  }

  handleSearchInput = (searchInput) =>{
    this.setState({search: searchInput})
  }

  getFilteredNotes = () =>{
    const search = this.state.search.toLowerCase()
    const filteredNote = this.state.notes.filter(note =>{
      return note.title.toLowerCase().includes(search)
    })
    return filteredNote
  }

  handleNoteListSelect= (e) =>{
    if(e.target.matches('h2') || e.target.matches('p')){

      const uniqNote = this.state.notes.find(note=>{
        return note.id === parseInt(e.target.parentElement.id)
      })
      this.setState({
        editNote: null, 
        viewNote: uniqNote
      })
    }
    else{
      const uniqNote = this.state.notes.find(note=>{
        return note.id === parseInt(e.target.id)
      })
      this.setState({
        editNote: null,
        viewNote: uniqNote
      })
    }   
  }

  reRenderNoteView = () =>{
    this.setState({
      editNote: null,
      viewNote: this.state.editNote
    })
  }
  handleEditRender= () =>{
    this.setState({
      editNote: this.state.viewNote,
      viewNote: null
    })
  }

  componentWillMount(){
    this.fetchNotes()
    this.fetchUsers()
   }

  fetchNotes =()=>{
    return fetch(NOTES_URL).then(resp => resp.json()).then(posts => this.setState({notes: posts}))
  }

  fetchUsers =()=>{
    return fetch(USERS_URL).then(resp => resp.json()).then(people => this.setState({users: people}))
  }


  newNoteFetch = () =>{
    const newNote = { user_id: 1, title: "default", body: "placeholder"}
    this.setState({notes: this.state.notes.concat(newNote)})

    return fetch(NOTES_URL,{
      method:'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote)
    }).then(resp => resp.json())
  }

  patchNoteEdit = (title, body) =>{
    //instance needed
    this.setState({
      editNote:{ 
        ...this.state.editNote, 
        title: title, 
        body: body}
      })
     const editedNote ={ ...this.state.editNote, title: title, body: body}

     return fetch(`http://localhost:3000/api/v1/notes/${this.state.editNote.id}`,{
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editedNote)
          }).then(resp => resp.json())
            .then(this.fetchNotes())
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer 
          notes={this.getFilteredNotes()} 
          handleNoteListSelect={this.handleNoteListSelect}
          viewNote={this.state.viewNote}
          editNote={this.state.editNote}
          handleEditRender={this.handleEditRender}
          reRenderNoteView={this.reRenderNoteView}
          patchNoteEdit={this.patchNoteEdit}
          newNoteFetch={this.newNoteFetch}
          handleSearchInput={this.handleSearchInput}
          />
      </div>
    );
  }
}

export default App;
