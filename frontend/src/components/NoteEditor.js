import React, { Component } from 'react';

class NoteEditor extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: this.props.editNote.title,
      body: this.props.editNote.body
    }
  }
  handleTitleInput = (e) =>{this.setState({title: e.target.value})}

  handleBodyInput = (e) =>{this.setState({body: e.target.value})}

  submitEditChange = (e) =>{
    e.preventDefault()
    const title = this.state.title
    const body = this.state.body
    this.props.patchNoteEdit(title, body);
  }




  render() {
    return (
      <form className="note-editor" onSubmit={this.submitEditChange}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleInput}/>
        <textarea name="body" value={this.state.body} onChange={this.handleBodyInput}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.reRenderNoteView}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
