import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

URL = 'http://localhost:3001/api/v1/notes'

class NoteContainer extends Component {

  componentDidMount() {
    this.renderNotes()
  }
  constructor() {
    super()
    this.state = {
      notes: [],
      selectedNote: null,
      edit: false
    }
  }

  //Render all notes 
  renderNotes = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(array => this.setState({ notes: array }))
  }

  //Display individual note info 
  selectNote = note => {
    this.setState({
      selectedNote: note,
      edit: false,
    })
  }

  //Switch to edit view 
  editView = () => {
    this.setState({ edit: !this.state.edit })
  }


  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar
            notes={this.state.notes}
            selectNote={this.selectNote} />
          <Content
            state={this.state}
            editView={this.editView} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
